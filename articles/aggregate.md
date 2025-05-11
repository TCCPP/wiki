# What is an Aggregate Type in C++?

An aggregate type is a class with no constructors (since C++20, not even explicitly defaulted ones).
Aggregates can be initialized with aggregate initialization using `{}`.

## Example
```cpp
struct rational {
    int numer = 0;
    int denom = 1;
};
rational half{1, 2};     // direct list init
rational two = {2, 1};   // copy list init
rational zero; // {0, 1},   default init
rational five{5}; // {5, 1}
rational third{.numer = 1, denom = 3}; // C++20
```

## Rules for Aggregate Initialization
In the initializer lists (such as `{1, 2}`):
- we can provide the value for each member explicitly
- or if none is provided, the default member initializer (e.g. `= 1`) is used
- or if none exists, the member is value-initialized (`0` for `int`)
- or if the list is empty, the whole object is value-initialized
- or if we use default init instead (see `zero`), it is default-initialized

The last example demonstrates designated initializers (since C++20).
