import {VmBuiltins, VmCommandCode, VmRoutine} from 'rascal-script';

export function cmdWait(argv: any[], routine: VmRoutine<any>) {
    if (argv.length !== 2) {
        throw new Error('Invalid number of arguments for wait command');
    }

    if (!routine.cmdState) {
        return {
            code: VmCommandCode.WAIT,
            wait: Number(argv[1]),
            state: true
        };
    }
}

export function cmdJump(argv: any[], routine: VmRoutine<any>) {
    return VmBuiltins.cmdJump(argv, routine);
}

export function cmdDebugLog(argv: any[]) {
    console.log('LOG:', ...argv.slice(1));
}

export function cmdLog(argv: any[]) {
    console.log(...argv.slice(1));
}

