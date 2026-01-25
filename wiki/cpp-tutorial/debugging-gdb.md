---
preview: |
  # GNU Debugger (GDB)

  Compile with debug symbols: `g++ main.cpp -o prog -Og -g`

  **Quick reference:**
  - `gdb prog` - Launch debugger
  - `break 10` / `b main` - Set breakpoint
  - `run` / `start` - Start execution
  - `next` / `step` - Step over / into
  - `print var` - Inspect variable
  - `backtrace` - Show call stack
  - `continue` - Resume to next breakpoint
  - `quit` - Exit GDB
---

# GNU Debugger

The GNU Debugger (GDB) is one of the most widely used debuggers today, with numerous frontends and adapters available.
GDB is freely available under the GPLv3 license.

- [See the official documentation](https://www.sourceware.org/gdb/documentation/)
- [See a TCCPP video tutorial](https://www.youtube.com/watch?v=bSEW0BvMiGc)

## GDB Quickstart

### Create an executable with debug symbols

```bash
g++ main.cpp -o executable.file -Og -g
```

- `-O0` - enables no optimizations (maybe preferred)
- `-Og` - enables optimizations that do not interfere with debugging
- `-g` - tells GCC to emit extra information for use by a debugger
- `-ggdb` - tells GCC to emit extra information for use by the GNU debugger
- both `-g` and `-ggdb` have debug levels 0 to 3

### Get hints

GDB is self documented.

- `$man gdb` - displays manual pages
- `$gdb --help` - lists all options, with brief explanations
- `$info gdb` - displays detailed information and documentation
- `(gdb) help` - displays help
- `(gdb) info` - displays info

### Launch a debugger with a file attached

```bash
gdb executable.file
```

- GNU debugger `gdb`
- Executable `executable.file` you want to inspect

### Layouts `layout, lay`

- Launch TUI directly `gdb executable.file --tui` (equivalent to `layout src`)
- Layout source `layout src` - displays source code (if not available recompile with `-g` flag enabled)
- Layout assembly `layout asm` - displays assembly
- Layout split `layout split` - displays both assembly and source layout
- Refresh layout `refresh` - refreshes TUI
- Focus `focus` - changes focus of a window

### Breakpoints

- `break, br, b` - sets a breakpoint to pause execution at a specified location
- `watch` - watchpoint stops execution of your program whenever the value of an expression changes.
- `info breakpoints` - lists all breakpoints
- `delete N` - deletes breakpoint with number N

### Launch the program

- `run, r` - start the program execution inside of gdb
- `start` - creates a temporary breakpoint at `main()` and start execution

### Launch the executable and step thru the program

- `next, n` - executes the next line of code
- `nexti, ni` - executes the next instruction
- `step, s` - enters a function
- `finish, fin` - execute until selected stack frame returns
- `continue, c` - continue execution until next breakpoint

### Inspect

- `print, inspect, p` - prints a value of an expression
- `display` - prints value of expression each time the program stops
- `backtrace, where, bt` - prints backtrace of all stack frames

### Info

- `info locals` - print all local variables (within the current stack frame)
- `info registers` - print registers and their values
- `info breakpoints` - print status of all set breakpoints
- `info watchpoints` - print status of all set breakpoints

## Hello GDB

Lets start with the obligatory hello world example:

```cpp:line-numbers
#include <iostream>
int main() {
    std::cout << "Hello, GDB!";
    return 0; /* break here */
}
```

Compile the source code using GCC with debug symbols enabled. Launch GDB (`-q` - quiet mode. GDB does not display the
initial message).

```
g++ main.cpp -o main.out -O0 -g
gdb main.out -q
Reading symbols from main.out...
```

Now you should be inside of GDB. Each line should should start with `(gdb) `. First lets start the execution of the
program `start`:

```
(gdb) start
Temporary breakpoint 1 at 0x123456: file main.cpp, line 3.
Starting program: /file/path/to/main.out

Temporary breakpoint 1, main () at main1.cpp:3
3           std::cout << "Hello, GDB!" << std::endl;
```

Step a line `next` (abbreviated `n`):

```
(gdb) n
Hello, GDB!
4           return 0;
```

Continue the program `continue [N]` (abbreviated `c`, optionally number of breakpoints to skip `N` can be specified):

```
(gdb) c
Continuing.
[Inferior 1 (process process_id) exited normally]
```

Quit GDB `quit` (abbreviated `q`).

```
(gdb) q
```

## Printing

Inspecting the program's state at specific points in one of the core features of a debugger. The `print` command
(abbreviated `p`, alias `inspect`) is used for displaying the value of an expression in GDB.

```
(gdb) print expr
(gdb) p expr
```

Example of printing some of the basic variables.

```cpp:line-numbers
int main() {
    int var = 123;
    int *pvar = &var;
    const void *hello = "Hello, GDB!";
    int sum[10] = {};
    for(int i = 1; i < 10; ++i) {
        sum[i] = sum[i-1] + i;
    }
    return 0; /* break here */
}
```

Let's set a breakpoint `break` (abbreviated `b`) after all of the variables have been set and run the program.

```
(gdb) b 9
Breakpoint 1 at 0x123456: file main.cpp, line 9.
(gdb) run
Starting program: /path/to/executable.out

Breakpoint 1, main () at main.cpp:9
9           return 0;
```

Basic use case of the print command:

```
(gdb) p var
$1 = 123
```

Printing pointers and pointer dereferencing:

```
(gdb) p pvar
$2 = (int *) 0x123456789abc
(gdb) p *pvar
$3 = 123
```

Casting of a void pointer to a char pointer:

```
(gdb) p hello
$4 = (const void *) 0x123456
(gdb) p (char*) hello
$5 = 0x123456 "Hello, World!"
```

GDB supports printing out arrays:

```
(gdb) p sum
$6 = {0, 1, 3, 6, 10, 15, 21, 28, 36, 45}
```
