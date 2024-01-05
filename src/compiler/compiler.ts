import MyGrammarLexer from './gen/simple2Lexer';
import MyGrammarParser, {
    BooleanContext, ChoiceBlockContext,
    CommandContext, DoBlockContext, ExprstmtContext, GlobalVarContext, IfBlockContext, IfexprContext, LabelContext,
    LineContext, LocalVarContext, NullContext,
    NumberContext, SetVarContext,
    StringContext, SubexprContext,
    ValueContext, WhileBlockContext, WhitespaceContext
} from './gen/simple2Parser';
import {CharStream, CommonTokenStream, ErrorListener, ParserRuleContext} from 'antlr4';
import {Recognizer} from 'antlr4/src/antlr4/Recognizer';
import {RecognitionException} from 'antlr4/src/antlr4/error/RecognitionException';
import {VmScriptCommands} from '../vm/vm-types';

class RascalErrorListener extends ErrorListener<any> {
    constructor(private errors: string[] = []) {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    syntaxError(recognizer: Recognizer<any>, offendingSymbol: any, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
        this.errors.push(`Parse error: ${msg} at ${line}:${column}`);
    }
}

export class Compiler {
    protected lastLabel: string | null = null;
    protected ifIndex = 0;
    protected doIndex = 0;
    protected whileIndex = 0;
    protected choiceIndex = 0;

    constructor() {

    }

    compile(src: string): any[] {
        this.lastLabel = null;
        this.ifIndex = 0;
        this.doIndex = 0;
        this.whileIndex = 0;
        this.choiceIndex = 0;

        const chars = new CharStream(src); // replace this with a FileStream as required
        const lexer = new MyGrammarLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new MyGrammarParser(tokens);
        parser.removeErrorListeners();
        const errors: string[] = [];
        parser.addErrorListener(new RascalErrorListener(errors));
        const tree = parser.prog();

        const code: any[] = [];
        this.consumeLines(tree.line_list(), code, true);


        if (errors.length > 0) {
            throw new Error(`Syntax error(s) in source code: ${errors[0]}.`);
        }

        return code;
    }

    protected consumeLines(lines: LineContext[], code: any[], root = false) {
        for (const line of lines) {
            line.children!.forEach(line => this.consumeLine(line as ParserRuleContext, code, root));
        }
    }

    protected consumeLine(line: ParserRuleContext, code: any[], root = false) {
        if (line instanceof CommandContext) {
            this.consumeLineCommand(line, code);
        } else if (line instanceof LabelContext) {
            if (!root) throw new Error(`Label in sub block (line ${line.LABEL().symbol.line})`);
            this.consumeLineLabel(line, code);
        } else if (line instanceof ExprstmtContext) {
            this.consumeExprLine(line, code);
        } else if (line instanceof IfBlockContext) {
            this.consumeIfBlock(line, code);
        } else if (line instanceof DoBlockContext) {
            this.consumeDoBlock(line, code);
        } else if (line instanceof WhileBlockContext) {
            this.consumeWhileBlock(line, code);
        } else if (line instanceof LocalVarContext) {
            if (!root) throw new Error(`Local not allowed in sub block (line ${line.LOCAL().symbol.line})`);
            this.consumeLocalVar(line, code);
        } else if (line instanceof GlobalVarContext) {
            if (!root) throw new Error(`Global not allowed in sub block (line ${line.GLOBAL().symbol.line})`);
            this.consumeGlobalVar(line, code);
        } else if (line instanceof ChoiceBlockContext) {
            this.consumeChoiceBlock(line, code);
        } else if (line instanceof WhitespaceContext) {
            // Ignore
        } else {
            console.warn('Unhandled line', Object.getPrototypeOf(line).constructor.name);
        }
    }

    protected wrapExpr(expr: string) {
        return {expr};
    }

    protected consumeChoiceBlock(choice: ChoiceBlockContext, code: any[]) {
        const prefix = `${this.lastLabel}+ch${this.choiceIndex++}`;
        const end = `${prefix}x`;
        const options = choice.choiceOpt_list();

        const args: any[] = [];

        options.forEach(opt => {
            const rtext = opt.string_().getText();
            const text = rtext.substring(1, rtext.length - 1);
            const cond = opt.ifexpr()
            args.push(text);
            args.push(cond ? this.wrapExpr(cond.getText().substring(3).trim()) : true);
        });

        code.push(['choice', ...args]);
        options.forEach((opt, index) => {
            code.push(['.jC?', `${prefix}o${index}`, index]);
        });
        code.push(['.j', end]);

        options.forEach((opt, index) => {
            code.push([':', `${prefix}o${index}`]);
            this.consumeLines(opt.line_list(), code);
            if (index < options.length - 1) {
                code.push(['.j', end]);
            }
        });

        code.push([':', end]);
    }

