# What Is the Difference Between class and struct?

The keywords
**[class][class]** and **[struct][struct]** both declare a so-called *[class type][classtype]*. The declared class will
have different properties, such as default [member access][access], depending on whether `class` or `struct` was used.

[class]: https://en.cppreference.com/w/cpp/keyword/class
[struct]: https://en.cppreference.com/w/cpp/keyword/struct
[classtype]: https://en.cppreference.com/w/cpp/language/class
[access]: https://en.cppreference.com/w/cpp/language/access

<!-- inline -->
## `class`
- members `private` by default
- `private` [inheritance](https://en.cppreference.com/w/cpp/language/derived_class) from base class by default
- incompatible with C
- typically used for larger classes

<!-- inline -->
## `struct`
- members `public` by default
- `public` [inheritance](https://en.cppreference.com/w/cpp/language/derived_class) from base class by default
- compatible with C
- typically used for [aggregates](https://en.cppreference.com/w/cpp/language/aggregate_initialization),
[traits](https://en.cppreference.com/w/cpp/header/type_traits)
