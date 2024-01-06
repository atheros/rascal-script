// Generated from src/compiler/simple2.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import simple2Listener from "./simple2Listener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class simple2Parser extends Parser {
	public static readonly IFEXPR = 1;
	public static readonly ELIFEXPR = 2;
	public static readonly ELSE = 3;
	public static readonly END = 4;
	public static readonly WHILE = 5;
	public static readonly UNTIL = 6;
	public static readonly DO = 7;
	public static readonly COMMENT = 8;
	public static readonly SUBEXPR = 9;
	public static readonly EXPR = 10;
	public static readonly LOCAL = 11;
	public static readonly SET = 12;
	public static readonly DEFINE = 13;
	public static readonly GLOBAL = 14;
	public static readonly LABEL = 15;
	public static readonly TRUE = 16;
	public static readonly FALSE = 17;
	public static readonly CHOICE = 18;
	public static readonly NULL = 19;
	public static readonly IDENTIFIER = 20;
	public static readonly PLUSMINUS = 21;
	public static readonly NUMBER = 22;
	public static readonly WHITESPACE = 23;
	public static readonly STRING = 24;
	public static readonly HEX_DIGIT = 25;
	public static readonly EQUALS = 26;
	public static readonly EOL = 27;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_ifBlock = 2;
	public static readonly RULE_elifBlock = 3;
	public static readonly RULE_elseBlock = 4;
	public static readonly RULE_doBlock = 5;
	public static readonly RULE_whileBlock = 6;
	public static readonly RULE_command = 7;
	public static readonly RULE_commandName = 8;
	public static readonly RULE_commandArgs = 9;
	public static readonly RULE_localVar = 10;
	public static readonly RULE_globalVar = 11;
	public static readonly RULE_setVar = 12;
	public static readonly RULE_label = 13;
	public static readonly RULE_exprstmt = 14;
	public static readonly RULE_comment = 15;
	public static readonly RULE_ifexpr = 16;
	public static readonly RULE_value = 17;
	public static readonly RULE_number = 18;
	public static readonly RULE_boolean = 19;
	public static readonly RULE_null = 20;
	public static readonly RULE_string = 21;
	public static readonly RULE_subexpr = 22;
	public static readonly RULE_whitespace = 23;
	public static readonly RULE_choiceBlock = 24;
	public static readonly RULE_choiceOpt = 25;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'else'", 
                                                            "'end'", null, 
                                                            null, "'do'", 
                                                            null, null, 
                                                            null, "'local'", 
                                                            "'set'", "'define'", 
                                                            "'global'", 
                                                            null, "'true'", 
                                                            "'false'", "'choice'", 
                                                            "'null'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "IFEXPR", 
                                                             "ELIFEXPR", 
                                                             "ELSE", "END", 
                                                             "WHILE", "UNTIL", 
                                                             "DO", "COMMENT", 
                                                             "SUBEXPR", 
                                                             "EXPR", "LOCAL", 
                                                             "SET", "DEFINE", 
                                                             "GLOBAL", "LABEL", 
                                                             "TRUE", "FALSE", 
                                                             "CHOICE", "NULL", 
                                                             "IDENTIFIER", 
                                                             "PLUSMINUS", 
                                                             "NUMBER", "WHITESPACE", 
                                                             "STRING", "HEX_DIGIT", 
                                                             "EQUALS", "EOL" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "ifBlock", "elifBlock", "elseBlock", "doBlock", "whileBlock", 
		"command", "commandName", "commandArgs", "localVar", "globalVar", "setVar", 
		"label", "exprstmt", "comment", "ifexpr", "value", "number", "boolean", 
		"null", "string", "subexpr", "whitespace", "choiceBlock", "choiceOpt",
	];
	public get grammarFileName(): string { return "simple2.g4"; }
	public get literalNames(): (string | null)[] { return simple2Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return simple2Parser.symbolicNames; }
	public get ruleNames(): string[] { return simple2Parser.ruleNames; }
	public get serializedATN(): number[] { return simple2Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, simple2Parser._ATN, simple2Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, simple2Parser.RULE_prog);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 58;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 56;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 1:
					case 5:
					case 7:
					case 8:
					case 10:
					case 11:
					case 12:
					case 14:
					case 15:
					case 18:
					case 20:
					case 23:
						{
						this.state = 52;
						this.line();
						this.state = 53;
						this.match(simple2Parser.EOL);
						}
						break;
					case 27:
						{
						this.state = 55;
						this.match(simple2Parser.EOL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 9756066) !== 0)) {
				{
				this.state = 61;
				this.line();
				}
			}

			this.state = 64;
			this.match(simple2Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let localctx: LineContext = new LineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, simple2Parser.RULE_line);
		let _la: number;
		try {
			this.state = 82;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 66;
				this.label();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 67;
				this.exprstmt();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 68;
				this.command();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 69;
				this.comment();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 70;
				this.ifBlock();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 71;
				this.doBlock();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 72;
				this.whileBlock();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 73;
				this.localVar();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 74;
				this.globalVar();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 75;
				this.setVar();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 76;
				this.choiceBlock();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 77;
					this.whitespace();
					}
					}
					this.state = 80;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===23);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifBlock(): IfBlockContext {
		let localctx: IfBlockContext = new IfBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, simple2Parser.RULE_ifBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 84;
				this.whitespace();
				}
			}

			this.state = 87;
			this.match(simple2Parser.IFEXPR);
			this.state = 88;
			this.match(simple2Parser.EOL);
			this.state = 94;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 89;
					this.line();
					this.state = 90;
					this.match(simple2Parser.EOL);
					}
					}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 100;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 97;
					this.elifBlock();
					}
					}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 103;
				this.elseBlock();
				}
				break;
			}
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 106;
				this.whitespace();
				}
			}

			this.state = 109;
			this.match(simple2Parser.END);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===23) {
				{
				this.state = 110;
				this.comment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elifBlock(): ElifBlockContext {
		let localctx: ElifBlockContext = new ElifBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, simple2Parser.RULE_elifBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 113;
				this.whitespace();
				}
			}

			this.state = 116;
			this.match(simple2Parser.ELIFEXPR);
			this.state = 117;
			this.match(simple2Parser.EOL);
			this.state = 123;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 118;
					this.line();
					this.state = 119;
					this.match(simple2Parser.EOL);
					}
					}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elseBlock(): ElseBlockContext {
		let localctx: ElseBlockContext = new ElseBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, simple2Parser.RULE_elseBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 126;
				this.whitespace();
				}
			}

			this.state = 129;
			this.match(simple2Parser.ELSE);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===23) {
				{
				this.state = 130;
				this.comment();
				}
			}

			this.state = 133;
			this.match(simple2Parser.EOL);
			this.state = 139;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 134;
					this.line();
					this.state = 135;
					this.match(simple2Parser.EOL);
					}
					}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doBlock(): DoBlockContext {
		let localctx: DoBlockContext = new DoBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, simple2Parser.RULE_doBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 142;
				this.whitespace();
				}
			}

			this.state = 145;
			this.match(simple2Parser.DO);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===23) {
				{
				this.state = 146;
				this.comment();
				}
			}

			this.state = 149;
			this.match(simple2Parser.EOL);
			this.state = 155;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 150;
					this.line();
					this.state = 151;
					this.match(simple2Parser.EOL);
					}
					}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 158;
				this.whitespace();
				}
			}

			this.state = 161;
			this.match(simple2Parser.UNTIL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileBlock(): WhileBlockContext {
		let localctx: WhileBlockContext = new WhileBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, simple2Parser.RULE_whileBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 163;
				this.whitespace();
				}
			}

			this.state = 166;
			this.match(simple2Parser.WHILE);
			this.state = 167;
			this.match(simple2Parser.EOL);
			this.state = 173;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 168;
					this.line();
					this.state = 169;
					this.match(simple2Parser.EOL);
					}
					}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 176;
				this.whitespace();
				}
			}

			this.state = 179;
			this.match(simple2Parser.END);
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===23) {
				{
				this.state = 180;
				this.comment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let localctx: CommandContext = new CommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, simple2Parser.RULE_command);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 183;
				this.whitespace();
				}
			}

			this.state = 186;
			this.commandName();
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 187;
				this.commandArgs();
				}
				break;
			}
			this.state = 192;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 190;
				this.ifexpr();
				}
				break;
			case 2:
				{
				this.state = 191;
				this.comment();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public commandName(): CommandNameContext {
		let localctx: CommandNameContext = new CommandNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, simple2Parser.RULE_commandName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this.match(simple2Parser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public commandArgs(): CommandArgsContext {
		let localctx: CommandArgsContext = new CommandArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, simple2Parser.RULE_commandArgs);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 196;
			this.whitespace();
			this.state = 197;
			this.value();
			this.state = 203;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 198;
					this.whitespace();
					this.state = 199;
					this.value();
					}
					}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public localVar(): LocalVarContext {
		let localctx: LocalVarContext = new LocalVarContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, simple2Parser.RULE_localVar);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 206;
				this.whitespace();
				}
			}

			this.state = 209;
			this.match(simple2Parser.LOCAL);
			this.state = 210;
			this.whitespace();
			this.state = 211;
			this.match(simple2Parser.IDENTIFIER);
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 212;
				this.whitespace();
				}
			}

			this.state = 215;
			this.match(simple2Parser.EQUALS);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 216;
				this.whitespace();
				}
			}

			this.state = 219;
			this.value();
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===23) {
				{
				this.state = 220;
				this.comment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public globalVar(): GlobalVarContext {
		let localctx: GlobalVarContext = new GlobalVarContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, simple2Parser.RULE_globalVar);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 223;
				this.whitespace();
				}
			}

			this.state = 226;
			this.match(simple2Parser.GLOBAL);
			this.state = 227;
			this.whitespace();
			this.state = 228;
			this.match(simple2Parser.IDENTIFIER);
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 229;
				this.whitespace();
				}
			}

			this.state = 232;
			this.match(simple2Parser.EQUALS);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 233;
				this.whitespace();
				}
			}

			this.state = 236;
			this.value();
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===23) {
				{
				this.state = 237;
				this.comment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setVar(): SetVarContext {
		let localctx: SetVarContext = new SetVarContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, simple2Parser.RULE_setVar);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 240;
				this.whitespace();
				}
			}

			this.state = 243;
			this.match(simple2Parser.SET);
			this.state = 244;
			this.whitespace();
			this.state = 245;
			this.match(simple2Parser.IDENTIFIER);
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 246;
				this.whitespace();
				}
			}

			this.state = 249;
			this.match(simple2Parser.EQUALS);
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 250;
				this.whitespace();
				}
			}

			this.state = 253;
			this.value();
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===23) {
				{
				this.state = 254;
				this.comment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let localctx: LabelContext = new LabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, simple2Parser.RULE_label);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 257;
				this.whitespace();
				}
			}

			this.state = 260;
			this.match(simple2Parser.LABEL);
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===23) {
				{
				this.state = 261;
				this.comment();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exprstmt(): ExprstmtContext {
		let localctx: ExprstmtContext = new ExprstmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, simple2Parser.RULE_exprstmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 264;
				this.whitespace();
				}
			}

			this.state = 267;
			this.match(simple2Parser.EXPR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let localctx: CommentContext = new CommentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, simple2Parser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 269;
				this.whitespace();
				}
			}

			this.state = 272;
			this.match(simple2Parser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifexpr(): IfexprContext {
		let localctx: IfexprContext = new IfexprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, simple2Parser.RULE_ifexpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 274;
				this.whitespace();
				}
			}

			this.state = 277;
			this.match(simple2Parser.IFEXPR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, simple2Parser.RULE_value);
		try {
			this.state = 284;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 279;
				this.subexpr();
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 280;
				this.string_();
				}
				break;
			case 21:
			case 22:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 281;
				this.number_();
				}
				break;
			case 16:
			case 17:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 282;
				this.boolean_();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 283;
				this.null_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, simple2Parser.RULE_number);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 286;
				this.match(simple2Parser.NUMBER);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 287;
				this.match(simple2Parser.PLUSMINUS);
				this.state = 288;
				this.match(simple2Parser.NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolean_(): BooleanContext {
		let localctx: BooleanContext = new BooleanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, simple2Parser.RULE_boolean);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 291;
			_la = this._input.LA(1);
			if(!(_la===16 || _la===17)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public null_(): NullContext {
		let localctx: NullContext = new NullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, simple2Parser.RULE_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 293;
			this.match(simple2Parser.NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_(): StringContext {
		let localctx: StringContext = new StringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, simple2Parser.RULE_string);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 295;
			this.match(simple2Parser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subexpr(): SubexprContext {
		let localctx: SubexprContext = new SubexprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, simple2Parser.RULE_subexpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 297;
			this.match(simple2Parser.SUBEXPR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whitespace(): WhitespaceContext {
		let localctx: WhitespaceContext = new WhitespaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, simple2Parser.RULE_whitespace);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 299;
			this.match(simple2Parser.WHITESPACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choiceBlock(): ChoiceBlockContext {
		let localctx: ChoiceBlockContext = new ChoiceBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, simple2Parser.RULE_choiceBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 301;
				this.whitespace();
				}
			}

			this.state = 304;
			this.match(simple2Parser.CHOICE);
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===23) {
				{
				this.state = 305;
				this.ifexpr();
				}
			}

			this.state = 308;
			this.match(simple2Parser.EOL);
			this.state = 310;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 309;
					this.choiceOpt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 312;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 314;
				this.whitespace();
				}
			}

			this.state = 317;
			this.match(simple2Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choiceOpt(): ChoiceOptContext {
		let localctx: ChoiceOptContext = new ChoiceOptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, simple2Parser.RULE_choiceOpt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 319;
				this.whitespace();
				}
			}

			this.state = 322;
			this.string_();
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===23) {
				{
				this.state = 323;
				this.ifexpr();
				}
			}

			this.state = 326;
			this.match(simple2Parser.EOL);
			this.state = 332;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 327;
					this.line();
					this.state = 328;
					this.match(simple2Parser.EOL);
					}
					}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,27,336,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,1,0,1,0,1,0,1,0,5,0,57,8,0,10,0,12,0,60,9,0,1,0,3,0,63,8,0,
	1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,79,8,1,11,1,
	12,1,80,3,1,83,8,1,1,2,3,2,86,8,2,1,2,1,2,1,2,1,2,1,2,5,2,93,8,2,10,2,12,
	2,96,9,2,1,2,5,2,99,8,2,10,2,12,2,102,9,2,1,2,3,2,105,8,2,1,2,3,2,108,8,
	2,1,2,1,2,3,2,112,8,2,1,3,3,3,115,8,3,1,3,1,3,1,3,1,3,1,3,5,3,122,8,3,10,
	3,12,3,125,9,3,1,4,3,4,128,8,4,1,4,1,4,3,4,132,8,4,1,4,1,4,1,4,1,4,5,4,
	138,8,4,10,4,12,4,141,9,4,1,5,3,5,144,8,5,1,5,1,5,3,5,148,8,5,1,5,1,5,1,
	5,1,5,5,5,154,8,5,10,5,12,5,157,9,5,1,5,3,5,160,8,5,1,5,1,5,1,6,3,6,165,
	8,6,1,6,1,6,1,6,1,6,1,6,5,6,172,8,6,10,6,12,6,175,9,6,1,6,3,6,178,8,6,1,
	6,1,6,3,6,182,8,6,1,7,3,7,185,8,7,1,7,1,7,3,7,189,8,7,1,7,1,7,3,7,193,8,
	7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,202,8,9,10,9,12,9,205,9,9,1,10,3,10,208,
	8,10,1,10,1,10,1,10,1,10,3,10,214,8,10,1,10,1,10,3,10,218,8,10,1,10,1,10,
	3,10,222,8,10,1,11,3,11,225,8,11,1,11,1,11,1,11,1,11,3,11,231,8,11,1,11,
	1,11,3,11,235,8,11,1,11,1,11,3,11,239,8,11,1,12,3,12,242,8,12,1,12,1,12,
	1,12,1,12,3,12,248,8,12,1,12,1,12,3,12,252,8,12,1,12,1,12,3,12,256,8,12,
	1,13,3,13,259,8,13,1,13,1,13,3,13,263,8,13,1,14,3,14,266,8,14,1,14,1,14,
	1,15,3,15,271,8,15,1,15,1,15,1,16,3,16,276,8,16,1,16,1,16,1,17,1,17,1,17,
	1,17,1,17,3,17,285,8,17,1,18,1,18,1,18,3,18,290,8,18,1,19,1,19,1,20,1,20,
	1,21,1,21,1,22,1,22,1,23,1,23,1,24,3,24,303,8,24,1,24,1,24,3,24,307,8,24,
	1,24,1,24,4,24,311,8,24,11,24,12,24,312,1,24,3,24,316,8,24,1,24,1,24,1,
	25,3,25,321,8,25,1,25,1,25,3,25,325,8,25,1,25,1,25,1,25,1,25,5,25,331,8,
	25,10,25,12,25,334,9,25,1,25,0,0,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
	28,30,32,34,36,38,40,42,44,46,48,50,0,1,1,0,16,17,377,0,58,1,0,0,0,2,82,
	1,0,0,0,4,85,1,0,0,0,6,114,1,0,0,0,8,127,1,0,0,0,10,143,1,0,0,0,12,164,
	1,0,0,0,14,184,1,0,0,0,16,194,1,0,0,0,18,196,1,0,0,0,20,207,1,0,0,0,22,
	224,1,0,0,0,24,241,1,0,0,0,26,258,1,0,0,0,28,265,1,0,0,0,30,270,1,0,0,0,
	32,275,1,0,0,0,34,284,1,0,0,0,36,289,1,0,0,0,38,291,1,0,0,0,40,293,1,0,
	0,0,42,295,1,0,0,0,44,297,1,0,0,0,46,299,1,0,0,0,48,302,1,0,0,0,50,320,
	1,0,0,0,52,53,3,2,1,0,53,54,5,27,0,0,54,57,1,0,0,0,55,57,5,27,0,0,56,52,
	1,0,0,0,56,55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,62,1,
	0,0,0,60,58,1,0,0,0,61,63,3,2,1,0,62,61,1,0,0,0,62,63,1,0,0,0,63,64,1,0,
	0,0,64,65,5,0,0,1,65,1,1,0,0,0,66,83,3,26,13,0,67,83,3,28,14,0,68,83,3,
	14,7,0,69,83,3,30,15,0,70,83,3,4,2,0,71,83,3,10,5,0,72,83,3,12,6,0,73,83,
	3,20,10,0,74,83,3,22,11,0,75,83,3,24,12,0,76,83,3,48,24,0,77,79,3,46,23,
	0,78,77,1,0,0,0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,0,
	82,66,1,0,0,0,82,67,1,0,0,0,82,68,1,0,0,0,82,69,1,0,0,0,82,70,1,0,0,0,82,
	71,1,0,0,0,82,72,1,0,0,0,82,73,1,0,0,0,82,74,1,0,0,0,82,75,1,0,0,0,82,76,
	1,0,0,0,82,78,1,0,0,0,83,3,1,0,0,0,84,86,3,46,23,0,85,84,1,0,0,0,85,86,
	1,0,0,0,86,87,1,0,0,0,87,88,5,1,0,0,88,94,5,27,0,0,89,90,3,2,1,0,90,91,
	5,27,0,0,91,93,1,0,0,0,92,89,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,
	1,0,0,0,95,100,1,0,0,0,96,94,1,0,0,0,97,99,3,6,3,0,98,97,1,0,0,0,99,102,
	1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,
	103,105,3,8,4,0,104,103,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,108,
	3,46,23,0,107,106,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,111,5,4,0,
	0,110,112,3,30,15,0,111,110,1,0,0,0,111,112,1,0,0,0,112,5,1,0,0,0,113,115,
	3,46,23,0,114,113,1,0,0,0,114,115,1,0,0,0,115,116,1,0,0,0,116,117,5,2,0,
	0,117,123,5,27,0,0,118,119,3,2,1,0,119,120,5,27,0,0,120,122,1,0,0,0,121,
	118,1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,7,1,0,0,
	0,125,123,1,0,0,0,126,128,3,46,23,0,127,126,1,0,0,0,127,128,1,0,0,0,128,
	129,1,0,0,0,129,131,5,3,0,0,130,132,3,30,15,0,131,130,1,0,0,0,131,132,1,
	0,0,0,132,133,1,0,0,0,133,139,5,27,0,0,134,135,3,2,1,0,135,136,5,27,0,0,
	136,138,1,0,0,0,137,134,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,
	1,0,0,0,140,9,1,0,0,0,141,139,1,0,0,0,142,144,3,46,23,0,143,142,1,0,0,0,
	143,144,1,0,0,0,144,145,1,0,0,0,145,147,5,7,0,0,146,148,3,30,15,0,147,146,
	1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,155,5,27,0,0,150,151,3,2,1,
	0,151,152,5,27,0,0,152,154,1,0,0,0,153,150,1,0,0,0,154,157,1,0,0,0,155,
	153,1,0,0,0,155,156,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,158,160,3,46,
	23,0,159,158,1,0,0,0,159,160,1,0,0,0,160,161,1,0,0,0,161,162,5,6,0,0,162,
	11,1,0,0,0,163,165,3,46,23,0,164,163,1,0,0,0,164,165,1,0,0,0,165,166,1,
	0,0,0,166,167,5,5,0,0,167,173,5,27,0,0,168,169,3,2,1,0,169,170,5,27,0,0,
	170,172,1,0,0,0,171,168,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,
	1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,176,178,3,46,23,0,177,176,1,0,0,
	0,177,178,1,0,0,0,178,179,1,0,0,0,179,181,5,4,0,0,180,182,3,30,15,0,181,
	180,1,0,0,0,181,182,1,0,0,0,182,13,1,0,0,0,183,185,3,46,23,0,184,183,1,
	0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,188,3,16,8,0,187,189,3,18,9,0,
	188,187,1,0,0,0,188,189,1,0,0,0,189,192,1,0,0,0,190,193,3,32,16,0,191,193,
	3,30,15,0,192,190,1,0,0,0,192,191,1,0,0,0,192,193,1,0,0,0,193,15,1,0,0,
	0,194,195,5,20,0,0,195,17,1,0,0,0,196,197,3,46,23,0,197,203,3,34,17,0,198,
	199,3,46,23,0,199,200,3,34,17,0,200,202,1,0,0,0,201,198,1,0,0,0,202,205,
	1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,19,1,0,0,0,205,203,1,0,0,0,
	206,208,3,46,23,0,207,206,1,0,0,0,207,208,1,0,0,0,208,209,1,0,0,0,209,210,
	5,11,0,0,210,211,3,46,23,0,211,213,5,20,0,0,212,214,3,46,23,0,213,212,1,
	0,0,0,213,214,1,0,0,0,214,215,1,0,0,0,215,217,5,26,0,0,216,218,3,46,23,
	0,217,216,1,0,0,0,217,218,1,0,0,0,218,219,1,0,0,0,219,221,3,34,17,0,220,
	222,3,30,15,0,221,220,1,0,0,0,221,222,1,0,0,0,222,21,1,0,0,0,223,225,3,
	46,23,0,224,223,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,227,5,14,0,
	0,227,228,3,46,23,0,228,230,5,20,0,0,229,231,3,46,23,0,230,229,1,0,0,0,
	230,231,1,0,0,0,231,232,1,0,0,0,232,234,5,26,0,0,233,235,3,46,23,0,234,
	233,1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,238,3,34,17,0,237,239,3,
	30,15,0,238,237,1,0,0,0,238,239,1,0,0,0,239,23,1,0,0,0,240,242,3,46,23,
	0,241,240,1,0,0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,244,5,12,0,0,244,
	245,3,46,23,0,245,247,5,20,0,0,246,248,3,46,23,0,247,246,1,0,0,0,247,248,
	1,0,0,0,248,249,1,0,0,0,249,251,5,26,0,0,250,252,3,46,23,0,251,250,1,0,
	0,0,251,252,1,0,0,0,252,253,1,0,0,0,253,255,3,34,17,0,254,256,3,30,15,0,
	255,254,1,0,0,0,255,256,1,0,0,0,256,25,1,0,0,0,257,259,3,46,23,0,258,257,
	1,0,0,0,258,259,1,0,0,0,259,260,1,0,0,0,260,262,5,15,0,0,261,263,3,30,15,
	0,262,261,1,0,0,0,262,263,1,0,0,0,263,27,1,0,0,0,264,266,3,46,23,0,265,
	264,1,0,0,0,265,266,1,0,0,0,266,267,1,0,0,0,267,268,5,10,0,0,268,29,1,0,
	0,0,269,271,3,46,23,0,270,269,1,0,0,0,270,271,1,0,0,0,271,272,1,0,0,0,272,
	273,5,8,0,0,273,31,1,0,0,0,274,276,3,46,23,0,275,274,1,0,0,0,275,276,1,
	0,0,0,276,277,1,0,0,0,277,278,5,1,0,0,278,33,1,0,0,0,279,285,3,44,22,0,
	280,285,3,42,21,0,281,285,3,36,18,0,282,285,3,38,19,0,283,285,3,40,20,0,
	284,279,1,0,0,0,284,280,1,0,0,0,284,281,1,0,0,0,284,282,1,0,0,0,284,283,
	1,0,0,0,285,35,1,0,0,0,286,290,5,22,0,0,287,288,5,21,0,0,288,290,5,22,0,
	0,289,286,1,0,0,0,289,287,1,0,0,0,290,37,1,0,0,0,291,292,7,0,0,0,292,39,
	1,0,0,0,293,294,5,19,0,0,294,41,1,0,0,0,295,296,5,24,0,0,296,43,1,0,0,0,
	297,298,5,9,0,0,298,45,1,0,0,0,299,300,5,23,0,0,300,47,1,0,0,0,301,303,
	3,46,23,0,302,301,1,0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,306,5,18,
	0,0,305,307,3,32,16,0,306,305,1,0,0,0,306,307,1,0,0,0,307,308,1,0,0,0,308,
	310,5,27,0,0,309,311,3,50,25,0,310,309,1,0,0,0,311,312,1,0,0,0,312,310,
	1,0,0,0,312,313,1,0,0,0,313,315,1,0,0,0,314,316,3,46,23,0,315,314,1,0,0,
	0,315,316,1,0,0,0,316,317,1,0,0,0,317,318,5,4,0,0,318,49,1,0,0,0,319,321,
	3,46,23,0,320,319,1,0,0,0,320,321,1,0,0,0,321,322,1,0,0,0,322,324,3,42,
	21,0,323,325,3,32,16,0,324,323,1,0,0,0,324,325,1,0,0,0,325,326,1,0,0,0,
	326,332,5,27,0,0,327,328,3,2,1,0,328,329,5,27,0,0,329,331,1,0,0,0,330,327,
	1,0,0,0,331,334,1,0,0,0,332,330,1,0,0,0,332,333,1,0,0,0,333,51,1,0,0,0,
	334,332,1,0,0,0,54,56,58,62,80,82,85,94,100,104,107,111,114,123,127,131,
	139,143,147,155,159,164,173,177,181,184,188,192,203,207,213,217,221,224,
	230,234,238,241,247,251,255,258,262,265,270,275,284,289,302,306,312,315,
	320,324,332];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!simple2Parser.__ATN) {
			simple2Parser.__ATN = new ATNDeserializer().deserialize(simple2Parser._serializedATN);
		}

		return simple2Parser.__ATN;
	}


	static DecisionsToDFA = simple2Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(simple2Parser.EOF, 0);
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
	public EOL_list(): TerminalNode[] {
	    	return this.getTokens(simple2Parser.EOL);
	}
	public EOL(i: number): TerminalNode {
		return this.getToken(simple2Parser.EOL, i);
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_prog;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public label(): LabelContext {
		return this.getTypedRuleContext(LabelContext, 0) as LabelContext;
	}
	public exprstmt(): ExprstmtContext {
		return this.getTypedRuleContext(ExprstmtContext, 0) as ExprstmtContext;
	}
	public command(): CommandContext {
		return this.getTypedRuleContext(CommandContext, 0) as CommandContext;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
	public ifBlock(): IfBlockContext {
		return this.getTypedRuleContext(IfBlockContext, 0) as IfBlockContext;
	}
	public doBlock(): DoBlockContext {
		return this.getTypedRuleContext(DoBlockContext, 0) as DoBlockContext;
	}
	public whileBlock(): WhileBlockContext {
		return this.getTypedRuleContext(WhileBlockContext, 0) as WhileBlockContext;
	}
	public localVar(): LocalVarContext {
		return this.getTypedRuleContext(LocalVarContext, 0) as LocalVarContext;
	}
	public globalVar(): GlobalVarContext {
		return this.getTypedRuleContext(GlobalVarContext, 0) as GlobalVarContext;
	}
	public setVar(): SetVarContext {
		return this.getTypedRuleContext(SetVarContext, 0) as SetVarContext;
	}
	public choiceBlock(): ChoiceBlockContext {
		return this.getTypedRuleContext(ChoiceBlockContext, 0) as ChoiceBlockContext;
	}
	public whitespace_list(): WhitespaceContext[] {
		return this.getTypedRuleContexts(WhitespaceContext) as WhitespaceContext[];
	}
	public whitespace(i: number): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, i) as WhitespaceContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_line;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterLine) {
	 		listener.enterLine(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitLine) {
	 		listener.exitLine(this);
		}
	}
}


