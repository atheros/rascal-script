import {VmError} from './vm-error';
import {
    VmCommandCode, VmCodeCompiler,
    VmCommandHandler,
    VmConfig, VmExpressionEvaluator,
    VmRoutineInterface,
    VmScript,
    VmScriptCommands, VmTimeFunction, VmCommandResultObject, VmContext
} from './vm-types';
import {VmBuiltins} from './vm-builtins';
import {VmRoutine} from './vm-routine';
import {findLine} from '../resolver/resolve';
import {createContextProxy} from './vm-context-proxy';


export class VirtualMachine<API extends object> {
    context: VmContext;
    readonly scripts: Map<string, VmScript> = new Map();
    readonly routines: VmRoutine<API>[] = [];

    readonly commands: Map<string, VmCommandHandler<API>> = new Map();

    readonly api: API;
    readonly getTime: VmTimeFunction;

    private readonly initVarsAtRuntime: boolean;
    private readonly expressionEvaluator: VmExpressionEvaluator;
    private readonly codeCompiler: VmCodeCompiler;

    // TODO: pause/resume execution of specific routines


    private readonly vmApi: VmRoutineInterface;

    constructor(
        config: VmConfig<API>
    ) {
        this.api = config.api ?? {} as API;
        this.context = config.globalContext ?? {};
        this.initVarsAtRuntime = config.initVarsAtRuntime ?? false;
        this.expressionEvaluator = config.expressionEvaluator ?? ((expr: string, routine: VmRoutine<API>) => {
            throw new VmError(`Expression evaluator not set, triggered from ${routine.file}`);
        });
        this.codeCompiler = config.codeCompiler ?? (() => {
            throw new VmError('Code compiler not provided');
        });
        this.getTime = config.timeFunction ?? (() => Date.now());

        const noop = () => undefined;
        this.commands.set(VmScriptCommands.COND, VmBuiltins.cmdCondNext);
        this.commands.set(VmScriptCommands.JUMP, VmBuiltins.cmdJump);
        this.commands.set(VmScriptCommands.JUMP_IF, VmBuiltins.cmdJumpIf)
        this.commands.set(VmScriptCommands.JUMP_IFN, VmBuiltins.cmdJumpIfNot);
        this.commands.set(VmScriptCommands.JUMP_CMD, VmBuiltins.cmdJumpCmd);
        this.commands.set(VmScriptCommands.YIELD, VmBuiltins.cmdYield);
        this.commands.set(VmScriptCommands.EXIT, VmBuiltins.cmdExit);

        if (this.initVarsAtRuntime) {
            this.commands.set(VmScriptCommands.GLOBAL, VmBuiltins.cmdVarGlobal);
            this.commands.set(VmScriptCommands.LOCAL, VmBuiltins.cmdVarLocal);
        } else {
            this.commands.set(VmScriptCommands.GLOBAL, noop);
            this.commands.set(VmScriptCommands.LOCAL, noop);
        }
        this.commands.set(VmScriptCommands.SET, VmBuiltins.cmdVarSet);
        this.commands.set(VmScriptCommands.EXPR, VmBuiltins.cmdExpr);
        this.commands.set(VmScriptCommands.LABEL, VmBuiltins.cmdLabel);

        if (config.commands) {
            Object.keys(config.commands).forEach((key) => {
                this.commands.set(key, config.commands[key]);
            });
        }

        this.vmApi = {
            getScript: (name) => this.scripts.get(name),
            getGlobalContext: () => this.context,
            getScriptContext: (script) => {
                return this.scripts.get(script).context;
            },
            eval: this.expressionEvaluator
        }
    }

    /**
     * Add or replace a script.
     * @param name
     * @param code
     */
    loadCode(name: string, code: any[]): void {
        const script: VmScript = {
            code,
            labels: {},
            context: {},
        };
        this.scripts.set(name, script);

        this.parseScript(script);
    }

    loadScript(name: string, scriptCode: string): void {
        const code = this.codeCompiler(scriptCode, name);
        this.loadCode(name, code);
    }

    /**
     * Call a script or label in a script creating a new co-routine.
     *
     * This will be executed by run() function.
     *
     * @param file
     * @param entryPoint
     */
    call(file: string, entryPoint: string | null = null): VmRoutine<API> {
        const script = this.scripts.get(file);
        if (!script) {
            throw new VmError(`Script ${file} not found`);
        }

        const ip = entryPoint ? script.labels[entryPoint] : 0;

        const routine = new VmRoutine(this.api, this.context, ip, file, this.vmApi);
        this.routines.push(routine);
        return routine;
    }

    /**
     * Process all routines.
     *
     * @returns true if all routines are done, false otherwise.
     */
    async process(): Promise<boolean> {
        const time = this.getTime();
        const routines = Array.from(this.routines);
        const toRun = Array.from(routines);

        for (const routine of toRun) {
            if (routine.done) {
                this.removeRoutine(routine);
                continue;
            }

            if (typeof routine.next === 'number') {
                const delta = time - routine.next;
                if (delta <= 0) {
                    // Routine is not ready to be run yet.
                    continue;
                }
            }

            if (await this.runRoutine(routine, time)) {
                this.removeRoutine(routine);
            }
        }

        return this.routines.length === 0;
    }

    storeState(): string {
        const state = {
            context: this.context,
            routines: this.routines.map((routine) => {
                return {
                    file: routine.file,
                    next: routine.next,
                    lastLabel: routine.lastLabel,
                    cmdName: routine.cmdName,
                    cmdState: routine.cmdState,
                    cmdResult: routine.cmdResult,
                    done: routine.done,
                    context: routine.routineContext,
                    ...this.storeRoutineIP(routine),
                };
            }),
            scripts: Array.from(this.scripts.entries()).map(([name, script]) => {
                return {
                    name,
                    context: script.context,
                };
            }),
        }

        return JSON.stringify(state);
    }

