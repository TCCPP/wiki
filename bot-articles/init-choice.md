# Which Form of Initialization Should I Choose?

You may have heard opinions like "always use list-initialization".
However, the preferred form of initialization is situational.

- **Direct-initialization** (`T{0}`, `T t(0)`, ...) may use `explicit` constructors and conversion functions, which we're sometimes trying to avoid, making **copy-initialization** (`T t = u;`) better in that case.
- **List-initialization** (`T{0}`, ...) may call constructors taking `std::initializer_list`, which we don't always want to do.
  Especially in templates, non-list-initialization may better.
- **Default-initialization** (`T t;`) may leave a variable uninitialized, whereas **value-initialization** (`T()`, `T t{};`, ...) gives it a value, and one isn't always better.

**Note:** These categories can overlap.
For example, `T x = {0}` is both list-initialization and copy-initialization.
[See cppreference](https://en.cppreference.com/w/cpp/language/initialization) for more details.

## :light_bulb: Conclusion

There is no one-size-fits-all approach.
Especially in templates, you need to choose initialization carefully.
All forms are slightly different.

Sometimes, the choice doesn't matter, like for `int x = 0;` vs. `int x{ }`.<br>
In that case, **prefer what is most readable**.
