# Value Categories

All expressions since C++11 have two properties, which characterize its value category:<br>
:wastebasket: *can be moved from*<br>
:id: *has identity*

Three valid combinations exist:
- **[lvalue](https://en.cppreference.com/w/cpp/language/value_category#lvalue)** "left-hand value"
- **[prvalue](https://en.cppreference.com/w/cpp/language/value_category#prvalue)** "pure rvalue"
- **[xvalue](https://en.cppreference.com/w/cpp/language/value_category#xvalue)** "eXpiring value"

<!-- inline -->
## lvalue
:id: has identity
```cpp
std::cin
(a = b)
"awoo"
```

<!-- inline -->
## prvalue
:wastebasket: is movable
```cpp
42
a && b
[]{} // lambda
```

<!-- inline -->
## xvalue
:id::wastebasket: has id., movable
```cpp
std::move(x)
rvalue_arr[n]
rvalue.x
```

## Mixed Categories
Based on these three, there are also two mixed categories:
- :id: **[glvalue](https://en.cppreference.com/w/cpp/language/value_category#glvalue)** "generalized lvalue" (lvalue or xvalue)
- :wastebasket: **[rvalue](https://en.cppreference.com/w/cpp/language/value_category#rvalue)** "right-hand value" (prvalue or xvalue)

## How These Categories Disallow Expressions
`24 = 3;` is ill-formed, because `24` is a prvalue, not an lvalue,
and can thus not appear on the left-hand side of an assignment.

`int y; int &&x = y;` is ill-formed, because `y` is an lvalue, not an rvalue,
and thus rvalue references can not bind to it.

## See Also
- [cppreference: Value categories](https://en.cppreference.com/w/cpp/language/value_category)
- [cppreference: Reference declaration](https://en.cppreference.com/w/cpp/language/reference)<br>
<:stackoverflow:1074747016644661258>
[What is move semantics?](https://stackoverflow.com/q/3106110/5740428)
