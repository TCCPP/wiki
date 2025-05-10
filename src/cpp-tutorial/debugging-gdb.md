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

## Example

### Source code

```cpp:line-numbers
int main() {
    int var = 123;
    int *pvar = &var;
    const void *hello = "Hello, GDB!";
    int sum[10] = {};
    for(int i = 1; i < 10; ++i) {
        sum[i] = sum[i-1] + i;
    }
    return 0;
}
```

### Terminal commands

```
g++ main.cpp -o main.out -O0 -g
gdb main.out -q
Reading symbols from main.out...
(gdb) list
1       int main() {
2           int var = 123;
3           int *pvar = &var;
4           const void *hello = "Hello, GDB!";
5           int sum[10] = {};
6           for(int i = 1; i < 10; ++i) {
7               sum[i] = sum[i-1] + i;
8           }
9           return 0;
10      }
(gdb) break 9
Breakpoint 1 at 0x123456: file main.cpp, line 9.
(gdb) run
Starting program: /path/to/executable.out

Breakpoint 1, main () at main.cpp:9
9           return 0;
(gdb) print var
$1 = 123
(gdb) print pvar
$2 = (int *) 0x123456789ABC
(gdb) print *pvar
$3 = 123
(gdb) print hello
$4 = (const void *) 0x123456
(gdb) print (char*) hello
$5 = 0x123456 "Hello, World!"
(gdb) print sum
$6 = {0, 1, 3, 6, 10, 15, 21, 28, 36, 45}
(gdb) continue
Continuing.
[Inferior 1 (process process_id) exited normally]
(gdb) quit
```
