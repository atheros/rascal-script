import {VmContext} from './vm-types';

export type VmContextProxy = VmContext;

export function createContextProxy(...contexts: VmContext[]): VmContextProxy {
    const local = {};
    return new Proxy(local, {
        set(target: typeof local, p: string | symbol, newValue: any): boolean {
            for(const c of contexts) {
                if (Object.hasOwn(c, p)) {
                    // Local shadow of parent context.
                    c[p as any] = newValue;
                    return true;
                }
            }

            contexts[0][p as any] = newValue;
            return true;


                // // Create a new local property.
                // // Note: Without this, the Proxy's set handler of parent context would be called, passing the new
                // //       property up the chain.
                // Object.defineProperty(local, p, {
                //     value: newValue,
                //     writable: true,
                //     enumerable: true,
                //     configurable: true,
                // });
        },
        get(target: typeof local, p: string | symbol): any {
            for(const c of contexts) {
                if (Object.hasOwn(c, p)) {
                    return c[p as any];
                }
            }

            return undefined;
        },
        getOwnPropertyDescriptor(target: typeof local, p: string | symbol): PropertyDescriptor | undefined {
            for(const c of contexts) {
                if (Object.hasOwn(c, p)) {
                    return Object.getOwnPropertyDescriptor(c, p);
                }
            }

            return undefined;
        },
        ownKeys(): ArrayLike<string | symbol> {
            const set = new Set(Object.keys(contexts[0]));
            for(let i = 1; i < contexts.length; i++) {
                Object.keys(contexts[i]).forEach(key => set.add(key));
            }

            return Array.from(set.values());
        },
        has(target: typeof local, p: string | symbol): boolean {
            for(const c of contexts) {
                if (Object.hasOwn(c, p)) {
                    return true;
                }
            }

            return false;
        },
    });

}