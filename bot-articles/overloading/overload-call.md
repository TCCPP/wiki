# Overloading the Function Call Operator

A type with a [call operator](https://en.cppreference.com/w/cpp/language/operators#Function_call_operator) is a
*[FunctionObject](https://en.cppreference.com/w/cpp/named_req/FunctionObject)*, and thus a
*[Callable](https://en.cppreference.com/w/cpp/named_req/Callable)* type.
The call operator can have any parameters and return type, and can be defined inside or outside a class.

Sometimes you need to define it yourself, like when providing a
*[Compare](https://en.cppreference.com/w/cpp/named_req/Compare)* to
**[std::set](https://en.cppreference.com/w/cpp/container/set)**, or
*[Hash](https://en.cppreference.com/w/cpp/named_req/Hash)* and
*[key eq. predicate](https://timsong-cpp.github.io/cppwp/n4868/unord.req.general#4)* to
**[std::unordered_map](https://en.cppreference.com/w/cpp/container/unordered_map)**:

## Example
```cpp
struct compare_abs {
    bool operator()(int x, int y) const {
        return std::abs(x) < std::abs(y);
    }
};
// ordered set containing {2, 3, -7}
std::set<int, compare_abs> s{-7, 2, 3, -2};
```

## Alternative: Closure Type as *Compare* (since C++20)
```cpp
using compare_abs = decltype([](int x, int y) {
    return std::abs(x) < std::abs(y);
});
std::set<int, compare_abs> s;
```
