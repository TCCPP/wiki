# What Is an Ill-Formed Program?

An [ill-formed][ill-formed] program
(as opposed to a [well-formed][well-formed] program)
is "not valid standard C++".
Compilers are required to raise a
[diagnostic message][diagnostic message] (warning or error)
when given an ill-formed program.

<!-- inline -->
## Ill-Formed Example A
```cpp
{#/;
```
Compilers should raise a syntax error here.

<!-- inline -->
## Ill-Formed Example B
```cpp
int a[0];
```
Zero-size arrays
[are not allowed][zero size],
but some compilers support them as an [extension][extension].

## Ill-Formed, No Diagnostic Required (IFNDR)
In some cases, the program is ill-formed,
but diagnostics are not required
(usually because it would take "heroic" compiler effort).
For example, having a template which can never be instantiated makes a
program [IFNDR][IFNDR].


[diagnostic message]: https://timsong-cpp.github.io/cppwp/n4950/defns.diagnostic
[extension]: https://timsong-cpp.github.io/cppwp/n4950/intro.compliance.general#8
[ill-formed]: https://timsong-cpp.github.io/cppwp/n4950/defns.ill.formed
[well-formed]: https://timsong-cpp.github.io/cppwp/n4950/defns.well.formed
[IFNDR]: https://timsong-cpp.github.io/cppwp/n4950/intro.compliance.general#2.2
[zero size]: https://timsong-cpp.github.io/cppwp/n4950/dcl.array#1.sentence-3
