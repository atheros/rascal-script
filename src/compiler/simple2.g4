grammar simple2;

prog
    : (line EOL | EOL)* line? EOF
    ;

line
    : label
    | exprstmt
    | command
    | comment
    | ifBlock
    | doBlock
    | whileBlock
    | localVar
    | globalVar
    | setVar
    | choiceBlock
    | whitespace+
    ;

ifBlock
    : whitespace? IFEXPR EOL (line EOL)* elifBlock* elseBlock? whitespace? END comment?
    ;

elifBlock
    : whitespace? ELIFEXPR EOL (line EOL)*
    ;


elseBlock
    : whitespace? ELSE comment? EOL (line EOL)*
    ;

doBlock
    : whitespace? DO comment? EOL (line EOL)* whitespace? UNTIL
    ;

whileBlock
    : whitespace? WHILE EOL (line EOL)* whitespace? END comment?
    ;

command
    : whitespace? commandName commandArgs? (ifexpr | comment)?
    ;

commandName
    : IDENTIFIER
    ;

commandArgs
    : whitespace value (whitespace value)*
    ;

localVar
    : whitespace? LOCAL whitespace IDENTIFIER whitespace? EQUALS whitespace? value comment?
    ;

globalVar
    : whitespace? GLOBAL whitespace IDENTIFIER whitespace? EQUALS whitespace? value comment?
    ;

setVar
    : whitespace? SET whitespace IDENTIFIER whitespace? EQUALS whitespace? value comment?
    ;

label
    : whitespace? LABEL comment?
    ;

exprstmt
    : whitespace? EXPR
    ;

comment
    : whitespace? COMMENT
    ;

ifexpr
    : whitespace? IFEXPR
    ;

value
    : subexpr
    | string
    | number
    | boolean
    | null
    ;

number
    : NUMBER
    | PLUSMINUS NUMBER
    ;

boolean
    : TRUE
    | FALSE
    ;

null
    : NULL
    ;

string
    : STRING
    ;

subexpr
    : SUBEXPR
    ;

whitespace
    : WHITESPACE
    ;

choiceBlock
    : whitespace? CHOICE IDENTIFIER? commandArgs? ifexpr? EOL choiceOpt+ whitespace? END
    ;

choiceOpt
    : whitespace? string commandArgs? ifexpr? EOL (line EOL)*
    ;

IFEXPR
    : 'if' [ \t] ~[\r\n]+
    ;

ELIFEXPR
    : 'elif' [ \t] ~[\r\n]+
    ;

ELSE
    : 'else'
    ;

END
    : 'end'
    ;

WHILE
    : 'while' [ \t] ~[\r\n]+
    ;

UNTIL
    : 'until' [ \t] ~[\r\n]+
    ;

DO
    : 'do'
    ;


COMMENT
    : '#' ~[\r\n]*
    ;

SUBEXPR
    : '${' ~[\r\n}]+ '}'
    ;

EXPR
    : '$' ~[{\r\n] ~[\r\n]+
    ;


LOCAL
    : 'local'
    ;

SET
    : 'set'
    ;

DEFINE
    : 'define'
    ;

GLOBAL
    : 'global'
    ;

LABEL
    : [a-zA-Z_][a-zA-Z0-9_]* ':'
    ;

TRUE
    : 'true'
    ;

FALSE
    : 'false'
    ;

CHOICE
    : 'choice'
    ;

NULL
    : 'null'
    ;

IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

PLUSMINUS
    : '+'
    | '-'
    ;

NUMBER
    : [0-9]+
    | '.' [0-9]+
    | [0-9]+ '.' [0-9]+
    ;

WHITESPACE
    : [ \t]+
    ;

STRING
    : '"' String? '"'
    ;

fragment String
    : SChar+
    ;

fragment SChar
    : ~["\\\r\n]
    | '\\"'
    | '\\t'
    | '\\n'
    | '\\r'
    | '\\x' HEX_DIGIT HEX_DIGIT
    | ('\\u'|'\\U') HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
    ;

HEX_DIGIT
    : [0-9a-fA-F]
    ;

EQUALS
    : '='
    ;

EOL
    : [\r\n]+
    ;