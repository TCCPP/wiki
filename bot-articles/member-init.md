# What Is a "Member Initalizer List" And Why Should I Use It?

A [member initializer list][cppref] in a constructor initializes the data members
of a class:
```cpp
struct S {
  int x, y;
  // initializes data member 'x' to parameter 'x',
  // and initializes data member 'y' to zero
  S(int x) : x(x), y(0) { }
};
```
:warning: Initialization happens in the order of data members;
the member initializer list `y(0), x(x)` would be equivalent but misleading.

A common mistake is to leave data members uninitialized and then assign them
in the constructor.
For trivial types like `int`, this works, but it can lead to bad performance
for larger types, or result in an error:
```cpp
struct C {
  const int z; // error: uninitialized const member
  C(int z) { this->z = z; } // error: assigning to const
};
```

## See Also
<:tccpp:865354975629279232>
[Learn more about member initializer lists](https://64.github.io/cpp-faq/member-initializer-list/)

[cppref]: https://en.cppreference.com/w/cpp/language/constructor#Member_initializer_list
