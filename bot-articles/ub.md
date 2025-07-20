<!-- alias ub -->

# Undefined Behavior

Undefined behavior (UB) is behavior for which C++ imposes no requirements.
This could mean that your code crashes,
isn't executed when it should be,
or does other unexpected things.

Typical causes are: reading uninitialized memory,
performing out-of-bounds memory access,
or using an object when it no longer exists.

<!-- inline -->
## Example: Indeterminate Value
```cpp
int i; // uninitialized
while(i < 10) {
    printf("%d\n", i++);
}
```
-# Note: Since C++26,
this code has erroneous behavior, not undefined behavior.

<!-- inline -->
## Example: Out-of-Bounds Access
```cpp
int arr[4];
for(int i = 0; i < 8; i++) {
    arr[i] = 0;
}
```

## Why it Matters

Compilers often do not give warnings or errors about UB,
and its existence in your code can cause surprising,
unpredictable, and buggy behavior,
which may even result in security vulnerabilities.

## See Also

- [cppreference: Undefined Behavior](https://en.cppreference.com/w/cpp/language/ub)
- [What is Undefined Behavior?](https://64.github.io/cpp-faq/undefined-behaviour/)
