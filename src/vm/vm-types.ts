import {VmRoutine} from './vm-routine';

export type VmContext = Record<string, any>;
export type VmExpressionEvaluator = (expression: string, context: VmContext) => any;
export type VmCodeCompiler = (source: string, filename: string) => any[];
export type VmTimeFunction = () => number;

export interface VmScriptSourceMapEntry {
    codeIndex: number;
    line: number;
    column?: number;
    file?: string;
}

export enum VmScriptCommands {
    /** Execute next command if condition is true, skip it otherwise. */
    COND = ".?",
    /** Perform unconditional jump to label. */
    JUMP = ".j",
    /** Perform jump to label if condition is truthy. */
    JUMP_IF = ".j?",
    /** Perform jump to label if condition is falsy. */
    JUMP_IFN = ".j!",
    /** Jump if command result equals value. */
    JUMP_CMD = ".jC?",
    // JUMP_IF_ELSE = ".j?!",
    /** Declare a local variable. */
    LOCAL = ".vl",
    /** Declare a global variable. */
    GLOBAL = ".vg",
    /** Yield execution to another routine. */
    YIELD = ".y",
    /** Exit execution of this routine. */
    EXIT = ".x",
    /** Define a label location. */
    LABEL = ":",
    /** Execute expression */
    EXPR = "$",
}

export interface VmScript {
    code: any[];
    labels: { [name: string]: number };
    sourceMap?: VmScriptSourceMapEntry[];
    context: VmContext;
}

export interface VmRoutineInterface {
    // createRoutine(scriptName: string, entryPoint: string): void;

    // addScript(scriptName: string, script: VmScript): Promise<VmScript>;

    getScript(scriptName: string): VmScript;

    getGlobalContext(): VmContext;

    getScriptContext(name: string): VmContext;

    eval: VmExpressionEvaluator;
}

export enum VmCommandCode {
    /** Wait given number of milliseconds and run the command again. */
    WAIT,
    /** Done, but yield control to the VM. */
    YIELD,
    /** Command is done (same as undefined result). */
    DONE,
    /** Exit this routine */
    EXIT,
}

export interface VmCommandResultObject {
    /** Command result code. */
    code: VmCommandCode;
    /** Wait this number of milliseconds before executing next command. */
    wait?: number;
    /** Save this state for an asyncronous command that is waiting some time. */
    state?: any;
    /** Result of the command. This can be used by next command, like .jC?. */
    result?: any;
}

export type VmCommandResult = VmCommandResultObject | void | Promise<VmCommandResultObject | void>;
export type VmCommandHandler<API extends object> = (argv: any[], routine: VmRoutine<API>) => VmCommandResult;

export interface VmCommands<API extends object> {
    [key: string]: VmCommandHandler<API>;
}


export class VmConfig<API extends object> {
    /**
     * API for the scripts commands.
     */
    api?: API;

    /**
     * Additional commands to be added to the VM.
     */
    commands?: VmCommands<API> = {};

    /**
     * Object used as global context for all scripts.
     */
    globalContext?: VmContext;

    /**
     * Initialize local and global variables when executing a script.
     *
     * If true, variables are initialized at the moment routine execution arrives to it. Until this point,
     * the variable is undefined.
     *
     * If false, when adding a new script to the VM, the VM will look for all variable declarations and initialize
     * them at that point without executing any other code.
     *
     * By default, this is false.
     */
    initVarsAtRuntime?: boolean;


    /**
     * Expression evaluator to use. All expressions are evaluated using this function.
     * If you don't provide it, all commands and features requiring expressions will throw an error.
     */
    expressionEvaluator?: VmExpressionEvaluator;

    /**
     * A compiler function. This function is called when a script source code is loaded.
     *
     * There is a default implementation for this function you can use if you want a higher level language,
     * but you can also design your own language and compiler.
     *
     * @see Compiler
     */
    codeCompiler?: VmCodeCompiler;

    /**
     * Provides a clock for the VM.
     */
    timeFunction?: VmTimeFunction;
}
