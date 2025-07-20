# What Is Sequencing, and What Are Sequence Points?

Some operations in C++ are *sequenced* before others, meaning that they happen first.
Unless otherwise stated, operations are *unsequenced*.

<!-- inline -->
## Example - Short Circuiting
```cpp
if(p != nullptr && p->test)
    return p;
```
This code is safe because the left side of `&&` is sequenced before the right.
Also, `p->test` won't happen if `p == nullptr`.

<!-- inline -->
## Example - Multi-Assignments
```cpp
int x, y;
x = y = 0;
```
This code is safe because `y = 0` is sequenced before `x = y`.
Otherwise, we would access an indeterminate value `y`, which is UB.

## Sequence Points
*Sequence point* is an old term from C++98.
It's a point in the program at which all side effects are sequenced before the
rest of the code; for example:
```cpp
x = 0; // End of statement is a sequence point.
x = 1; // This statement must happen after the first.
```

<!-- inline -->
## :warning: Undefined Behavior Potential
When two operations are unsequenced, and this can change the result, it's UB:
```cpp
int i = 0;
int r = ++i + i;
// r == 1, or r == 2 ?!
```

<!-- inline -->
## See Also
<:stackoverflow:1074747016644661258>
[Undefined behavior and sequence points](https://stackoverflow.com/q/4176328/5740428)<br>
<:stackoverflow:1074747016644661258>
[What are the evaluation order guarantees introduced by C++17?](https://stackoverflow.com/q/38501587/5740428)
- [cppreference: Order of evaluation](https://en.cppreference.com/w/cpp/language/eval_order)
