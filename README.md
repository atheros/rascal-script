# Rascal Script Interpreter

RASCAL (Resumable Asynchronous Command Automation Language) is a simple scripting language
that allows you to write scripts that can be executed, paused, and resumed at any time, and includes
the ability of persisting execution state between run sessions.


## Prerequisites

This project requires Node.js (version 18 or later) and NPM.

## Getting Started

RASCAL started its life as a simple domain specific language for automating the execution of scheduled commands.
However, quickly broke out of the original constraints and became closer to a general purpose scripting language
(with some limitations).

### Ok, but why?!

I needed a scripting language I could pause, store its state, and resume it later. I couldn't find anything like that.
Another approach I could have used was to use a control diagram approach, but it would be even more complex to implement
or integrate an existing solution.

And, in my defence, no one talked me out of it.

### How does it look

Rascal is inspired by sh, Python, TCL and Basic.

Bellow is a simple example of a RASCAL script that runs an infinite loop.
It's taken from [timesim example](examples/timesim).

```
local iterations = 0

while true
  log "Iteration: " ${iterations}
  $ iterations = iterations + 1
  wait 1000
end
```

This example along with the host typescript file demonstrates how to use the RASCAL interpreter.
In particular, it demonstrates the ability to pause it, storing its state to disk, and resume the execution of a script later.

