# What is Erroneous Behavior?

Erroneous behavior (EB) is well-defined behavior that the compiler
is recommended (but not required) to diagnose.
It is a new kind of behavior in C++26
which replaces some instances of undefined behavior.

## Example

```cpp
int x;          // x has erroneous value
assert(x == x); // holds, also erroneous behavior
```
`x` has *some* unspecified, erroneous value.
`x == x` has to be `true` for any value of `x`,
so the assertion never fails.
However, accessing the value of `x` is EB,
so the program could crash and the compiler could print out a message afterwards.

## See Also

<:stackoverflow:1074747016644661258>
[What is erroneous behavior? How is it different from undefined behavior?](https://stackoverflow.com/q/78238726/5740428)