    protected consumeGlobalVar(globalvar: GlobalVarContext, code: any[]) {
        const name = globalvar.IDENTIFIER().getText().trim();
        const value = this.convertValue(globalvar.value());
        code.push(['.vg', name, value]);
    }

    protected consumeLocalVar(localvar: LocalVarContext, code: any[]) {
        const name = localvar.IDENTIFIER().getText().trim();
        const value = this.convertValue(localvar.value());
        code.push(['.vl', name, value]);
    }

    protected consumeSetVar(setvar: SetVarContext, code: any[]) {
        const name = setvar.IDENTIFIER().getText().trim();
        const value = this.convertValue(setvar.value());
        code.push(['.vs', name, value]);
    }

    protected consumeWhileBlock(whileblock: WhileBlockContext, code: any[]) {
        const prefix = `${this.lastLabel}+wl${this.whileIndex++}`;
        const start = `${prefix}s`;
        const end = `${prefix}e`;
        const cond = whileblock.WHILE().getText().substring(6).trim();

        code.push([':', start]);
        code.push(['.j!', end, this.wrapExpr(cond)]);
        this.consumeLines(whileblock.line_list(), code);
        code.push(['.j', start]);
        code.push([':', end]);
    }

    protected consumeDoBlock(doblock: DoBlockContext, code: any[]) {
        const label = `${this.lastLabel}+do${this.doIndex++}`;
        code.push([':', label]);
        this.consumeLines(doblock.line_list(), code);
        const cond = doblock.UNTIL().getText().substring(5).trim();
        code.push(['.j!', label, this.wrapExpr(cond)]);
    }

    protected consumeExprLine(line: ExprstmtContext, code: any[]) {
        code.push(['$', line.EXPR().getText().substring(1).trim()]);
    }

    protected consumeLineLabel(label: LabelContext, code: any[]) {
        const text = label.LABEL().getText();
        const name = text.substring(0, text.length - 1);
        this.lastLabel = name;
        code.push([':', name]);
    }

    protected consumeLineCommand(command: CommandContext, code: any[]) {
        const name = command.commandName().getText();
        const args = command.commandArgs();
        const ifexpr = command.ifexpr();

        const argValues = args
            ? args.value_list().map(arg => this.convertValue(arg))
            : [];

        if (ifexpr) {
            this.consumeIfExpr(ifexpr, code);
        }

        code.push([name, ...argValues]);

        return;
    }

    protected consumeIfExpr(ifexpr: IfexprContext, code: any[]) {
        code.push([VmScriptCommands.COND, this.wrapExpr(ifexpr.getText().substring(3).trim())]);
    }

    protected convertValue(value: ValueContext) {
        const child = value.children![0];
        if (child instanceof StringContext) {
            const text = child.getText(); // "string"
            return text.substring(1, text.length - 1);
        } else if (child instanceof NumberContext) { // numeric value
            return Number(child.getText());
        } else if (child instanceof BooleanContext) { // true or false
            return child.getText() === 'true';
        } else if (child instanceof SubexprContext) { // ${expr}
            const text = child.getText(); // ${expr}
            return this.wrapExpr(text.substring(2, text.length - 1));
        } else if (child instanceof NullContext) { // null
            return null;
        }
    }

    protected consumeIfBlock(ifblock: IfBlockContext, code: any[]) {
        const ifIndex = this.ifIndex++;
        const elifBlocks = ifblock.elifBlock_list();
        const elseBlock = ifblock.elseBlock();
        const prefix = `${this.lastLabel}+if${ifIndex}`;
        const endLabel = `${prefix}x`;
        const cond = ifblock.IFEXPR().getText().substring(3).trim();

        const nextLabel = (elNo: number) => {
            if (elifBlocks.length - 1 > elNo) {
                return `${prefix}ei${elNo + 1}`;
            } else if (elseBlock) {
                return `${prefix}e`;
            } else {
                return endLabel;
            }
        }

        // If condition.
        code.push(['.j!', nextLabel(-1), this.wrapExpr(cond)]);

        // If main body
        this.consumeLines(ifblock.line_list(), code);
        if (elseBlock || elifBlocks.length) {
            code.push(['.j', endLabel]);
        }

        // Else if blocks
        if (elifBlocks) {
            elifBlocks.forEach((block, index) => {
                code.push([':', `${prefix}ei${index}`]);
                const econd = block.ELIFEXPR().getText().substring(5).trim();
                code.push(['.j!', nextLabel(index), this.wrapExpr(econd)]);
                this.consumeLines(block.line_list(), code);
                code.push(['.j', endLabel])
            });
        }

        if (elseBlock) {
            code.push([':', `${prefix}e`]);
            this.consumeLines(elseBlock.line_list(), code);
        }

        code.push([':', endLabel]);
    }
}


export function compile(sourceCode: string) {
    const compiler = new Compiler();
    return compiler.compile(sourceCode);
}
