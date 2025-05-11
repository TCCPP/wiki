# Global Variables in C++

Global variables should generally be avoided, because they are available *everywhere*.
It is difficult to understand where they are modified and used.
However, if you really need them:

## Small Constants
```cpp
// header, or source (add static)
// if in header, make it inline (since C++17)
constexpr int x = 0;
```
Use `const` for [non-literal types](https://en.cppreference.com/w/cpp/named_req/LiteralType).

<!-- inline -->
## Extern (Header File)
```cpp
// header
extern int x;
```

<!-- inline -->
## Extern (Source File)
```cpp
// source
int x = 0;
```

## Inline (since C++17)
```cpp
// header only, use static in source
inline int x = 0;
```

<!-- inline -->
## General Advice
Use `static` or an [unnamed namespace](https://en.cppreference.com/w/cpp/language/namespace#Unnamed_namespaces) for any
globals that are TU-local (used only in one cpp file).

<!-- inline -->
## :warning: Common Mistake
If you put `int x = 0;` into a header, you may get linker errors.
`x` is `extern` by default, so the linker would see multiple conflicting definitions when the header is included in
multiple source files.

## See also
- [Storage class specifiers](https://en.cppreference.com/w/cpp/language/storage_duration)