See [language reference](#Language-Reference) for more details on the language syntax and features.

## Features

Those the main features of RASCAL:
- [x] Simple syntax and grammar
- [x] Simple and extensible VM level command set
- [x] Asynchronous execution
  - [x] Asynchronous through Promises
  - [x] Asynchronous through deferred in time execution
  - [ ] Asynchronous through event listeners/signals
- [x] Resumable execution with state persistence
- [x] Extensible command set
- [ ] Code hot-reloading (it is possible, but there is no built-in support for it yet)

### Asynchronous execution

RASCAL is an asynchronous language, meaning that every command can be executed asynchronously.
There are two models for asynchronous execution currently supported by RASCAL:
- JavaScript promises
- Deferred in time execution

The first one is the most common and well known, and provides what you expect.
This will allow you for example to fetch some data from a remote server, and wait for some response before continuing.
The unfortunate side effect is that a promise is a complete black box for the interpreter.
It cannot interrupt it, save it's state, and resume its execution at a later point in time, possibly after process restart.

To solve this problem, RASCAL provides a second model for asynchronous execution,
which is based on deferred execution.
A command can return sooner than it has actually completed it's work and tell
the interpreter to resume its execution at a later time (which is defined by the command).
This allows the interpreter to run other routines while waiting for that time to come.
Once the time has come, the interpreter will resume the execution of the command
by invoking its handler with the command state as argument.
If the command needs more time to complete the work, it repeats the process, otherwise,
it returns the result of its work.

> **Note:** Currently promise based commands are blocking for the rest of the interpreter,
> meaning that the interpreter will not be able to run other co routines in parallel
> while waiting for the promise to resolve. This is a limitation of the current implementation,
> and will be addressed in the future.

## Installation

Install RASCAL in your project with npm:

```shell
npm install rascal-script
```

## Usage

```typescript

```

### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This command will create a distribution version of the project
inside your local `dist/` folder


## Language Reference

### Introduction

The language is case-sensitive. Everything is a command (except comments) and every single
statement or function can be represented as an `argv[]` array of type `any` (more on that later).

A simple hello world example:

```
log "Hello World"
```

Assuming you implement the `log` command, the above script will print `Hello World` to the console.
Here is an example implementation of the `log` command needed for this example to work:

```typescript
export function cmdLog(argv: any[]) {
  console.log(...argv.slice(1));
}
```

### Basic syntax

Each line of code contains a single command, a comment, a label, or a statement.

The syntax is described the following grammar in [src/compiler/simple2.g4](src/compiler/simple2.g4).

### Commands

A command is a function that can be executed by the interpreter. Everything in RASCAL is a command.

A command accepts any number of arguments, separated by white spaces
(any number of space or tab characters).

By default, RASCAL comes with a set of built-in commands, but you can extend it with your own commands,
replace the built-in ones, or even remove them (see [Built-in commands](#Built-in-commands)).

Additionally, you can add a condition to a command, which will be evaluated before the command is executed.
If it evaluates to `false`, `0`, `null` or empty string, the command will not be executed.

```
log "The password is P.A.S.S.W.O.R.D." if not password_is_secret
log "The password is secret" if password_is_secret
```

See [If expression](#If-expression) for more details on how conditions are implemented.

#### Argument types

An argument might be a string literal, double-quoted. For example:

```
"Hello World"
```

An argument might be a number. For example:

```
30
3.14
.5
```

An argument might be a boolean. For example:

```
true
false
```

An argument might be a null value. For example:

```
null
```

An argument might also be an expression argument.
Expression arguments are delimited by `${` and `}`.
Expression arguments are evaluated before being passed to the command.

For example:
```
${1 + 2}
${"Hello" + " " + "World"}
${someObject.someArray[10]}
```

See [Expressions](#Expressions) for more details on how expressions are implemented.

### Labels

Since RASCAL doesn't provide a way to define functions or procedures in the code, labels can be used
to help organize the code and make it more readable.

Labels can be used as entry points to the script from the host application or as jump targets
for the script itself.

Currently, there is no public command for that (I haven't decided yet on how it should work),
but you can expose the builtin jump command while initializing the interpreter:

```typescript
const vm = createVM({
  commands: {
    jump: VmBuiltins.jump,
  },
});
```

### Built-in commands

By default, RASCAL comes with a limited set of public built-in commands.

There are also internal commands you cannot directly access from a script.
They are on purpose breaking the command name rule and start with a `.`
(see `VmScriptCommands` in [src/vm/vm-types.ts](src/vm/vm-types.ts)).
You can however access their implementation with the `VmBuiltins` object.

#### Command: global

Declare a variable in global context and assign a value to it.

Example:
```
global someVar = ${1 + 2}
global anotherVar = "Hello World"
```

See also
[Variable scope and contexts](#Variable-scope-and-contexts),
[Expressions](#Expressions).

#### Command: local

Declare a variable in script context and assign a value to it.

Example:
```
local someVar = ${1 + 2}
local anotherVar = "Hello World"
```

See also
[Variable scope and contexts](#Variable-scope-and-contexts),
[Co-routines](#Co-routines),
[Expressions](#Expressions).

#### Command: set

Declare a variable in routine context and assign a value to it.

Example:
```
set someVar = ${1 + 2}
set anotherVar = "Hello World"
```

See also
[Variable scope and contexts](#Variable-scope-and-contexts),
[Expressions](#Expressions).

#### Command: Expression statement

Expression statements are a special kind of command that allows you to execute an expression.

By default, it's mostly useful to assign values to variables.

```
$ someVar = 1 + 2
```

See [Expressions](#Expressions) for more details on how expressions are implemented.

### Co-routines

Rascal scripts are executed as co-routines. A single virtual machine can run
multiple co-routines in parallel.

Co-routines are executed in a single thread, so they are not really parallel,
but they are executed in an interleaved fashion.

The execution takes place only during a call to `VM.process()`.

A single routine is executed until one of the following things occur:
- a routine ends by reaching the end of script
- a routine ends by returning an exit code
- a routine yields control back to the VM by returning yield code
- a routine executes an asynchronous command

Once that happen, next routine will be executed until it reaches one of the above conditions.

When all the routines got "CPU time", the VM will return control to the host application.
Then the host application can call `VM.process()` again to continue the execution of routines.

Between calls to `VM.process()`, the VM will not execute any routine. This is also the time
when the host application can save the state of the VM to disk.

### Variable scope and contexts

Variables in RASCAL are defined in one of the 3 contexts:
- global context
- script context
- routine context

#### Declaring variables

The **global** context is shared between all scripts and routines.
It is accessible from everywhere.
You can use the `global` command to create a variable in global context.

The **script** context is shared between all routines that are currently executing the same script.
You can use the `local` command to create a variable in script context.

The **routine** context is not shared. It is private to the routine that is currently executing.
You can use the `set` command to create a variable in routine context.

```
global aGlobalVar = true
local aScriptVar = "Hello World"
set aRoutineVar = ${1 + 2}
```

##### Declaration moment

`global` and `local` commands are by default executed when the script is loaded by the VM.
This behavior can be changed by setting initVarsAtRuntime to true in the VM options.

> **Note:** This dual way of doing fundamental things is not ideal and will be changed in the future
> once I figure out which way makes more sense.

> **Note:** Due to the above, please keep all `global` and `local` commands at the top of your script files.


#### Reading and writing variables

When reading variables, the interpreter will first look in the routine context,
then in the script context, and finally in the global context.

When writing variables, the interpreter will first try to use the exising variable location.
The interpreter will first look in the routine context, then in the script context, and finally in the global context.
If an existing variable is found, it will be replaced by the new value.
If no existing variable is found, the interpreter will create a new variable in the routine context.

Can a variable be read if it's not defined in any accessible context? 
That actually depends on the expression engine.
See [Expressions](#Expressions) for more details on how expressions are implemented.

### Flow control

RASCAL provides some basic statements for flow control.

#### If statement

If statement executes a block of code if it's expression is truthy (JavaScript truthy).

You can also use the `elif` and `else` keywords to add more conditions.

Everything following `if` and `elif` is considered an expression,
so there is no need to use the `${` and `}` notation.

```
if value > 20
  log "Condition 1 is true"
elif value < 20
  log "Condition 2 is true"
else
  log "No condition is true"
end
```

#### While loop

Execute a loop while the expression is truthy (JavaScript truthy).

If the condition is not truthy from the beginning, the code within the loop will not be executed.

Example:
```
while not done
  log "Looping"
  wait 1000
end
```

#### Do loop

Execute a loop until the expression is truthy (JavaScript truthy).

If the condition is truthy from the beginning, the code within the loop will be executed at least once.

```
do
  log "Looping"
  wait 1000
until done == true
```

> **Note:** I'm not sure about this one. It might be removed in the future.

#### Choice statement

The `choice` statement is a pseudo command that allows you to execute a block of code based
on some conditions, possibly asynchronous.

It is actually not implemented by default, so if you want to use it,
you must provide your own implementation.

Example:
```
log "Which way to go?"
choice
  "Go left"
    log "Going left"
  "Go right"
    log "Going right"
end
```

You can use [If expressions](#If-expression) to make the `choice` statement conditional.

```
choice if door_is_open
  "Go left"
    log "Going left"
  "Go right"
    log "Going right"
end
```

You can also use [If expressions](#if-expression) to add conditions to each choice option.

```
log "Which way to go?"
choice
  "Go left" if door_is_open
    log "Going left"
  "Go right"
    log "Going right"
end
```


See [examples/adventure](examples/adventure) for a complete example on how to use and implement
this command.

### If expression

You can use the `if` keyword to add conditions to other command.

If expressions provide a more compact syntax for implementing conditions over regular `if` statements.

Everything following the `if` keyword is considered an expressions,
so there is no need to use the `${` and `}` notation.

Example:
```
log "Good morning" if hour < 12
log "Good afternoon" if hour >= 12
```

You can add the `if` expression to any custom command, `choice` statement, and `choice` options.


### Expressions

Because RASCAL was supposed to be a DSL, it wasn't supposed to have any kind of expressions support.

However, I needed something to be able to implement conditions and the easiest way to do that
was to use an external expression evaluation engine.

By default, [expr-eval](https://github.com/silentmatt/expr-eval) is used.
The reason I chose `expr-eval` is that it supports assignment expressions,
which is a great feature to have, and it is what makes 
[expesssion statements](#Command: Expression statement) work.

You can provide your own implementation of expression evaluator if you want to use a different one
(see `expressionEvaluator` in [src/vm/vm-types.ts](src/vm/vm-types.ts)).

### Restoring state

See [examples/timesim](examples/timesim) for a complete example on how to use it.

#### Code cold-reloading

TODO: write about code cold-reloading

#### Code hot-reloading

TODO: write an example of code hot-reloading

### Time control

TODO: write about time control in the VM.

## Contributing

If you want to contribute to this project, you are more than welcome to do so.

Please note however that this project is still in its early stages, so there is still a lot of work to do.
There is a lot of features missing in the language, and that is on purpose.
I don't want to commit to early, I want to be able to experiment for now to see what works well and what doesn't.
That is why there are no standard commands available or the compiler and expression evaluator can be replaced.

If you want to implement new features, please open an issue first to discuss it.

### Compiling parser

Rascal grammar is compiled with antlr4 (version 4.13.1).
You need to download this version of antlr4 and put it in the root folder.
You can regenerate the parser by running `npm run gen-parser`.

If you download a different version of antlr4, you will need to update the script entry in `package.json`.

## Credits

[Evgeniy Vodolazskiy](https://github.com/waterlaz) - findLine() implementation, help with design

## Versioning

`rascal-script` uses [SemVer](http://semver.org/) for versioning.

## License

[MIT-0 License](LICENSE) © Przemysław Grzywacz
