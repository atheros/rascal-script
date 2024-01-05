// Generated from D:/Projects/rascal-script/src/compiler/simple2.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `simple2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class simple2Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `simple2Parser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.ifBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfBlock?: (ctx: IfBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.elifBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElifBlock?: (ctx: ElifBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.elseBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseBlock?: (ctx: ElseBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.doBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoBlock?: (ctx: DoBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.whileBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileBlock?: (ctx: WhileBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.commandName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandName?: (ctx: CommandNameContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.commandArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandArgs?: (ctx: CommandArgsContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.localVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVar?: (ctx: LocalVarContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.globalVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalVar?: (ctx: GlobalVarContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.setVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetVar?: (ctx: SetVarContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.exprstmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprstmt?: (ctx: ExprstmtContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.ifexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfexpr?: (ctx: IfexprContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.null`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull?: (ctx: NullContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.subexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubexpr?: (ctx: SubexprContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.whitespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhitespace?: (ctx: WhitespaceContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.choiceBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceBlock?: (ctx: ChoiceBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `simple2Parser.choiceOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceOpt?: (ctx: ChoiceOptContext) => Result;
}