export class IfBlockContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IFEXPR(): TerminalNode {
		return this.getToken(simple2Parser.IFEXPR, 0);
	}
	public EOL_list(): TerminalNode[] {
	    	return this.getTokens(simple2Parser.EOL);
	}
	public EOL(i: number): TerminalNode {
		return this.getToken(simple2Parser.EOL, i);
	}
	public END(): TerminalNode {
		return this.getToken(simple2Parser.END, 0);
	}
	public whitespace_list(): WhitespaceContext[] {
		return this.getTypedRuleContexts(WhitespaceContext) as WhitespaceContext[];
	}
	public whitespace(i: number): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, i) as WhitespaceContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
	public elifBlock_list(): ElifBlockContext[] {
		return this.getTypedRuleContexts(ElifBlockContext) as ElifBlockContext[];
	}
	public elifBlock(i: number): ElifBlockContext {
		return this.getTypedRuleContext(ElifBlockContext, i) as ElifBlockContext;
	}
	public elseBlock(): ElseBlockContext {
		return this.getTypedRuleContext(ElseBlockContext, 0) as ElseBlockContext;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_ifBlock;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterIfBlock) {
	 		listener.enterIfBlock(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitIfBlock) {
	 		listener.exitIfBlock(this);
		}
	}
}


