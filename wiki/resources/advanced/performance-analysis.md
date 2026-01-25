---
preview: |
  # Performance Analysis Resources

  Check out our community-curated wiki with tools and resources for profiling and optimizing C and C++ code
---

# Performance Analysis Resources

## Profiling

- [Brendan Gregg's perf examples](https://www.brendangregg.com/perf.html): Examples for how to use `perf` to understand
  performance on linux and profile hardware performance counters
- [Tracy](https://github.com/wolfpld/tracy)
- [Magic Trace](https://github.com/janestreet/magic-trace)
- [Visual Studio][vs-prof]'s built-in profiling tools
- [Xcode Instruments](https://developer.apple.com/tutorials/instruments)[^1]

[vs-prof]:
  https://learn.microsoft.com/en-us/visualstudio/profiling/profiling-feature-tour?view=vs-2022&pivots=programming-language-dotnet

[^1]:
    This is an excellent tutorial for Instruments:
    https://www.jviotti.com/2024/01/29/using-xcode-instruments-for-cpp-cpu-profiling.html

## Codegen

- [Compiler Explorer](https://godbolt.org/): Tool for analyzing compiler codegen
  - Tip: Make sure to turn on optimizations (`-O3`). You will need to be careful to write your code in such a way that
    the compiler doesn't optimize it all away.

> [!NOTE]
>
> It's a common pitfall to try to estimate x86 performance by eye. This is impossible to do on modern CPUs in general
> due to architecture details such as pipelining, superscalar pipelining, branch prediction, micro-architecture details,
> register renaming, etc. This is especially true for complicated architectures like x86. As such, it's necessary to
> alway profile and benchmark in addition to looking at the generated code.

## x86

- [uiCA](https://uica.uops.info/): Tool for simulating instruction performance on x86
  - Tip: Select `llvm-mca` as well as `uiCA` and also select "Trace Table"
- [uiCA's instruction table](https://uops.info/table.html)
- [llvm-mca tool on Compiler Explorer](https://godbolt.org/z/q5n5KdEe9)

## General

- [Algorithms for Modern Hardware](https://en.algorithmica.org/hpc/): An extensive resource covering various algorithmic
  topics and optimizations of various algorithms.
