// Generated from src/compiler/simple2.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./simple2Parser";
import { LineContext } from "./simple2Parser";
import { IfBlockContext } from "./simple2Parser";
import { ElifBlockContext } from "./simple2Parser";
import { ElseBlockContext } from "./simple2Parser";
import { DoBlockContext } from "./simple2Parser";
import { WhileBlockContext } from "./simple2Parser";
import { CommandContext } from "./simple2Parser";
import { CommandNameContext } from "./simple2Parser";
import { CommandArgsContext } from "./simple2Parser";
import { LocalVarContext } from "./simple2Parser";
import { GlobalVarContext } from "./simple2Parser";
import { SetVarContext } from "./simple2Parser";
import { LabelContext } from "./simple2Parser";
import { ExprstmtContext } from "./simple2Parser";
import { CommentContext } from "./simple2Parser";
import { IfexprContext } from "./simple2Parser";
import { ValueContext } from "./simple2Parser";
import { NumberContext } from "./simple2Parser";
import { BooleanContext } from "./simple2Parser";
import { NullContext } from "./simple2Parser";
import { StringContext } from "./simple2Parser";
import { SubexprContext } from "./simple2Parser";
import { WhitespaceContext } from "./simple2Parser";
import { ChoiceBlockContext } from "./simple2Parser";
import { ChoiceOptContext } from "./simple2Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `simple2Parser`.
 */
export default class simple2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `simple2Parser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.ifBlock`.
	 * @param ctx the parse tree
	 */
	enterIfBlock?: (ctx: IfBlockContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.ifBlock`.
	 * @param ctx the parse tree
	 */
	exitIfBlock?: (ctx: IfBlockContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.elifBlock`.
	 * @param ctx the parse tree
	 */
	enterElifBlock?: (ctx: ElifBlockContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.elifBlock`.
	 * @param ctx the parse tree
	 */
	exitElifBlock?: (ctx: ElifBlockContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.elseBlock`.
	 * @param ctx the parse tree
	 */
	enterElseBlock?: (ctx: ElseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.elseBlock`.
	 * @param ctx the parse tree
	 */
	exitElseBlock?: (ctx: ElseBlockContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.doBlock`.
	 * @param ctx the parse tree
	 */
	enterDoBlock?: (ctx: DoBlockContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.doBlock`.
	 * @param ctx the parse tree
	 */
	exitDoBlock?: (ctx: DoBlockContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.whileBlock`.
	 * @param ctx the parse tree
	 */
	enterWhileBlock?: (ctx: WhileBlockContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.whileBlock`.
	 * @param ctx the parse tree
	 */
	exitWhileBlock?: (ctx: WhileBlockContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.commandName`.
	 * @param ctx the parse tree
	 */
	enterCommandName?: (ctx: CommandNameContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.commandName`.
	 * @param ctx the parse tree
	 */
	exitCommandName?: (ctx: CommandNameContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.commandArgs`.
	 * @param ctx the parse tree
	 */
	enterCommandArgs?: (ctx: CommandArgsContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.commandArgs`.
	 * @param ctx the parse tree
	 */
	exitCommandArgs?: (ctx: CommandArgsContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.localVar`.
	 * @param ctx the parse tree
	 */
	enterLocalVar?: (ctx: LocalVarContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.localVar`.
	 * @param ctx the parse tree
	 */
	exitLocalVar?: (ctx: LocalVarContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.globalVar`.
	 * @param ctx the parse tree
	 */
	enterGlobalVar?: (ctx: GlobalVarContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.globalVar`.
	 * @param ctx the parse tree
	 */
	exitGlobalVar?: (ctx: GlobalVarContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.setVar`.
	 * @param ctx the parse tree
	 */
	enterSetVar?: (ctx: SetVarContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.setVar`.
	 * @param ctx the parse tree
	 */
	exitSetVar?: (ctx: SetVarContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.exprstmt`.
	 * @param ctx the parse tree
	 */
	enterExprstmt?: (ctx: ExprstmtContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.exprstmt`.
	 * @param ctx the parse tree
	 */
	exitExprstmt?: (ctx: ExprstmtContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.ifexpr`.
	 * @param ctx the parse tree
	 */
	enterIfexpr?: (ctx: IfexprContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.ifexpr`.
	 * @param ctx the parse tree
	 */
	exitIfexpr?: (ctx: IfexprContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.boolean`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.boolean`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.null`.
	 * @param ctx the parse tree
	 */
	enterNull?: (ctx: NullContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.null`.
	 * @param ctx the parse tree
	 */
	exitNull?: (ctx: NullContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.subexpr`.
	 * @param ctx the parse tree
	 */
	enterSubexpr?: (ctx: SubexprContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.subexpr`.
	 * @param ctx the parse tree
	 */
	exitSubexpr?: (ctx: SubexprContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.whitespace`.
	 * @param ctx the parse tree
	 */
	enterWhitespace?: (ctx: WhitespaceContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.whitespace`.
	 * @param ctx the parse tree
	 */
	exitWhitespace?: (ctx: WhitespaceContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.choiceBlock`.
	 * @param ctx the parse tree
	 */
	enterChoiceBlock?: (ctx: ChoiceBlockContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.choiceBlock`.
	 * @param ctx the parse tree
	 */
	exitChoiceBlock?: (ctx: ChoiceBlockContext) => void;
	/**
	 * Enter a parse tree produced by `simple2Parser.choiceOpt`.
	 * @param ctx the parse tree
	 */
	enterChoiceOpt?: (ctx: ChoiceOptContext) => void;
	/**
	 * Exit a parse tree produced by `simple2Parser.choiceOpt`.
	 * @param ctx the parse tree
	 */
	exitChoiceOpt?: (ctx: ChoiceOptContext) => void;
}

