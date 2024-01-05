import {VirtualMachine} from 'rascal-script';

export function dumpVM(vm: VirtualMachine<any>) {
    console.log('VirtualMachine dump:')
    console.log('- Global context:', vm.context);
    console.log('- Script context:', vm.scripts.get('script').context);
    console.log('- VM code:', vm.scripts.get('script').code);
    console.log('- Labels:', vm.scripts.get('script').labels);

    vm.routines.forEach((routine, i) => {
        console.log(`- Routine #${i}:`);
        console.log('  - Done', routine.done);
        console.log(`  - IP: ${routine.file}:${routine.ip}`);
        console.log(`  - Cmd state:`, routine.cmdState);
        console.log(`  - Routine IP: ${routine.file}:${routine.ip}`);
        console.log('  - Context:', routine.context);
    });
}