export class ElifBlockContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELIFEXPR(): TerminalNode {
		return this.getToken(simple2Parser.ELIFEXPR, 0);
	}
	public EOL_list(): TerminalNode[] {
	    	return this.getTokens(simple2Parser.EOL);
	}
	public EOL(i: number): TerminalNode {
		return this.getToken(simple2Parser.EOL, i);
	}
	public whitespace(): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, 0) as WhitespaceContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_elifBlock;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterElifBlock) {
	 		listener.enterElifBlock(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitElifBlock) {
	 		listener.exitElifBlock(this);
		}
	}
}


export class ElseBlockContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(simple2Parser.ELSE, 0);
	}
	public EOL_list(): TerminalNode[] {
	    	return this.getTokens(simple2Parser.EOL);
	}
	public EOL(i: number): TerminalNode {
		return this.getToken(simple2Parser.EOL, i);
	}
	public whitespace(): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, 0) as WhitespaceContext;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_elseBlock;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterElseBlock) {
	 		listener.enterElseBlock(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitElseBlock) {
	 		listener.exitElseBlock(this);
		}
	}
}


export class DoBlockContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DO(): TerminalNode {
		return this.getToken(simple2Parser.DO, 0);
	}
	public EOL_list(): TerminalNode[] {
	    	return this.getTokens(simple2Parser.EOL);
	}
	public EOL(i: number): TerminalNode {
		return this.getToken(simple2Parser.EOL, i);
	}
	public UNTIL(): TerminalNode {
		return this.getToken(simple2Parser.UNTIL, 0);
	}
	public whitespace_list(): WhitespaceContext[] {
		return this.getTypedRuleContexts(WhitespaceContext) as WhitespaceContext[];
	}
	public whitespace(i: number): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, i) as WhitespaceContext;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_doBlock;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterDoBlock) {
	 		listener.enterDoBlock(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitDoBlock) {
	 		listener.exitDoBlock(this);
		}
	}
}


