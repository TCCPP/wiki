# Debugging Your Program
## Debugging
Debugging is the process of identifying and resolving errors (also known as "bugs") within the software or the hardware.
This article is about software debugging only.

### Debugging Techniques
* Enabling compiler warnings (`-Wall -Wextra -Wpedantic -Wconversion ...`)
* Enabling sanitizers (`-fsanitize=address`)
* Print debugging - logging the state of your program
* Systematic elimination - enabling/disabling parts of your code
* Using static code analysis tools
* Unit Testing - testing individual components of a software application
* Interactive debugging - using a debugger

## What is a Debugger
Debugger is a software application that is used for inspecting other programs.
It allows you to observe and control the execution of the program and display the current state.
Some debuggers allow the change of the state of the program to test for different scenarios.
Main features of a debugger are:
* Setting breakpoints to suspend the execution
* Examining the suspended program
* Examining the call stack
* Inspecting memory
* Stepping trough the program
* Examine core dump files
* Modifying the state of the program

## Debuggers
* GNU Debugger (GDB) - often used with GCC compiler
* LLVM Debugger (LLDB) - often used with Clang compiler
* Visual Studio Debugger - often used with MSVC compiler

### Debugging with Visual Studio Code
Debugging in Visual Studio Code can be done with the use of a microsoft extension.
This extension uses GDB as it's backend.
[See tutorial for more information.](https://code.visualstudio.com/docs/cpp/config-linux#_debug-helloworldcpp)

### Debugging with Visual Studio
Visual studio provides a debugger out of the box.
[See tutorial for more information.](https://learn.microsoft.com/en-us/visualstudio/debugger/quickstart-debug-with-cplusplus?view=vs-2022#edit-code-and-continue-debugging)

### Debugging with Clion
Clion debugger uses GDB or LLDB as it's backend.
[See tutorial for more information.](https://www.jetbrains.com/help/clion/debugging-code.html#useful-debugger-shortcuts)