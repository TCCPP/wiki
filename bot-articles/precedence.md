# C and C++ Operator Precedence

⬅ means *right-to-left associative*,
everything else is left-to-right associative.

1. [Scope resolution](https://en.cppreference.com/w/cpp/language/identifiers#Qualified_identifiers) `::`
2. Postfix unary `a++`, `a()`, `a.b`, `a[]`, ...
3. ⬅ Prefix unary `++a`, `*a`, `(T)`, `sizeof`, `co_await`, `new`, ...
4. [Pointer-to-member](https://en.cppreference.com/w/cpp/language/operator_member_access#Built-in_pointer-to-member_access_operators) `.*`, `->*`
5. [Multiplicative](https://en.cppreference.com/w/cpp/language/operator_arithmetic#Multiplicative_operators) `*`, `/`, `%`
6. [Additive](https://en.cppreference.com/w/cpp/language/operator_arithmetic#Additive_operators) `+`, `-`
7. [Bitwise shift](https://en.cppreference.com/w/cpp/language/operator_arithmetic#Bitwise_shift_operators) `<<`, `>>`
8. [Three-way comparison](https://en.cppreference.com/w/cpp/language/operator_comparison#Three-way_comparison) `<=>`
9. [Relational](https://en.cppreference.com/w/cpp/language/operator_comparison) `<`, `<=`, `>`, `>=`
10. [Equality](https://en.cppreference.com/w/cpp/language/operator_comparison) `==`, `!=`
11. [Bitwise AND](https://en.cppreference.com/w/cpp/language/operator_arithmetic#Bitwise_logic_operators) `&`
12. [Bitwise XOR](https://en.cppreference.com/w/cpp/language/operator_arithmetic#Bitwise_logic_operators) `^`
13. [Bitwise OR](https://en.cppreference.com/w/cpp/language/operator_arithmetic#Bitwise_logic_operators) `|`
14.  [Logical AND](https://en.cppreference.com/w/cpp/language/operator_logical) `&&`
15. [Logical OR](https://en.cppreference.com/w/cpp/language/operator_logical) `||`
16. ⬅ Others, [assignment](https://en.cppreference.com/w/cpp/language/operator_assignment#Builtin_direct_assignment) `?:`, `throw`, `co_yield`, `=`, `+=`, ...
17. [Comma](https://en.cppreference.com/w/cpp/language/operator_other#Built-in_comma_operator) `,`

## See Also
- [Order of evaluation](https://en.cppreference.com/w/cpp/language/eval_order)
- [C Operator Precedence](https://en.cppreference.com/w/c/language/operator_precedence)
- [Wikipedia: Operator associativity](https://en.wikipedia.org/wiki/Operator_associativity)
