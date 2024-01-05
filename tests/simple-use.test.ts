import {Compiler, VirtualMachine} from '../src';

describe('Simple use tests', () => {

    const commands = {
        echo() {

        }
    };

    beforeEach(() => {
        commands.echo = jest.fn();
    })

    it('should run simple test', async () => {
        const vm = new VirtualMachine({
            commands,
        });

        const compiler = new Compiler();
        const code = compiler.compile(`echo "Hello World!"`);
        vm.loadCode('test', code);
        vm.call('test');
        const done = await vm.process();

        expect(done).toBe(true);
        expect(commands.echo).toBeCalledTimes(1);
    });

    it('should run with provided compiler', async () => {
        const vm = new VirtualMachine({
            commands,
            codeCompiler(): any[] {
                return [['echo', 'hello']];
            }
        });

        vm.loadScript('test', 'echo whatever');
        vm.call('test');
        const done = await vm.process();

        expect(done).toBe(true);
        expect(commands.echo).toBeCalledTimes(1);
    });

    it('should restore', () => {
        const mkVm = () => new VirtualMachine({
            commands,
            codeCompiler(): any[] {
                return [
                    ['echo', 'hello', false],
                    ['this', 'is', 'a', 'test'],
                ];
            }
        });

        const vm1 = mkVm();
        vm1.loadScript('test', 'echo whatever');
        const vm2 = mkVm();
        vm2.loadScript('test', 'echo whatever');

        vm1.call('test');
        vm1.context['global'] = 10;
        vm1.routines[0].context['local'] = 20;
        vm1.routines[0].ip = 1;

        const state = vm1.storeState();
        expect(typeof state).toBe('string');

        vm2.restoreState(state);

        expect(vm2.context['global']).toBe(10);
        expect(vm2.routines[0].context['local']).toBe(20);
        expect(vm2.routines[0].ip).toBe(1);
    });
});
