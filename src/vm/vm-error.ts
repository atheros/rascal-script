import {VmRoutine} from './vm-routine';

export class VmError extends Error {

}

export class VmRoutineError extends VmError {
    constructor(public readonly routine: VmRoutine<any>, message: string) {
        super(message);
    }
}
