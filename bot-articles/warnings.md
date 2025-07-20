# How to Enable Compiler Warnings and Analyzers

Enabling *compiler warnings* is extremely important to ensure that your code
is correct.
Countless mistakes can be caught by the compiler before you ever run your code,
such as missing return statements, unused variables, etc.

*Static analyzers* run additional tests on your code, which are much more
expensive.
They can spot more complex mistakes, such as dereferencing null pointers.

<!-- inline -->
## Warnings for GCC and clang
- recommended: **[-Wall](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html#index-Wall)**, **[-Wpedantic](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html#index-Wpedantic)**, **[-Wextra](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html#index-Wextra)**
- warnings as errors: **[-Werror](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html#index-Werror)**
- disable warnings: `-Wno-id`
- analysis: **[-fanalyzer](https://gcc.gnu.org/onlinedocs/gcc/Static-Analyzer-Options.html#index-analyzer)** (GCC), **[--analyze](https://clang-analyzer.llvm.org/)** (clang)

<!-- inline -->
## Warnings for MSVC
- recommended: **[/W4](https://learn.microsoft.com/en-us/cpp/build/reference/compiler-option-warning-level?view=msvc-170#remarks)**
- warnings as errors: `/WX`
- disble warnings: `/wd`
- analysis: **[/analyze](https://learn.microsoft.com/en-us/cpp/build/reference/analyze-code-analysis?view=msvc-170)**

## Passing Warning Flags to the Compiler on the Command Line
```sh
g++ -Wall -Werror -o program main.cpp
```

## Passing Warning Flags indirectly using CMake
```cmake
# GCC/clang-specific, needs compiler detection
target_compile_options(program PRIVATE -Wall -Werror)
```

## See Also
- [GCC warnings](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html), [clang warnings](https://clang.llvm.org/docs/DiagnosticsReference.html), [MSVC warnings](https://learn.microsoft.com/en-us/cpp/build/reference/compiler-option-warning-level?view=msvc-170#remarks)
- [GCC analysis](https://gcc.gnu.org/onlinedocs/gcc/Static-Analyzer-Options.html), [clang analysis](https://clang.llvm.org/docs/ClangStaticAnalyzer.html), [MSVC analysis](https://learn.microsoft.com/en-us/cpp/build/reference/analyze-code-analysis?view=msvc-170)
- [Set compiler and build properties in Visual Studio](https://learn.microsoft.com/en-us/cpp/build/working-with-project-properties?view=msvc-170)<br>
<:stackoverflow:1074747016644661258>
[How to set warning level in CMake?](https://stackoverflow.com/q/2368811/5740428)
