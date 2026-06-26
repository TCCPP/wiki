---
alias: ub
bot_article: |
  # Undefined Behavior

  Undefined behavior (UB) is behavior for which the C/C++ standard imposes no requirements.

  Typical causes are: reading uninitialized memory,
  performing out-of-bounds memory access,
  or using an object when it no longer exists.

  ## Why it Matters

  Since the standard does not restrict what could happen, the program may crash,
  continue execution, have different behaviors on different platforms.
  This can lead to strange bugs and security issues.
---

# Undefined Behavior

For the convinience of optimization, the C/C++ standard left out a few undefined cases known as _Undefined Behavior_
(UB). Undefined Behavior is behavior for which the C/C++ standard imposes no restrictions. <br/> In other words, the
program can crash, continue or have different behaviors on different platforms. None of which are guaranteed. <br/> Here
is an example of a UB:

```cpp
#include <iostream>

int main() {
    int a;
    // UB: uninitialized memory access
    if (a >= 0) { // [!code warning]
        std::cout << "non negative" << std::endl;
    } else {
        std::cout << "negative" << std::endl;
    }
    return 0;
}
```

Most commonly, uninitialized access results in what is known as indeterminate values. Those are values that are arbitrary and
unpredictable. This program outputs either `non negative` or `negative` and subsequent runs can be different.

::: warning

Because this is an undefined behavior, the behavior above is not guaranteed. It can print either strings or crash
entirely.

:::

## Why it Matters?

Compilers are not required to give warnings or errors for undefined behaviors and the presence of them in your code can
lead to non-portable behaviors, strange bugs and security vulnerabilities.

## Common UBs

- **Signed integer overflow**

  ```cpp
  int x = INT_MAX;
  // UB
  int y = x + 1; // [!code warning]
  ```

  ::: info

  Unsigned integer overflow is defined. `UINT_MAX + 1 == 0` is true.

  :::

- **Out-of-bound access**

  ```cpp
  int a[5] = {1,2,3,4,5};
  // UB
  int x = a[5]; // [!code warning]
  ```

- **Uninitialized memory access**

  ```cpp
  int x;
  // UB pre-C++26
  int y = x; // [!code warning]
  ```

  ::: info

  Since **C++26**: this is classified as _erroneous behavior_, not _undefined behavior_.

  :::

## See also

- [Undefined behavior C (cppreference)](https://en.cppreference.com/c/language/behavior)
- [Undefined behavior C++ (cppreference)](https://en.cppreference.com/cpp/language/ub)
