import {createContextProxy} from './vm-context-proxy';
import {VmContext} from './vm-types';

describe('VmContextProxy', () => {
    let cGlobal: VmContext;
    let cScript: VmContext;
    let cRoutine: VmContext;
    let proxy: VmContext;

    beforeEach(() => {
        cGlobal = {
            aGlobal: 10,
            a: 10,
            b: 10,
        };

        cScript = {
            aScript: 20,
            a: 20,
            b: 20,
            c: 10,
        };

        cRoutine = {
            aRoutine: 30,
            a: 30,
            c: 20,
        };

        proxy = createContextProxy(cRoutine, cScript, cGlobal);
    });

    describe('reading', () => {
        it('should create a context proxy', () => {
            expect(proxy).toBeDefined();
        });

        it('should read non-conflicting properties', () => {
            expect(proxy.aGlobal).toBe(10);
            expect(proxy.aScript).toBe(20);
            expect(proxy.aRoutine).toBe(30);
        });

        it('should keep order when reading properties', () => {
            expect(proxy.a).toBe(30);
            expect(proxy.b).toBe(20);
            expect(proxy.c).toBe(20);
        });
    });

    describe('writing', () => {
        it('should create new keys in top context', () => {
            proxy.foo = true;
            expect(proxy.foo).toBe(true);
            expect(cRoutine.foo).toBe(true);
            expect(cScript.foo).toBeUndefined();
            expect(cGlobal.foo).toBeUndefined();
        });

        it('should overwrite keys in topmost context they can be found in', () => {
            proxy.a = 40;
            expect(proxy.a).toBe(40);
            expect(cRoutine.a).toBe(40);
            expect(cScript.a).toBe(20);
            expect(cGlobal.a).toBe(10);

            proxy.b = 40;
            expect(proxy.b).toBe(40);
            expect(cRoutine.b).toBeUndefined();
            expect(cScript.b).toBe(40);
            expect(cGlobal.b).toBe(10);

            proxy.c = 40;
            expect(proxy.c).toBe(40);
            expect(cRoutine.c).toBe(40);
            expect(cScript.c).toBe(10);
            expect(cGlobal.c).toBeUndefined();
        });
    });

    describe('in operator', () => {
        it('should return true if any of the contexts contain the key', () => {
            expect('aGlobal' in proxy).toBe(true);
            expect('aScript' in proxy).toBe(true);
            expect('aRoutine' in proxy).toBe(true);
            expect('nonexistent' in proxy).toBe(false);
            expect('a' in proxy).toBe(true);
            expect('b' in proxy).toBe(true);
            expect('c' in proxy).toBe(true);
        });
    });

    describe('Object.keys()', () => {
        it('should return all keys from all contexts', () => {
            const keys = Object.keys(proxy);
            expect(keys).toContain('aGlobal');
            expect(keys).toContain('aScript');
            expect(keys).toContain('aRoutine');
            expect(keys).toContain('a');
            expect(keys).toContain('b');
            expect(keys).toContain('c');
        });
    });

    describe('Object.getOwnPropertyNames()', () => {
        it('should return all own properties from all contexts', () => {
            const keys = Object.getOwnPropertyNames(proxy);
            expect(keys).toContain('aGlobal');
            expect(keys).toContain('aScript');
            expect(keys).toContain('aRoutine');
            expect(keys).toContain('a');
            expect(keys).toContain('b');
            expect(keys).toContain('c');
        });
    });
});