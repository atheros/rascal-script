import {stat} from 'node:fs/promises';

export function fileExists(fn: string): Promise<boolean> {
    return stat(fn).then(() => true).catch(() => false);
}
