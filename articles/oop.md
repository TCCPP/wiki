# Is C++ an Object-Oriented Language?

C++ supports multiple
[programming paradigms][para],
not just [Object-Oriented Programming][oop] (OOP).
However, features of OOP are strongly supported by C++:
- *objects*, defined and created via classes and constructors
- *encapsulation*, through `private`/`protected` access specifiers
- *dynamic dispatch*, through `virtual` member functions
- *inheritance* and *polymorphism* for classes

## :question: Is C++ Slow Because of Object-Oriented Features?

In C++, you "only pay for what you use" ([zero-overhead principle][zero]).
Some features
are "zero-cost" (e.g. `public`/`private`),
but some have additional run-time cost (e.g. `virtual` member functions).
However, you can avoid them and write C++ code which is
mostly [procedural][proc] (similar to C),
mostly [functional][fun],
etc.

[para]: https://en.wikipedia.org/wiki/Programming_paradigm
[oop]: https://en.wikipedia.org/wiki/Object-oriented_programming
[zero]: https://en.cppreference.com/w/cpp/language/Zero-overhead_principle
[proc]: https://en.wikipedia.org/wiki/Procedural_programming
[fun]: https://en.wikipedia.org/wiki/Functional_programming
