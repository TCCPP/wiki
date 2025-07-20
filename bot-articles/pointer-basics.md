# Pointer Basics

A pointer is a type that stores the address of an object.
For example, `int*` is a pointer to an int, and will store the address of an `int`.
- the address-of operator `&` creates a pointer to an object
- the indirection operator `*` accesses the pointed-to object

Using these operators is called *referencing* and *dereferencing*, respectively.
```cpp
int x = 50;
int* p = &x; // p ==   &x, *p == 50, x == 50
*p = 10;     // p ==   &x, *p == 10, x == 10
p = NULL;    // p == NULL, *p == ??, x == 10
```
Note: use **[nullptr](https://en.cppreference.com/w/cpp/language/nullptr)** instead of
**[NULL](https://en.cppreference.com/w/c/types/NULL)** in C++

## See Also
- [learncpp.com: Introduction to pointers](https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/)
- [cppreference.com: Pointer declaration](https://en.cppreference.com/w/cpp/language/pointer)
- [stackoverflow.com: What exactly is nullptr?](https://stackoverflow.com/q/1282295/5740428)
- `!howto pointer-arithmetic`
