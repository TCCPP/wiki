# GNU Debugger

GNU debugger (GDB) is one of the most used debuggers today with many frontends and adapters. GDB falls under the
category of free and open source software. It is licensed under the GPL license which means that you use GDB for any
purpose (including commercial use).

- [See the official documentation](https://www.sourceware.org/gdb/documentation/)
- [See a video tutorial](https://www.youtube.com/watch?v=bSEW0BvMiGc)

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

## Example

### Example source code

```cpp:line-numbers
int main() {
    int var = 123;
    int *pvar = &var;
    void *hello = "Hello, World!";
    int sum[10] = {};
    for(int i = 1; i < 10; ++i) {
        sum[i] = sum[i-1] + i;
    }
}
```

### Terminal commands

```bash
g++ main.cpp -o main.out -O0 -g # Compile
gdb main.out -q --tui           # Start a debugger
(gdb) break 6                   # Set a breakpoint on line 6
(gdb) run                       # Start execution of the program
(gdb) print var                 # Print the value of var
(gdb) print *pvar               # Dereference pvar and print
(gdb) print (char*) hello       # Cast the void* to char* and print its value
(gdb) watch sum                 # Sets a watchpoint
(gdb) continue                  # Next iteration
(gdb) info breakpoints          # Prints all breakpoints
(gdb) delete breakpoints 2      # Deletes the watchpoint
(gdb) break 8                   # Set a breakpoint on line 8 (after the for loop)
(gdb) info locales              # Prints local variables
(gdb) continue                  # Continue until the end
(gdb) quit                      # Quit GDB
```
