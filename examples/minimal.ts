import {VirtualMachine} from 'rascal-script';
import {cmdLog} from './utils/commands';

const vm = new VirtualMachine({
    api: {}, commands: {
        echo: cmdLog
    }
});

vm.loadScript("test", `
echo "Hello World!\n\nHow are you?"
`);

vm.call("test");
vm.process().then();