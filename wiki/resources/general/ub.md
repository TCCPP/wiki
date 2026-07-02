---
alias: ub
bot_article: |
  # Undefined Behavior

  Undefined behavior (UB) is behavior for which the C/C++ standard imposes no requirements.

  Typical causes are: reading uninitialized memory,
  out-of-bounds memory access,
  or using an object when it no longer exists.

  ## Why it Matters

  Compilers are not required to give warnings or errors for undefined behaviors and having them in your code can lead to
  non-portable code, strange bugs and security vulnerabilities.
---

# Undefined Behavior

Undefined Behavior is behavior for which the C/C++ standard imposes no requirements. <br/> In other words, the program
can crash, continue or have different behaviors on different platforms. <br/> Here is an example of a UB:

```cpp
#include <iostream>

int main() {
    int a;
    // UB in C and pre-C++26: uninitialized memory access
    if (a >= 0) { // [!code warning]
        std::cout << "non negative" << std::endl;
    } else {
        std::cout << "negative" << std::endl;
    }
    return 0;
}
```

Uninitialized memory has what is called indeterminate values, values which are unspecified. The actual value of `a`
depends on the platform and the compiler.

## Why it Matters?

Compilers are not required to give warnings or errors for undefined behaviors and having them in your code can lead to
non-portable behaviors, strange bugs and security vulnerabilities.

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
