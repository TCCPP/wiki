# What Is `std::array` And Why Should I Use It?

C-style arrays have important shortcomings:<br/>

:no_entry: cannot be returned from functions<br>
:no_entry: cannot be assigned with `=`<br>
:no_entry: cannot be compared with `==`, `<` etc. (it'd be pointer comparison)<br>
:no_entry: can only be initialized via `""`, `{}`, or *[default initialization][1]*<br>
:warning: might implicitly [decay to pointers][2]; C arrays are not passed by value to functions<br>
:warning: might be [variable-length arrays][3] (VLAs), if the developer makes a mistake

[1]: https://en.cppreference.com/w/cpp/language/default_initialization
[2]: https://64.github.io/cpp-faq/decay/
[3]: https://en.wikipedia.org/wiki/Variable-length_array

**[std::array](https://en.cppreference.com/w/cpp/container/array)** is a standard library container and
*[aggregate type](https://en.cppreference.com/w/cpp/language/aggregate_initialization)*
which solves these problems.
Usually, it's implemented along the lines of:
```cpp
template <typename T, size_t N>
struct array {
    T content[N]; // and other members ...
};
```
## Example Usage
```cpp
int arr[] = { 1, 2, 3 };              // turns into ...
std::array<int, 3> arr = { 1, 2, 3 }; // or ...
std::array arr = { 1, 2, 3 };         // (CTAD, since C++17)
```

## See Also
- [CppCoreGuidelines: Use `std::array` [...] for arrays on the stack](http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Res-stack)<br>
<:stackoverflow:1074747016644661258>
[std::array vs array performance](https://stackoverflow.com/q/30263303/5740428)
