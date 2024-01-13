import {VmChoiceOption, VmCommandCode, VmCommandResult} from './vm-types';
import {VmError} from './vm-error';
import {VmRoutine} from './vm-routine';

/**
 * Built-in commands and helpers for the VM.
 */
export class VmBuiltins {

    /**
     * Jump to target if condition is truthy.
     * If target is a number, just is absolute.
     * If target is a string, it's a label.
     *
     * @param target
     * @param condition
     * @param routine
     */
    static jumpHelper<API extends object>(target: any, condition: boolean, routine: VmRoutine<API>): void {
        if (!condition) {
            return;
        }

        if (typeof target === 'number') {
            routine.ip = target;
        } else if (typeof target === 'string') {
            // Label jump
            const label = routine.vmApi.getScript(routine.file).labels[target];
            if (typeof label === 'undefined') {
                throw new VmError(`Invalid jump to ${target}, label not found.`);
            }
            routine.ip = label;
        } else {
            throw new VmError(`Invalid jump to ${target}`);
        }
    }

    static cmdJump<API extends object>(argv: any[], routine: VmRoutine<API>): VmCommandResult {
        const where = argv[1];
        VmBuiltins.jumpHelper(where, true, routine);
    }

    static cmdJumpIf<API extends object>(argv: any[], routine: VmRoutine<API>): VmCommandResult {
        VmBuiltins.jumpHelper(argv[1], argv[2], routine);
    }

    static cmdJumpIfNot<API extends object>(argv: any[], routine: VmRoutine<API>): VmCommandResult {
        VmBuiltins.jumpHelper(argv[1], !argv[2], routine);
    }

    static cmdJumpCmd<API extends object>(argv: any[], routine: VmRoutine<API>): VmCommandResult {
        return VmBuiltins.jumpHelper(argv[1], routine.cmdResult == argv[2], routine);
    }

    static cmdCondNext<API extends object>(argv: any[], routine: VmRoutine<API>): VmCommandResult {
        if (!argv[1]) {
            routine.ip++;
        }

    }

    static cmdYield(): VmCommandResult {
        return {code: VmCommandCode.YIELD};
    }

    static cmdExit(): VmCommandResult {
        return {code: VmCommandCode.EXIT};
    }

    static cmdVarGlobal<API extends object>(argv: any[], routine: VmRoutine<API>): VmCommandResult {
        routine.vmApi.getGlobalContext()[argv[1]] = argv[2];
    }

    static cmdVarLocal<API extends object>(argv: any[], routine: VmRoutine<API>): VmCommandResult {
        routine.vmApi.getScriptContext(routine.file)[argv[1]] = argv[2];
    }

    static cmdVarSet<API extends object>(argv: any[], routine: VmRoutine<API>): VmCommandResult {
        routine.routineContext[argv[1]] = argv[2];
    }

    static cmdExpr<API extends object>(argv: any[], routine: VmRoutine<API>): VmCommandResult {
        const result = routine.vmApi.eval(argv[1], routine.context);
        if (result && result instanceof Promise) {
            return result.then((result) => {
                return {
                    code: VmCommandCode.DONE,
                    result
                };
            });
        }

        return {
            code: VmCommandCode.DONE,
            result
        }
    }

    static cmdLabel<API extends object>(argv: any[], routine: VmRoutine<API>): VmCommandResult {
        routine.lastLabel = argv[1];
    }

    static cmdChoice<API extends object>(argv: any[], routine: VmRoutine<API>): VmCommandResult {
        const [, cmdName, opts, ...args] = argv as [any, string, VmChoiceOption[], ...any[]];
        const cmd = routine.vmApi.getCommand(cmdName);

        return cmd(
            [
                cmdName,
                opts.map((opt) => {
                    let cond = !!opt.cond;
                    if (typeof opt.cond === 'object' && 'expr' in opt.cond) {
                        cond = routine.vmApi.eval(opt.cond.expr, routine.context);
                    }

                    return {
                        text: opt.text,
                        cond
                    };
                }),
                ...args
            ],
            routine
        )

    }

    private constructor() {
    }
}