export class WhileBlockContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(simple2Parser.WHILE, 0);
	}
	public EOL_list(): TerminalNode[] {
	    	return this.getTokens(simple2Parser.EOL);
	}
	public EOL(i: number): TerminalNode {
		return this.getToken(simple2Parser.EOL, i);
	}
	public END(): TerminalNode {
		return this.getToken(simple2Parser.END, 0);
	}
	public whitespace_list(): WhitespaceContext[] {
		return this.getTypedRuleContexts(WhitespaceContext) as WhitespaceContext[];
	}
	public whitespace(i: number): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, i) as WhitespaceContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_whileBlock;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterWhileBlock) {
	 		listener.enterWhileBlock(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitWhileBlock) {
	 		listener.exitWhileBlock(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public commandName(): CommandNameContext {
		return this.getTypedRuleContext(CommandNameContext, 0) as CommandNameContext;
	}
	public whitespace(): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, 0) as WhitespaceContext;
	}
	public commandArgs(): CommandArgsContext {
		return this.getTypedRuleContext(CommandArgsContext, 0) as CommandArgsContext;
	}
	public ifexpr(): IfexprContext {
		return this.getTypedRuleContext(IfexprContext, 0) as IfexprContext;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_command;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterCommand) {
	 		listener.enterCommand(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitCommand) {
	 		listener.exitCommand(this);
		}
	}
}


