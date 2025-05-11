# What Is the Conditional Operator?

The [conditional operator][1], (colloquially called _ternary operator_) of the form `Condition ? T : F` evaluates `T` if
the `Condition` is true, otherwise `F`.

The result of the whole expression is either the expression `T` or `F`.
This also means that `T` and `F` must have compatible types.

[1]: https://en.cppreference.com/w/cpp/language/operator_other#Conditional_operator

## Example

A classic use case for the conditional operator is the `min` function.
```cpp
int min(int a, int b) {
    return a < b ? a : b;
}
```
This function chooses `a` if `a` is lower than `b`, or `b` otherwise.

<!-- inline -->
## Benefits over If-Statements
- more concise code
- makes it easier to be `const`-correct

<!-- inline -->
## Downsides
- can be hard to read, especially when nested and formatted poorly
