import {VmConfig} from './vm-types';
import {VirtualMachine} from './vm';
import {compile} from '../compiler/compiler';
import {Parser} from 'expr-eval';

/**
 * Create a new virtual machine for Rascal scripts.
 *
 * It provides the following defaults for the configuration of the VM:
 * - codeCompiler - default code compiler
 * - expressionEvaluator - expr-eval expression evaluator with assignment operator enabled
 *
 * @param config
 */
export function createVM<API extends object>(config: VmConfig<API>) {
    const fullConfig: VmConfig<API> = {
        ...config
    };

    if (!fullConfig.codeCompiler) {
        fullConfig.codeCompiler = compile;
    }

    if (!fullConfig.expressionEvaluator) {
        const parser = new Parser({
            operators: {
                assignment: true,
            },
        });

        fullConfig.expressionEvaluator = (expr: string, context: any) => {
            return parser.evaluate(expr, context);
        }
    }

    return new VirtualMachine(fullConfig);
}