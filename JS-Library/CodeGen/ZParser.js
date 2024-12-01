// Generated from D:/a/antlr4-code-generation-action/antlr4-code-generation-action/ZParser.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from "https://cdn.jsdelivr.net/npm/antlr4@4.12.0/dist/antlr4.web.js";

import ZParserListener from './ZParserListener.js';
import ZParserVisitor from './ZParserVisitor.js';

const serializedATN = [4,1,44,238,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,1,1,5,1,34,8,1,10,1,12,1,37,9,1,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,3,2,47,8,2,1,2,1,2,3,2,51,8,2,1,3,1,3,1,4,1,4,1,4,3,
4,58,8,4,1,4,1,4,3,4,62,8,4,1,4,1,4,3,4,66,8,4,1,4,1,4,1,4,1,4,1,4,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,82,8,5,1,5,1,5,1,5,1,5,1,5,3,5,89,8,5,
1,6,1,6,3,6,93,8,6,1,6,3,6,96,8,6,1,6,1,6,1,6,1,6,5,6,102,8,6,10,6,12,6,
105,9,6,3,6,107,8,6,1,6,1,6,1,6,3,6,112,8,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,
1,7,5,7,122,8,7,10,7,12,7,125,9,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,133,8,8,10,
8,12,8,136,9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,145,8,9,10,9,12,9,148,9,9,
1,9,1,9,3,9,152,8,9,1,10,1,10,1,10,3,10,157,8,10,1,11,1,11,1,11,1,11,3,11,
163,8,11,1,12,1,12,1,12,1,12,1,12,1,12,3,12,171,8,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,202,8,12,10,12,
12,12,205,9,12,3,12,207,8,12,1,12,1,12,1,12,1,12,1,12,3,12,214,8,12,5,12,
216,8,12,10,12,12,12,219,9,12,1,13,1,13,1,13,1,13,1,13,3,13,226,8,13,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,236,8,14,1,14,0,1,24,15,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,0,6,2,0,30,30,44,44,2,0,14,14,27,27,1,0,
15,17,2,0,13,13,18,18,1,0,20,22,1,0,25,26,271,0,30,1,0,0,0,2,35,1,0,0,0,
4,50,1,0,0,0,6,52,1,0,0,0,8,54,1,0,0,0,10,72,1,0,0,0,12,90,1,0,0,0,14,117,
1,0,0,0,16,128,1,0,0,0,18,139,1,0,0,0,20,153,1,0,0,0,22,158,1,0,0,0,24,170,
1,0,0,0,26,225,1,0,0,0,28,235,1,0,0,0,30,31,3,2,1,0,31,1,1,0,0,0,32,34,3,
4,2,0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,3,1,0,0,
0,37,35,1,0,0,0,38,51,3,12,6,0,39,51,3,24,12,0,40,51,3,22,11,0,41,51,3,10,
5,0,42,51,3,8,4,0,43,51,3,6,3,0,44,46,5,32,0,0,45,47,3,24,12,0,46,45,1,0,
0,0,46,47,1,0,0,0,47,51,1,0,0,0,48,51,5,39,0,0,49,51,5,40,0,0,50,38,1,0,
0,0,50,39,1,0,0,0,50,40,1,0,0,0,50,41,1,0,0,0,50,42,1,0,0,0,50,43,1,0,0,
0,50,44,1,0,0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,5,1,0,0,0,52,53,5,5,0,0,53,
7,1,0,0,0,54,55,5,38,0,0,55,57,5,6,0,0,56,58,3,22,11,0,57,56,1,0,0,0,57,
58,1,0,0,0,58,59,1,0,0,0,59,61,5,5,0,0,60,62,3,24,12,0,61,60,1,0,0,0,61,
62,1,0,0,0,62,63,1,0,0,0,63,65,5,5,0,0,64,66,3,24,12,0,65,64,1,0,0,0,65,
66,1,0,0,0,66,67,1,0,0,0,67,68,5,7,0,0,68,69,5,8,0,0,69,70,3,2,1,0,70,71,
5,9,0,0,71,9,1,0,0,0,72,73,5,36,0,0,73,74,5,6,0,0,74,75,3,24,12,0,75,76,
5,7,0,0,76,77,5,8,0,0,77,78,3,2,1,0,78,81,5,9,0,0,79,80,5,37,0,0,80,82,3,
10,5,0,81,79,1,0,0,0,81,82,1,0,0,0,82,88,1,0,0,0,83,84,5,37,0,0,84,85,5,
8,0,0,85,86,3,2,1,0,86,87,5,9,0,0,87,89,1,0,0,0,88,83,1,0,0,0,88,89,1,0,
0,0,89,11,1,0,0,0,90,92,5,30,0,0,91,93,3,14,7,0,92,91,1,0,0,0,92,93,1,0,
0,0,93,95,1,0,0,0,94,96,5,44,0,0,95,94,1,0,0,0,95,96,1,0,0,0,96,97,1,0,0,
0,97,106,5,6,0,0,98,103,3,20,10,0,99,100,5,10,0,0,100,102,3,20,10,0,101,
99,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,107,1,0,0,
0,105,103,1,0,0,0,106,98,1,0,0,0,106,107,1,0,0,0,107,108,1,0,0,0,108,111,
5,7,0,0,109,110,5,28,0,0,110,112,3,18,9,0,111,109,1,0,0,0,111,112,1,0,0,
0,112,113,1,0,0,0,113,114,5,8,0,0,114,115,3,2,1,0,115,116,5,9,0,0,116,13,
1,0,0,0,117,118,5,19,0,0,118,123,3,20,10,0,119,120,5,10,0,0,120,122,3,20,
10,0,121,119,1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,
126,1,0,0,0,125,123,1,0,0,0,126,127,5,20,0,0,127,15,1,0,0,0,128,129,5,19,
0,0,129,134,3,18,9,0,130,131,5,10,0,0,131,133,3,18,9,0,132,130,1,0,0,0,133,
136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,134,1,0,
0,0,137,138,5,20,0,0,138,17,1,0,0,0,139,151,7,0,0,0,140,141,5,19,0,0,141,
146,3,18,9,0,142,143,5,10,0,0,143,145,3,18,9,0,144,142,1,0,0,0,145,148,1,
0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,149,1,0,0,0,148,146,1,0,0,0,149,
150,5,20,0,0,150,152,1,0,0,0,151,140,1,0,0,0,151,152,1,0,0,0,152,19,1,0,
0,0,153,156,5,44,0,0,154,155,5,28,0,0,155,157,3,18,9,0,156,154,1,0,0,0,156,
157,1,0,0,0,157,21,1,0,0,0,158,159,5,29,0,0,159,162,3,20,10,0,160,161,5,
11,0,0,161,163,3,24,12,0,162,160,1,0,0,0,162,163,1,0,0,0,163,23,1,0,0,0,
164,165,6,12,-1,0,165,171,3,26,13,0,166,167,5,13,0,0,167,171,3,24,12,10,
168,169,7,1,0,0,169,171,3,24,12,9,170,164,1,0,0,0,170,166,1,0,0,0,170,168,
1,0,0,0,171,217,1,0,0,0,172,173,10,12,0,0,173,174,5,12,0,0,174,216,3,24,
12,13,175,176,10,8,0,0,176,177,7,2,0,0,177,216,3,24,12,9,178,179,10,7,0,
0,179,180,7,3,0,0,180,216,3,24,12,8,181,182,10,6,0,0,182,183,7,4,0,0,183,
216,3,24,12,7,184,185,10,4,0,0,185,186,7,5,0,0,186,216,3,24,12,5,187,188,
10,3,0,0,188,189,5,11,0,0,189,216,3,24,12,4,190,191,10,2,0,0,191,192,5,23,
0,0,192,216,3,24,12,3,193,194,10,1,0,0,194,195,5,24,0,0,195,216,3,24,12,
2,196,197,10,11,0,0,197,206,5,6,0,0,198,203,3,24,12,0,199,200,5,10,0,0,200,
202,3,24,12,0,201,199,1,0,0,0,202,205,1,0,0,0,203,201,1,0,0,0,203,204,1,
0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,206,198,1,0,0,0,206,207,1,0,0,0,207,
208,1,0,0,0,208,216,5,7,0,0,209,213,10,5,0,0,210,214,3,16,8,0,211,212,5,
19,0,0,212,214,3,24,12,0,213,210,1,0,0,0,213,211,1,0,0,0,214,216,1,0,0,0,
215,172,1,0,0,0,215,175,1,0,0,0,215,178,1,0,0,0,215,181,1,0,0,0,215,184,
1,0,0,0,215,187,1,0,0,0,215,190,1,0,0,0,215,193,1,0,0,0,215,196,1,0,0,0,
215,209,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,25,1,
0,0,0,219,217,1,0,0,0,220,221,5,6,0,0,221,222,3,24,12,0,222,223,5,7,0,0,
223,226,1,0,0,0,224,226,3,28,14,0,225,220,1,0,0,0,225,224,1,0,0,0,226,27,
1,0,0,0,227,236,5,43,0,0,228,236,5,41,0,0,229,236,5,42,0,0,230,236,5,34,
0,0,231,236,5,33,0,0,232,236,5,35,0,0,233,236,5,44,0,0,234,236,3,12,6,0,
235,227,1,0,0,0,235,228,1,0,0,0,235,229,1,0,0,0,235,230,1,0,0,0,235,231,
1,0,0,0,235,232,1,0,0,0,235,233,1,0,0,0,235,234,1,0,0,0,236,29,1,0,0,0,27,
35,46,50,57,61,65,81,88,92,95,103,106,111,123,134,146,151,156,162,170,203,
206,213,215,217,225,235];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ZParser extends antlr4.Parser {

    static grammarFileName = "ZParser.g4";
    static literalNames = [ null, null, null, null, null, "';'", "'('", 
                            "')'", "'{'", "'}'", "','", "'='", "'.'", "'-'", 
                            "'~'", "'*'", "'/'", "'%'", "'+'", "'<'", "'>'", 
                            "'<='", "'>='", "'&&'", "'||'", "'=='", "'!='", 
                            "'!'", "':'", "'var'", "'fun'", "'class'", "'return'", 
                            "'false'", "'true'", "'null'", "'if'", "'else'", 
                            "'for'", "'break'", "'continue'" ];
    static symbolicNames = [ null, "BlockComment", "LineComment", "NEWLINE", 
                             "WS", "SEMICOL", "LPAREN", "RPAREN", "LCURLY", 
                             "RCURLY", "COMMA", "EQ", "DOT", "MINUS", "TILDE", 
                             "STAR", "DIV", "MOD", "PLUS", "LT", "GT", "LTE", 
                             "GTE", "AND", "OR", "CMP_EQ", "CMP_NE", "EX", 
                             "DOUBLE_DOT", "VAR", "FUN", "CLASS", "RET", 
                             "FALSE_", "TRUE_", "NULL_", "IF", "ELSE", "FOR", 
                             "BREAK", "CONTINUE", "INT", "DECIMAL", "STRING", 
                             "IDENT" ];
    static ruleNames = [ "root", "program", "statement", "emptyStatement", 
                         "forLoop", "ifStatement", "function", "typeArgumentsBlock", 
                         "typeParametersBlock", "typeDescriptor", "typedIdent", 
                         "variableDeclaration", "expression", "primaryExpresssion", 
                         "atom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ZParser.ruleNames;
        this.literalNames = ZParser.literalNames;
        this.symbolicNames = ZParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 12:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 12);
    		case 1:
    			return this.precpred(this._ctx, 8);
    		case 2:
    			return this.precpred(this._ctx, 7);
    		case 3:
    			return this.precpred(this._ctx, 6);
    		case 4:
    			return this.precpred(this._ctx, 4);
    		case 5:
    			return this.precpred(this._ctx, 3);
    		case 6:
    			return this.precpred(this._ctx, 2);
    		case 7:
    			return this.precpred(this._ctx, 1);
    		case 8:
    			return this.precpred(this._ctx, 11);
    		case 9:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	root() {
	    let localctx = new RootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ZParser.RULE_root);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.program();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ZParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1744855136) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 8159) !== 0)) {
	            this.state = 32;
	            this.statement();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ZParser.RULE_statement);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.function_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.expression(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.variableDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 41;
	            this.ifStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 42;
	            this.forLoop();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 43;
	            this.emptyStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 44;
	            localctx.ret = this.match(ZParser.RET);
	            this.state = 46;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            if(la_===1) {
	                this.state = 45;
	                this.expression(0);

	            }
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 48;
	            this.match(ZParser.BREAK);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 49;
	            this.match(ZParser.CONTINUE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	emptyStatement() {
	    let localctx = new EmptyStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ZParser.RULE_emptyStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(ZParser.SEMICOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forLoop() {
	    let localctx = new ForLoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ZParser.RULE_forLoop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(ZParser.FOR);
	        this.state = 55;
	        this.match(ZParser.LPAREN);

	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 56;
	            this.variableDeclaration();
	        }

	        this.state = 59;
	        this.match(ZParser.SEMICOL);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1207984192) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 3847) !== 0)) {
	            this.state = 60;
	            this.expression(0);
	        }

	        this.state = 63;
	        this.match(ZParser.SEMICOL);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1207984192) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 3847) !== 0)) {
	            this.state = 64;
	            this.expression(0);
	        }

	        this.state = 67;
	        this.match(ZParser.RPAREN);
	        this.state = 68;
	        this.match(ZParser.LCURLY);
	        this.state = 69;
	        this.program();
	        this.state = 70;
	        this.match(ZParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ZParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(ZParser.IF);
	        this.state = 73;
	        this.match(ZParser.LPAREN);

	        this.state = 74;
	        this.expression(0);
	        this.state = 75;
	        this.match(ZParser.RPAREN);
	        this.state = 76;
	        this.match(ZParser.LCURLY);
	        this.state = 77;
	        this.program();
	        this.state = 78;
	        this.match(ZParser.RCURLY);
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 79;
	            this.match(ZParser.ELSE);
	            this.state = 80;
	            this.ifStatement();

	        }
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 83;
	            this.match(ZParser.ELSE);
	            this.state = 84;
	            this.match(ZParser.LCURLY);
	            this.state = 85;
	            this.program();
	            this.state = 86;
	            this.match(ZParser.RCURLY);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ZParser.RULE_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(ZParser.FUN);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 91;
	            this.typeArgumentsBlock();
	        }

	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 94;
	            localctx.name = this.match(ZParser.IDENT);
	        }

	        this.state = 97;
	        this.match(ZParser.LPAREN);
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 98;
	            this.typedIdent();
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===10) {
	                this.state = 99;
	                this.match(ZParser.COMMA);

	                this.state = 100;
	                this.typedIdent();
	                this.state = 105;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 108;
	        this.match(ZParser.RPAREN);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 109;
	            this.match(ZParser.DOUBLE_DOT);
	            this.state = 110;
	            localctx.type = this.typeDescriptor();
	        }

	        this.state = 113;
	        this.match(ZParser.LCURLY);
	        this.state = 114;
	        this.program();
	        this.state = 115;
	        this.match(ZParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeArgumentsBlock() {
	    let localctx = new TypeArgumentsBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ZParser.RULE_typeArgumentsBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(ZParser.LT);

	        this.state = 118;
	        this.typedIdent();
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 119;
	            this.match(ZParser.COMMA);

	            this.state = 120;
	            this.typedIdent();
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 126;
	        this.match(ZParser.GT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeParametersBlock() {
	    let localctx = new TypeParametersBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ZParser.RULE_typeParametersBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(ZParser.LT);

	        this.state = 129;
	        this.typeDescriptor();
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 130;
	            this.match(ZParser.COMMA);

	            this.state = 131;
	            this.typeDescriptor();
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
	        this.match(ZParser.GT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeDescriptor() {
	    let localctx = new TypeDescriptorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ZParser.RULE_typeDescriptor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        localctx.typeName = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===44)) {
	            localctx.typeName = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 140;
	            this.match(ZParser.LT);

	            this.state = 141;
	            this.typeDescriptor();
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===10) {
	                this.state = 142;
	                this.match(ZParser.COMMA);

	                this.state = 143;
	                this.typeDescriptor();
	                this.state = 148;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 149;
	            this.match(ZParser.GT);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typedIdent() {
	    let localctx = new TypedIdentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ZParser.RULE_typedIdent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        localctx.ident = this.match(ZParser.IDENT);
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 154;
	            this.match(ZParser.DOUBLE_DOT);
	            this.state = 155;
	            localctx.type = this.typeDescriptor();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ZParser.RULE_variableDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(ZParser.VAR);
	        this.state = 159;
	        this.typedIdent();
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 160;
	            this.match(ZParser.EQ);
	            this.state = 161;
	            this.expression(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, ZParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 30:
	        case 33:
	        case 34:
	        case 35:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	            this.state = 165;
	            this.primaryExpresssion();
	            break;
	        case 13:
	            this.state = 166;
	            localctx.prefix = this.match(ZParser.MINUS);
	            this.state = 167;
	            this.expression(10);
	            break;
	        case 14:
	        case 27:
	            this.state = 168;
	            localctx.prefix = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===27)) {
	                localctx.prefix = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 169;
	            this.expression(9);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 217;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 215;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ZParser.RULE_expression);
	                    this.state = 172;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 173;
	                    localctx.bop = this.match(ZParser.DOT);
	                    this.state = 174;
	                    this.expression(13);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ZParser.RULE_expression);
	                    this.state = 175;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 176;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 229376) !== 0))) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 177;
	                    this.expression(9);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ZParser.RULE_expression);
	                    this.state = 178;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 179;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===13 || _la===18)) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 180;
	                    this.expression(8);
	                    break;

	                case 4:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ZParser.RULE_expression);
	                    this.state = 181;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 182;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0))) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 183;
	                    this.expression(7);
	                    break;

	                case 5:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ZParser.RULE_expression);
	                    this.state = 184;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 185;
	                    localctx.bop = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===25 || _la===26)) {
	                        localctx.bop = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 186;
	                    this.expression(5);
	                    break;

	                case 6:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ZParser.RULE_expression);
	                    this.state = 187;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 188;
	                    localctx.bop = this.match(ZParser.EQ);
	                    this.state = 189;
	                    this.expression(4);
	                    break;

	                case 7:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ZParser.RULE_expression);
	                    this.state = 190;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 191;
	                    localctx.bop = this.match(ZParser.AND);
	                    this.state = 192;
	                    this.expression(3);
	                    break;

	                case 8:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ZParser.RULE_expression);
	                    this.state = 193;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 194;
	                    localctx.bop = this.match(ZParser.OR);
	                    this.state = 195;
	                    this.expression(2);
	                    break;

	                case 9:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ZParser.RULE_expression);
	                    this.state = 196;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 197;
	                    localctx.methodCall = this.match(ZParser.LPAREN);
	                    this.state = 206;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1207984192) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 3847) !== 0)) {
	                        this.state = 198;
	                        this.expression(0);
	                        this.state = 203;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                        while(_la===10) {
	                            this.state = 199;
	                            this.match(ZParser.COMMA);
	                            this.state = 200;
	                            this.expression(0);
	                            this.state = 205;
	                            this._errHandler.sync(this);
	                            _la = this._input.LA(1);
	                        }
	                    }

	                    this.state = 208;
	                    this.match(ZParser.RPAREN);
	                    break;

	                case 10:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ZParser.RULE_expression);
	                    this.state = 209;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 213;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                    switch(la_) {
	                    case 1:
	                        this.state = 210;
	                        this.typeParametersBlock();
	                        break;

	                    case 2:
	                        this.state = 211;
	                        localctx.bop = this.match(ZParser.LT);
	                        this.state = 212;
	                        this.expression(0);
	                        break;

	                    }
	                    break;

	                } 
	            }
	            this.state = 219;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	primaryExpresssion() {
	    let localctx = new PrimaryExpresssionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ZParser.RULE_primaryExpresssion);
	    try {
	        this.state = 225;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 220;
	            this.match(ZParser.LPAREN);
	            this.state = 221;
	            this.expression(0);
	            this.state = 222;
	            this.match(ZParser.RPAREN);
	            break;
	        case 30:
	        case 33:
	        case 34:
	        case 35:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 224;
	            this.atom();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ZParser.RULE_atom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 43:
	            this.state = 227;
	            this.match(ZParser.STRING);
	            break;
	        case 41:
	            this.state = 228;
	            this.match(ZParser.INT);
	            break;
	        case 42:
	            this.state = 229;
	            this.match(ZParser.DECIMAL);
	            break;
	        case 34:
	            this.state = 230;
	            this.match(ZParser.TRUE_);
	            break;
	        case 33:
	            this.state = 231;
	            this.match(ZParser.FALSE_);
	            break;
	        case 35:
	            this.state = 232;
	            this.match(ZParser.NULL_);
	            break;
	        case 44:
	            this.state = 233;
	            this.match(ZParser.IDENT);
	            break;
	        case 30:
	            this.state = 234;
	            this.function_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ZParser.EOF = antlr4.Token.EOF;
ZParser.BlockComment = 1;
ZParser.LineComment = 2;
ZParser.NEWLINE = 3;
ZParser.WS = 4;
ZParser.SEMICOL = 5;
ZParser.LPAREN = 6;
ZParser.RPAREN = 7;
ZParser.LCURLY = 8;
ZParser.RCURLY = 9;
ZParser.COMMA = 10;
ZParser.EQ = 11;
ZParser.DOT = 12;
ZParser.MINUS = 13;
ZParser.TILDE = 14;
ZParser.STAR = 15;
ZParser.DIV = 16;
ZParser.MOD = 17;
ZParser.PLUS = 18;
ZParser.LT = 19;
ZParser.GT = 20;
ZParser.LTE = 21;
ZParser.GTE = 22;
ZParser.AND = 23;
ZParser.OR = 24;
ZParser.CMP_EQ = 25;
ZParser.CMP_NE = 26;
ZParser.EX = 27;
ZParser.DOUBLE_DOT = 28;
ZParser.VAR = 29;
ZParser.FUN = 30;
ZParser.CLASS = 31;
ZParser.RET = 32;
ZParser.FALSE_ = 33;
ZParser.TRUE_ = 34;
ZParser.NULL_ = 35;
ZParser.IF = 36;
ZParser.ELSE = 37;
ZParser.FOR = 38;
ZParser.BREAK = 39;
ZParser.CONTINUE = 40;
ZParser.INT = 41;
ZParser.DECIMAL = 42;
ZParser.STRING = 43;
ZParser.IDENT = 44;

ZParser.RULE_root = 0;
ZParser.RULE_program = 1;
ZParser.RULE_statement = 2;
ZParser.RULE_emptyStatement = 3;
ZParser.RULE_forLoop = 4;
ZParser.RULE_ifStatement = 5;
ZParser.RULE_function = 6;
ZParser.RULE_typeArgumentsBlock = 7;
ZParser.RULE_typeParametersBlock = 8;
ZParser.RULE_typeDescriptor = 9;
ZParser.RULE_typedIdent = 10;
ZParser.RULE_variableDeclaration = 11;
ZParser.RULE_expression = 12;
ZParser.RULE_primaryExpresssion = 13;
ZParser.RULE_atom = 14;

class RootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_root;
    }

	program() {
	    return this.getTypedRuleContext(ProgramContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterRoot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitRoot(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitRoot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_statement;
        this.ret = null;
    }

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	forLoop() {
	    return this.getTypedRuleContext(ForLoopContext,0);
	};

	emptyStatement() {
	    return this.getTypedRuleContext(EmptyStatementContext,0);
	};

	RET() {
	    return this.getToken(ZParser.RET, 0);
	};

	BREAK() {
	    return this.getToken(ZParser.BREAK, 0);
	};

	CONTINUE() {
	    return this.getToken(ZParser.CONTINUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmptyStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_emptyStatement;
    }

	SEMICOL() {
	    return this.getToken(ZParser.SEMICOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterEmptyStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitEmptyStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitEmptyStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForLoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_forLoop;
    }

	FOR() {
	    return this.getToken(ZParser.FOR, 0);
	};

	LPAREN() {
	    return this.getToken(ZParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ZParser.RPAREN, 0);
	};

	LCURLY() {
	    return this.getToken(ZParser.LCURLY, 0);
	};

	program() {
	    return this.getTypedRuleContext(ProgramContext,0);
	};

	RCURLY() {
	    return this.getToken(ZParser.RCURLY, 0);
	};

	SEMICOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZParser.SEMICOL);
	    } else {
	        return this.getToken(ZParser.SEMICOL, i);
	    }
	};


	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterForLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitForLoop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitForLoop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(ZParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(ZParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ZParser.RPAREN, 0);
	};

	LCURLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZParser.LCURLY);
	    } else {
	        return this.getToken(ZParser.LCURLY, i);
	    }
	};


	program = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProgramContext);
	    } else {
	        return this.getTypedRuleContext(ProgramContext,i);
	    }
	};

	RCURLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZParser.RCURLY);
	    } else {
	        return this.getToken(ZParser.RCURLY, i);
	    }
	};


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ELSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZParser.ELSE);
	    } else {
	        return this.getToken(ZParser.ELSE, i);
	    }
	};


	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_function;
        this.name = null;
        this.type = null;
    }

	LPAREN() {
	    return this.getToken(ZParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ZParser.RPAREN, 0);
	};

	LCURLY() {
	    return this.getToken(ZParser.LCURLY, 0);
	};

	program() {
	    return this.getTypedRuleContext(ProgramContext,0);
	};

	RCURLY() {
	    return this.getToken(ZParser.RCURLY, 0);
	};

	FUN() {
	    return this.getToken(ZParser.FUN, 0);
	};

	typeArgumentsBlock() {
	    return this.getTypedRuleContext(TypeArgumentsBlockContext,0);
	};

	DOUBLE_DOT() {
	    return this.getToken(ZParser.DOUBLE_DOT, 0);
	};

	IDENT() {
	    return this.getToken(ZParser.IDENT, 0);
	};

	typeDescriptor() {
	    return this.getTypedRuleContext(TypeDescriptorContext,0);
	};

	typedIdent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypedIdentContext);
	    } else {
	        return this.getTypedRuleContext(TypedIdentContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZParser.COMMA);
	    } else {
	        return this.getToken(ZParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeArgumentsBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_typeArgumentsBlock;
    }

	LT() {
	    return this.getToken(ZParser.LT, 0);
	};

	GT() {
	    return this.getToken(ZParser.GT, 0);
	};

	typedIdent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypedIdentContext);
	    } else {
	        return this.getTypedRuleContext(TypedIdentContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZParser.COMMA);
	    } else {
	        return this.getToken(ZParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterTypeArgumentsBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitTypeArgumentsBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitTypeArgumentsBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeParametersBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_typeParametersBlock;
    }

	LT() {
	    return this.getToken(ZParser.LT, 0);
	};

	GT() {
	    return this.getToken(ZParser.GT, 0);
	};

	typeDescriptor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeDescriptorContext);
	    } else {
	        return this.getTypedRuleContext(TypeDescriptorContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZParser.COMMA);
	    } else {
	        return this.getToken(ZParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterTypeParametersBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitTypeParametersBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitTypeParametersBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeDescriptorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_typeDescriptor;
        this.typeName = null;
    }

	IDENT() {
	    return this.getToken(ZParser.IDENT, 0);
	};

	FUN() {
	    return this.getToken(ZParser.FUN, 0);
	};

	LT() {
	    return this.getToken(ZParser.LT, 0);
	};

	GT() {
	    return this.getToken(ZParser.GT, 0);
	};

	typeDescriptor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeDescriptorContext);
	    } else {
	        return this.getTypedRuleContext(TypeDescriptorContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZParser.COMMA);
	    } else {
	        return this.getToken(ZParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterTypeDescriptor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitTypeDescriptor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitTypeDescriptor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypedIdentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_typedIdent;
        this.ident = null;
        this.type = null;
    }

	IDENT() {
	    return this.getToken(ZParser.IDENT, 0);
	};

	DOUBLE_DOT() {
	    return this.getToken(ZParser.DOUBLE_DOT, 0);
	};

	typeDescriptor() {
	    return this.getTypedRuleContext(TypeDescriptorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterTypedIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitTypedIdent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitTypedIdent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_variableDeclaration;
    }

	VAR() {
	    return this.getToken(ZParser.VAR, 0);
	};

	typedIdent() {
	    return this.getTypedRuleContext(TypedIdentContext,0);
	};

	EQ() {
	    return this.getToken(ZParser.EQ, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitVariableDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_expression;
        this.prefix = null;
        this.bop = null;
        this.methodCall = null;
    }

	primaryExpresssion() {
	    return this.getTypedRuleContext(PrimaryExpresssionContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MINUS() {
	    return this.getToken(ZParser.MINUS, 0);
	};

	TILDE() {
	    return this.getToken(ZParser.TILDE, 0);
	};

	EX() {
	    return this.getToken(ZParser.EX, 0);
	};

	DOT() {
	    return this.getToken(ZParser.DOT, 0);
	};

	STAR() {
	    return this.getToken(ZParser.STAR, 0);
	};

	DIV() {
	    return this.getToken(ZParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(ZParser.MOD, 0);
	};

	PLUS() {
	    return this.getToken(ZParser.PLUS, 0);
	};

	LTE() {
	    return this.getToken(ZParser.LTE, 0);
	};

	GTE() {
	    return this.getToken(ZParser.GTE, 0);
	};

	GT() {
	    return this.getToken(ZParser.GT, 0);
	};

	CMP_EQ() {
	    return this.getToken(ZParser.CMP_EQ, 0);
	};

	CMP_NE() {
	    return this.getToken(ZParser.CMP_NE, 0);
	};

	EQ() {
	    return this.getToken(ZParser.EQ, 0);
	};

	AND() {
	    return this.getToken(ZParser.AND, 0);
	};

	OR() {
	    return this.getToken(ZParser.OR, 0);
	};

	RPAREN() {
	    return this.getToken(ZParser.RPAREN, 0);
	};

	LPAREN() {
	    return this.getToken(ZParser.LPAREN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ZParser.COMMA);
	    } else {
	        return this.getToken(ZParser.COMMA, i);
	    }
	};


	typeParametersBlock() {
	    return this.getTypedRuleContext(TypeParametersBlockContext,0);
	};

	LT() {
	    return this.getToken(ZParser.LT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryExpresssionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_primaryExpresssion;
    }

	LPAREN() {
	    return this.getToken(ZParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(ZParser.RPAREN, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterPrimaryExpresssion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitPrimaryExpresssion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitPrimaryExpresssion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZParser.RULE_atom;
    }

	STRING() {
	    return this.getToken(ZParser.STRING, 0);
	};

	INT() {
	    return this.getToken(ZParser.INT, 0);
	};

	DECIMAL() {
	    return this.getToken(ZParser.DECIMAL, 0);
	};

	TRUE_() {
	    return this.getToken(ZParser.TRUE_, 0);
	};

	FALSE_() {
	    return this.getToken(ZParser.FALSE_, 0);
	};

	NULL_() {
	    return this.getToken(ZParser.NULL_, 0);
	};

	IDENT() {
	    return this.getToken(ZParser.IDENT, 0);
	};

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ZParserListener ) {
	        listener.exitAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ZParserVisitor ) {
	        return visitor.visitAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ZParser.RootContext = RootContext; 
ZParser.ProgramContext = ProgramContext; 
ZParser.StatementContext = StatementContext; 
ZParser.EmptyStatementContext = EmptyStatementContext; 
ZParser.ForLoopContext = ForLoopContext; 
ZParser.IfStatementContext = IfStatementContext; 
ZParser.FunctionContext = FunctionContext; 
ZParser.TypeArgumentsBlockContext = TypeArgumentsBlockContext; 
ZParser.TypeParametersBlockContext = TypeParametersBlockContext; 
ZParser.TypeDescriptorContext = TypeDescriptorContext; 
ZParser.TypedIdentContext = TypedIdentContext; 
ZParser.VariableDeclarationContext = VariableDeclarationContext; 
ZParser.ExpressionContext = ExpressionContext; 
ZParser.PrimaryExpresssionContext = PrimaryExpresssionContext; 
ZParser.AtomContext = AtomContext; 
