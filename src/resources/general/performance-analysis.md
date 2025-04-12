# Low Level Analysis Resources

## Profiling

- [Brendan Gregg's perf examples](https://www.brendangregg.com/perf.html): Examples for how to use `perf` to understand
  performance on linux and profile hardware performance counters
- [Tracy](https://github.com/wolfpld/tracy)
- [Magic Trace](https://github.com/janestreet/magic-trace)

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