    private storeRoutineIP(routine: VmRoutine<API>): any {
        const countBefore = 10;
        const countAfter = 5;

        const startLine = routine.ip < countBefore ? 0 : routine.ip - countBefore;
        const lines = this.scripts.get(routine.file)!.code
            .slice(startLine, routine.ip + countAfter)
            .map(l => JSON.stringify(l));

        return {
            ip: routine.ip < countBefore ? routine.ip : countBefore,
            code: lines,
        }
    }

    restoreState(state: string): void {
        const data = JSON.parse(state);
        this.context = data.context;
        while (this.routines.length) {
            const r = this.routines.pop();
            r.done = true;
        }


        data.scripts.forEach(s => {
            const script = this.scripts.get(s.name);
            if (!script) {
                throw new Error(`Could not restore routine: Script not found ${s.name}`);
            }

            script.context = s.context;
        });

        data.routines.forEach(r => {
            const script = this.scripts.get(r.file);
            if (!script) {
                throw new Error(`Could not restore routine: Script not found ${r.file}`);
            }
            const routine = this.call(r.file, null);
            routine.next = r.next;
            routine.lastLabel = r.lastLabel;
            routine.cmdName = r.cmdName;
            routine.cmdState = r.cmdState;
            routine.cmdResult = r.cmdResult;
            routine.done = r.done;
            routine.routineContext = r.context;
            const lines = script.code.map((l: string) => JSON.stringify(l));
            const line = findLine(r.code, lines, r.ip, true);
            if (line !== -1) {
                routine.ip = line;
            } else {
                const label = script.code.findIndex(l => l[0] === VmScriptCommands.LABEL && l[1] === r.lastLabel);
                if (label >= 0) {
                    routine.ip = label;
                } else {
                    throw new Error(`Could not restore routine: Last label not found ${r.lastLabel}`);
                }
            }

            routine.updateContext();
        });
    }

    private async runRoutine(routine: VmRoutine<API>, time: number): Promise<boolean> {
        while (!routine.done) {
            const script = this.scripts.get(routine.file);
            if (!script) {
                routine.done = true;
                this.removeRoutine(routine);
                throw new VmError(`Script ${routine.file} not found. Execution aborted.`);
            }

            if (routine.ip >= script.code.length) {
                routine.done = true;
                break;
            }

            const argv = script.code[routine.ip++];

            const cmd = this.commands.get(argv[0]);
            if (!cmd) {
                routine.done = true;
                this.removeRoutine(routine);
                throw new VmError(`Unknown command ${argv[0]} in ${routine.file}:${routine.ip}`);
            }

            routine.cmdName = argv[0];
            const parsedArgv = this.parseArgs(argv, routine.context);

            // console.log('script', 'ip', routine.ip-1, 'argv', parsedArgv, routine.cmdState);

            let result = cmd(parsedArgv, routine);
            if (result && 'then' in result) {
                result = await result;
            }

            if (result) {
                const code: VmCommandCode = 'code' in result ? result.code : VmCommandCode.DONE;
                if ('state' in result) {
                    routine.cmdState = result.state;
                }

                if ('result' in result) {
                    routine.cmdResult = result.result;
                }

                if (code === VmCommandCode.EXIT) {
                    routine.cmdState = null;
                    routine.done = true;
                    break;
                } else if (code === VmCommandCode.YIELD) {
                    routine.cmdState = null;
                    break;
                } else if (code === VmCommandCode.WAIT) {
                    // console.log('wait', time, (result as VmCommandResultObject).wait!);
                    routine.next = time + (result as VmCommandResultObject).wait!;
                    routine.ip--;
                    break;
                }
            }

            // Command is done executing.
            routine.cmdState = null;
        }

        // Detect if script has ended.
        if (routine.done) {
            this.removeRoutine(routine);
        }

        return routine.done;
    }

    private removeRoutine(routine: VmRoutine<API>) {
        const index = this.routines.indexOf(routine);
        if (index !== -1) {
            this.routines.splice(index, 1);
        }
    }

    private parseScript(script: VmScript) {
        const proxy = createContextProxy(script.context, this.context);
        script.code.forEach((argv, index) => {
            const op = argv[0];
            if (op === VmScriptCommands.GLOBAL && !this.initVarsAtRuntime) {
                this.context[argv[1]] = this.parseArgs([argv[2]], proxy)[0];
            } else if (op === VmScriptCommands.LOCAL && !this.initVarsAtRuntime) {
                script.context[argv[1]] = this.parseArgs([argv[2]], proxy)[0];
            } else if (op === VmScriptCommands.LABEL) {
                script.labels[argv[1]] = index;
            }
        });
    }

    private parseArgs(argv: any[], context: VmContext): any[] {
        const result: any[] = [argv[0]];
        for (let i = 1; i < argv.length; i++) {
            if (typeof argv[i] === 'object') {
                if (Object.hasOwn(argv[i], 'expr')) {
                    // console.log(`eval arg ${i}`, argv[i], this.expressionEvaluator(argv[i].expr, routine.context));
                    result.push(this.expressionEvaluator(argv[i].expr, context));
                } else {
                    // FIXME: Maybe normal object? Most likely error.
                    // console.log(`failed arg ${i}`, argv[i]);
                    result.push(null);
                }
            } else {
                result.push(argv[i]);
            }
        }
        return result;
    }
}