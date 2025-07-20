<!-- alias include -->

# Including headers
## What is `#include`?
`#include` is used to include code from header files. Under the hood, `#include` is essentially a copy-paste of file contents.<br>
Read more about `#include` on [cppreference](https://en.cppreference.com/w/cpp/preprocessor/include).

## Include paths
`#include <...>` looks up the "include paths" that are specified by the system and compiler. You can add paths to this by:<br>
Passing `-I "some/directory/"` on gcc/clang, `/I "some/directory/"` on MSVC.<br>
Adding `target_include_directories(targetname PRIVATE some/directory/)` in CMake

`#include "..."` looks up the directory relative to the source file it's in. If it didn't find the header file that way, it looks up the include paths as a fallback.

## Misconceptions:
A header simply contains the declarations of symbols, stating that the given thing exists, but it doesn't give a definition, because the compiler doesn't need them for compilation. Linking the symbols with their definitions is the job of the linker.
This is because definitions in header files would make each inclusion to create its own copy of the definition, violating the [One Definition Rule](https://en.cppreference.com/w/cpp/language/definition).

This means, that you can't "include a library" just by including its header files. You have to link definitions by either compiling the library source with your project, or linking the library binaries(.a / .lib files).

## Don't -s

Do not include source(`.c, .cpp`) files.
They contain definitions, which, according to [ODR](https://en.cppreference.com/w/cpp/language/definition) should only appear once. Including one would make a copy of all the definitions in that source file.
