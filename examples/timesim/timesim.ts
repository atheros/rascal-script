import minimist from 'minimist';
import {readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {createVM} from 'rascal-script';
import {cmdDebugLog, cmdJump, cmdWait} from '../utils/commands';
import {dumpVM} from '../utils/dump';
import {fileExists} from '../utils/fs';

const args = minimist(process.argv.slice(2));
if (args.h || args.help) {
    console.log('Usage: ts-node timesim.ts [-n|--new]');
    process.exit(0);
}

const saveFile = 'timesim.json';

async function main() {
    let running = true;

    const vm = createVM({
        commands: {
            log: cmdDebugLog,
            wait: cmdWait,
            jump: cmdJump,
        },
        initVarsAtRuntime: true
    });

    vm.loadScript('script', await readFile(path.join(__dirname, 'script.rascal'), 'utf-8'));

    const exists = await fileExists(saveFile);

    if (!exists || args.n || args.new) {
        console.log('Running new simulation.');
        console.log('Interrupt execution after a few seconds to save state and relaunch the simulation again to continue.');
        vm.call('script');
    } else {
        console.log('Running existing simulation.');
        const saveData = JSON.parse(await readFile(saveFile, 'utf-8'));
        if (!saveData.sign || saveData.sign !== 'savefile') {
            throw new Error(`Invalid data in ${saveFile}`);
        }
        vm.restoreState(saveData.data);
    }

    process.on('SIGINT', () => {
        console.log(`SIGINT, saving state to ${saveFile}`);
        running = false;

        writeFile(saveFile, JSON.stringify({
            'sign': 'savefile',
            'data': vm.storeState()
        })).then(() => {
           console.log('State saved.');
        }).catch((error) => {
            console.error('Error saving state.', error);
        });
    });


    while (running) {
        try {
            await vm.process();
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
        console.log('Main function done.');
    })
    .catch((err) => {
        console.error('Main function failed!', err);
        process.exit(1);
    });
