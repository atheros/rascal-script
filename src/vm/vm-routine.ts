import {VmContext, VmRoutineInterface} from './vm-types';
import {createContextProxy, VmContextProxy} from './vm-context-proxy';

export class VmRoutine<API extends object> {
    routineContext: VmContext;
    /** Context proxy for this routine. */
    context: VmContextProxy;
    /** Do not run this routine before this time. */
    next?: number;
    /** Last visited label. */
    lastLabel?: string;
    /** Current command name. */
    cmdName?: string;
    /** Saved command status (controlled by current running command). */
    cmdState?: any;
    /** Result stored by command. */
    cmdResult?: any;
    /** This routine is done. */
    done = false;



    constructor(
        public readonly api: API,
        public readonly parentContext: VmContext,
        public ip: number,
        public file: string,
        public vmApi: VmRoutineInterface<API>,
    ) {
        this.routineContext = {};
        this.updateContext();
    }

    updateContext() {
        this.context = createContextProxy(this.routineContext, this.vmApi.getScriptContext(this.file), this.parentContext);
    }
}