import {VirtualMachine} from './vm';
import {VmScript} from './vm-types';

describe('VM', () => {
    describe('constructor', () => {
        it('should create global context', () => {
            const vm = new VirtualMachine({});
            expect(typeof vm.context).toBe('object');
        })
    });

    describe('createRoutine', () => {
        it('should create routine', () => {
            const vm = new VirtualMachine({
                api: {},
            });
            vm.scripts.set('test', {} as VmScript);
            const routine = vm.call('test');
            expect(vm['routines'].length).toBe(1);
            expect(vm['routines'].includes(routine)).toBe(true);
        });
    });

    // describe('runRoutine()', () => {
    //     let vm: VirtualMachine<{}>;
    //     let runRoutine: (routine: VmRoutine<{}>, time: number) => Promise<boolean>;
    //
    //     beforeEach(() => {
    //         vm = new VirtualMachine<{}>({});
    //         runRoutine = vm['runRoutine'].bind(vm);
    //     });
    //
    //     it('should quit on last command', async () => {
    //
    //     });
    //
    //
    //     describe('it should handle command returns', () => {
    //
    //     });
    //
    // })
});