import minimist from 'minimist';
import {readFile, writeFile} from 'node:fs/promises';
import {VirtualMachine, VmRoutine, VmBuiltins} from 'rascal-script';
import path from 'node:path';
import {compile} from 'rascal-script/dist/compiler/compiler';
import {VmCommandCode, VmCommandResult, VmContext, VmChoiceOption} from 'rascal-script';
import {Parser} from 'expr-eval';
import {cmdJump, cmdLog, cmdWait} from '../utils/commands';
import {dumpVM} from '../utils/dump';
import {fileExists} from '../utils/fs';
import {prompt} from 'enquirer';

const args = minimist(process.argv.slice(2));
if (args.h || args.help) {
    console.log('Usage: ts-node timesim.ts [-n|--new]');
    process.exit(0);
}

const saveFile = 'savegame.json';

let activePrompt: any = null;

type API = { save: () => Promise<void> };

function choice(argv: any[], routine: VmRoutine<API>): VmCommandResult {
    const [, opts] = argv as [any, VmChoiceOption[]];

    if (routine.cmdState) {
        return {
            code: VmCommandCode.DONE,
            result: routine.cmdState.r,
        }
    }

    if (!activePrompt) {
        const choices: string[] = [];
        const results = {}

        opts.forEach((opt, index) => {
            if (opt.cond) {
                choices.push(opt.text);
                results[opt.text] = index;
            }
        });

        if (choices.length === 0) {
            throw new Error('No valid choices given!');
        }

        activePrompt = prompt({
            name: 'result',
            type: 'select',
            message: 'What do you want to do?',
            choices
        }).then((answer: any) => {
            routine.cmdState = {r: results[answer.result]}
            activePrompt = null;
        }).catch((e) => {
            console.log('Input aborted', e);
            vm.api.save().finally(() => {
                routine.done = true;
            });
        });
    }

    return {
        code: VmCommandCode.WAIT,
        wait: 50,
    };
}


let vm: VirtualMachine<API>;

async function main() {
    let running = true;
    const parser = new Parser({
        operators: {
            assignment: true,
        },
    });

    vm = new VirtualMachine({
        codeCompiler: compile,
        commands: {
            log: cmdLog,
            wait: cmdWait,
            jump: cmdJump,
            choice: choice,
            exit: VmBuiltins.cmdExit
        },
        expressionEvaluator: (expr: string, context: VmContext) => {
            return parser.evaluate(expr, context);
        },
        initVarsAtRuntime: true,
        api: {
            save() {
                running = false;

                return writeFile(saveFile, JSON.stringify({
                    'sign': 'savefile',
                    'data': vm.storeState()
                })).then(() => {
                    console.log('Game saved.');
                }).catch((error) => {
                    console.error('Error saving game.', error);
                });
            }
        },
    });

    vm.loadScript('script', await readFile(path.join(__dirname, 'room1.rascal'), 'utf-8'));
    dumpVM(vm);
    const exists = await fileExists(saveFile);

    if (!exists || args.n || args.new) {
        console.log('Starting a new game.');
        console.log('Press Ctrl+C to save the game and exit.');
        vm.call('script');
    } else {
        console.log('Restoring game.');
        console.log('Press Ctrl+C to save the game and exit.');
        const saveData = JSON.parse(await readFile(saveFile, 'utf-8'));
        if (!saveData.sign || saveData.sign !== 'savefile') {
            throw new Error(`Invalid data in ${saveFile}`);
        }
        vm.restoreState(saveData.data);
    }

    console.log('----------------------------------');

    process.on('SIGINT', () => {
        console.log(`SIGINT, saving game to ${saveFile}`);
        vm.api.save();
    });


    while (running) {
        try {
            if (await vm.process()) {
                break;
            }
        } catch (e) {
            console.error('Error processing vm: ', e);
            dumpVM(vm);
            running = false;
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
}


main()
    .then(() => {
        console.log(':: Main function done.');
    })
    .catch((err) => {
        console.error(':: Main function failed!', err);
        process.exit(1);
    });
