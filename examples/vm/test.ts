/**
 * This is a simple test of VM runtime.
 *
 * It tests raw VM commands to make sure more complex scripts might work.
 */
import {VirtualMachine} from '../../src';
import {cmdDebugLog, cmdWait} from '../utils/commands';


const sourceCode: any[] = [
    ["log", "Hello World!"],
    ["log", "How are you?"],
    [".y"], // yield control back to the main process
    ["log", "Keep running after 2 seconds..."],
    ["wait", 2000], // wait 2 seconds
    ["log", "Done!"],
    [".x"] // terminate routine
];

const main = async () => {
    const vm = new VirtualMachine({
        api: {},
        commands: {
            log: cmdDebugLog,
            wait: cmdWait,
        }
    });

    let loops = 0;

    vm.loadCode("test", sourceCode);
    vm.call("test");

    let done = false;
    while (!done) {
        loops++;
        done = await vm.process();
        // wait some time.
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    console.log('Completed');
    console.log('Loops', loops);
}

main().then().catch(console.error);
