# Perfect Forwarding and Forwarding References

References of the form `T&&` are *[forwarding references][fr]* if `T` is a template parameter of the current function
template. These references have special deduction rules:
```cpp
template <class T>
void f(T&& r); // r is a forwarding reference

f(0);  // call with prvalue: T = int,  T&& = int&&
f(std::move(x));         // (same for xvalue)
int x; // call with lvalue:  T = int&, T&& = int&
f(x);                    // (reference collapsing)

// auto&& can also be a forwarding reference:
auto&& a = x; // decltype(a) = int&
```

[fr]: https://en.cppreference.com/w/cpp/language/reference#Forwarding_references

## Perfectly Forwarding Function Arguments With `std::forward`
No matter what `T` deduces to, the expression `r` is an *[lvalue][lvalue]* when used inside the function `f`.
**[std::forward][forward]** recovers the reference type:
```cpp
std::forward<T>(r) // yields int&& if T = int
std::forward<T>(r) // yields int&  if T = int&
```

[lvalue]: https://en.cppreference.com/w/cpp/language/value_category#lvalue
[forward]: https://en.cppreference.com/w/cpp/utility/forward

## See Also
<:stackoverflow:1074747016644661258>
*[Purpose of std::forward](https://stackoverflow.com/q/3582001/5740428)*<br>
<:stackoverflow:1074747016644661258>
[What does auto&& tell us?](https://stackoverflow.com/q/13230480/5740428)<br>
- [cppreference: Reference collapsing](https://en.cppreference.com/w/cpp/language/reference#Reference_collapsing)
- `!wiki value-categories`
