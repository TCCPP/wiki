---
alias: debugging
bot_article: |
  # Debugging Your Program

  Debugging is the process of identifying and resolving errors in software. Key techniques include:

  - **Compiler warnings** (`-Wall -Wextra -Wpedantic`)
  - **Sanitizers** (`-fsanitize=address`)
  - **Print debugging** and systematic elimination
  - **Static analysis** and unit testing
  - **Interactive debugging** with GDB, LLDB, or Visual Studio

  ## Have you tried stepping through your code line by line in a debugger?

  If you don't know how to use a debugger or don't have one set up, we *highly* recommend taking the time to do so.
  Debuggers are immensely helpful tools for figuring out where problems emerge in code and especially when you're first
  learning it can help you build intuition and understanding for reasoning through code. Debuggers let you pause execution, inspect variables, examine the call stack, and step through code line by line.
---

# Debugging Your Program

## Debugging

Debugging is the process of identifying and resolving errors (also known as "bugs") within the software or the hardware.
This article is about software debugging only.

### Debugging Techniques

- Enabling compiler warnings (`-Wall -Wextra -Wpedantic -Wconversion ...`)
- Enabling sanitizers (`-fsanitize=address`)
- Print debugging - logging the state of your program
- Systematic elimination - enabling/disabling parts of your code
- Using static code analysis tools
- Unit Testing - testing individual components of a software application
- Interactive debugging - using a debugger

## What is a Debugger

Debugger is a software application that is used for inspecting other programs. It allows you to observe and control the
execution of the program and display the current state. Some debuggers allow the change of the state of the program to
test for different scenarios. Main features of a debugger are:

- Setting breakpoints to suspend the execution
- Examining the suspended program
- Examining the call stack
- Inspecting memory
- Stepping trough the program
- Examine core dump files
- Modifying the state of the program

## What is a Debug Adapter Protocol

Debug Adapter Protocol (DAP) is a communication protocol between debuggers and other development tools (e.g., IDEs,
editors). [Official Documentation](https://microsoft.github.io/debug-adapter-protocol/)

## Debuggers

- GNU Debugger (GDB) - often used with GCC compiler
- LLVM Debugger (LLDB) - often used with Clang compiler
- Visual Studio Debugger - often used with MSVC compiler

### Debugging with Visual Studio Code

Debugging in Visual Studio Code can be done with the use of a microsoft extension. This extension uses GDB as it's
backend. [See tutorial for more information.](https://code.visualstudio.com/docs/cpp/config-linux)

### Debugging with Visual Studio

Visual studio provides a debugger out of the box.
[See tutorial for more information.](https://learn.microsoft.com/en-us/visualstudio/debugger/quickstart-debug-with-cplusplus?view=vs-2022)

### Debugging with Clion

Clion debugger uses GDB or LLDB as it's backend.
[See tutorial for more information.](https://www.jetbrains.com/help/clion/debugging-code.html)
