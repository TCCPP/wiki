<!-- alias vla -->

# What Is a VLA, and Why Is It "Bad"?

A [Variable Length Array (VLA)](https://en.cppreference.com/w/c/language/array#Variable-length_arrays)
is an array where the size is not constant and depends on a variable.

## Example
```cpp
int size = rand();
int vla[size]; // VLA of type int[size]
int not_vla[10]; // regular array of type int[10]
constexpr int size = 10;
int arr[size]; // also not a VLA, of type int[10]
```

## Why Are VLAs "Bad"?
VLAs have poor compiler support and can lead to unsafe code.
The core issue with VLAs is that the compiler doesn't know the size of the stack frame.
Without warning flags like `-Wvla`, it can be easy to create a VLA by accident, even in C++ with some compilers.

<!-- inline -->
## Compiler Support
:white_check_mark: available since C99<br>
:no_entry: not available in C++ at all<br>
:no_entry: was never supported by MSVC<br>
:warning: optional feature since C11<br>
:warning: supported as non-standard extension by GCC and clang

<!-- inline -->
## See Also
<:stackoverflow:1074747016644661258>
[What technical disadvantages do C99-style VLAs have?](https://stackoverflow.com/q/12407754/5740428)<br>
<:stackoverflow:1074747016644661258>
[What's the point of VLA anyway?](https://stackoverflow.com/q/22530363/5740428)