export class CommandNameContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(simple2Parser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_commandName;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterCommandName) {
	 		listener.enterCommandName(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitCommandName) {
	 		listener.exitCommandName(this);
		}
	}
}


export class CommandArgsContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public whitespace_list(): WhitespaceContext[] {
		return this.getTypedRuleContexts(WhitespaceContext) as WhitespaceContext[];
	}
	public whitespace(i: number): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, i) as WhitespaceContext;
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_commandArgs;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterCommandArgs) {
	 		listener.enterCommandArgs(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitCommandArgs) {
	 		listener.exitCommandArgs(this);
		}
	}
}


export class LocalVarContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOCAL(): TerminalNode {
		return this.getToken(simple2Parser.LOCAL, 0);
	}
	public whitespace_list(): WhitespaceContext[] {
		return this.getTypedRuleContexts(WhitespaceContext) as WhitespaceContext[];
	}
	public whitespace(i: number): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, i) as WhitespaceContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(simple2Parser.IDENTIFIER, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(simple2Parser.EQUALS, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_localVar;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterLocalVar) {
	 		listener.enterLocalVar(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitLocalVar) {
	 		listener.exitLocalVar(this);
		}
	}
}


export class GlobalVarContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(simple2Parser.GLOBAL, 0);
	}
	public whitespace_list(): WhitespaceContext[] {
		return this.getTypedRuleContexts(WhitespaceContext) as WhitespaceContext[];
	}
	public whitespace(i: number): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, i) as WhitespaceContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(simple2Parser.IDENTIFIER, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(simple2Parser.EQUALS, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_globalVar;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterGlobalVar) {
	 		listener.enterGlobalVar(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitGlobalVar) {
	 		listener.exitGlobalVar(this);
		}
	}
}


export class SetVarContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(simple2Parser.SET, 0);
	}
	public whitespace_list(): WhitespaceContext[] {
		return this.getTypedRuleContexts(WhitespaceContext) as WhitespaceContext[];
	}
	public whitespace(i: number): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, i) as WhitespaceContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(simple2Parser.IDENTIFIER, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(simple2Parser.EQUALS, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_setVar;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterSetVar) {
	 		listener.enterSetVar(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitSetVar) {
	 		listener.exitSetVar(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LABEL(): TerminalNode {
		return this.getToken(simple2Parser.LABEL, 0);
	}
	public whitespace(): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, 0) as WhitespaceContext;
	}
	public comment(): CommentContext {
		return this.getTypedRuleContext(CommentContext, 0) as CommentContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_label;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterLabel) {
	 		listener.enterLabel(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitLabel) {
	 		listener.exitLabel(this);
		}
	}
}


export class ExprstmtContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPR(): TerminalNode {
		return this.getToken(simple2Parser.EXPR, 0);
	}
	public whitespace(): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, 0) as WhitespaceContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_exprstmt;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterExprstmt) {
	 		listener.enterExprstmt(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitExprstmt) {
	 		listener.exitExprstmt(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMENT(): TerminalNode {
		return this.getToken(simple2Parser.COMMENT, 0);
	}
	public whitespace(): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, 0) as WhitespaceContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_comment;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterComment) {
	 		listener.enterComment(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitComment) {
	 		listener.exitComment(this);
		}
	}
}


export class IfexprContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IFEXPR(): TerminalNode {
		return this.getToken(simple2Parser.IFEXPR, 0);
	}
	public whitespace(): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, 0) as WhitespaceContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_ifexpr;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterIfexpr) {
	 		listener.enterIfexpr(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitIfexpr) {
	 		listener.exitIfexpr(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public subexpr(): SubexprContext {
		return this.getTypedRuleContext(SubexprContext, 0) as SubexprContext;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public boolean_(): BooleanContext {
		return this.getTypedRuleContext(BooleanContext, 0) as BooleanContext;
	}
	public null_(): NullContext {
		return this.getTypedRuleContext(NullContext, 0) as NullContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_value;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(simple2Parser.NUMBER, 0);
	}
	public PLUSMINUS(): TerminalNode {
		return this.getToken(simple2Parser.PLUSMINUS, 0);
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_number;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitNumber) {
	 		listener.exitNumber(this);
		}
	}
}


export class BooleanContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(simple2Parser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(simple2Parser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_boolean;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterBoolean) {
	 		listener.enterBoolean(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitBoolean) {
	 		listener.exitBoolean(this);
		}
	}
}


export class NullContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULL(): TerminalNode {
		return this.getToken(simple2Parser.NULL, 0);
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_null;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterNull) {
	 		listener.enterNull(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitNull) {
	 		listener.exitNull(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(simple2Parser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_string;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitString) {
	 		listener.exitString(this);
		}
	}
}


export class SubexprContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SUBEXPR(): TerminalNode {
		return this.getToken(simple2Parser.SUBEXPR, 0);
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_subexpr;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterSubexpr) {
	 		listener.enterSubexpr(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitSubexpr) {
	 		listener.exitSubexpr(this);
		}
	}
}


export class WhitespaceContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHITESPACE(): TerminalNode {
		return this.getToken(simple2Parser.WHITESPACE, 0);
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_whitespace;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterWhitespace) {
	 		listener.enterWhitespace(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitWhitespace) {
	 		listener.exitWhitespace(this);
		}
	}
}


export class ChoiceBlockContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHOICE(): TerminalNode {
		return this.getToken(simple2Parser.CHOICE, 0);
	}
	public EOL(): TerminalNode {
		return this.getToken(simple2Parser.EOL, 0);
	}
	public END(): TerminalNode {
		return this.getToken(simple2Parser.END, 0);
	}
	public whitespace_list(): WhitespaceContext[] {
		return this.getTypedRuleContexts(WhitespaceContext) as WhitespaceContext[];
	}
	public whitespace(i: number): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, i) as WhitespaceContext;
	}
	public ifexpr(): IfexprContext {
		return this.getTypedRuleContext(IfexprContext, 0) as IfexprContext;
	}
	public choiceOpt_list(): ChoiceOptContext[] {
		return this.getTypedRuleContexts(ChoiceOptContext) as ChoiceOptContext[];
	}
	public choiceOpt(i: number): ChoiceOptContext {
		return this.getTypedRuleContext(ChoiceOptContext, i) as ChoiceOptContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_choiceBlock;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterChoiceBlock) {
	 		listener.enterChoiceBlock(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitChoiceBlock) {
	 		listener.exitChoiceBlock(this);
		}
	}
}


export class ChoiceOptContext extends ParserRuleContext {
	constructor(parser?: simple2Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public EOL_list(): TerminalNode[] {
	    	return this.getTokens(simple2Parser.EOL);
	}
	public EOL(i: number): TerminalNode {
		return this.getToken(simple2Parser.EOL, i);
	}
	public whitespace(): WhitespaceContext {
		return this.getTypedRuleContext(WhitespaceContext, 0) as WhitespaceContext;
	}
	public ifexpr(): IfexprContext {
		return this.getTypedRuleContext(IfexprContext, 0) as IfexprContext;
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
    public get ruleIndex(): number {
    	return simple2Parser.RULE_choiceOpt;
	}
	public enterRule(listener: simple2Listener): void {
	    if(listener.enterChoiceOpt) {
	 		listener.enterChoiceOpt(this);
		}
	}
	public exitRule(listener: simple2Listener): void {
	    if(listener.exitChoiceOpt) {
	 		listener.exitChoiceOpt(this);
		}
	}
}
