# What Is `std::string_view` and Why Should I Use It?

**[std::string_view][sv]**
is a C++17 class which refers to a contiguous sequence of `char`s.
You can think of it as a `const char*` and the string length,
bundled together.

It is a superior replacement for passing `const char*` or `const std::string&` parameters
because it doesn't need null termination or dynamic memory allocation.

## Use Case - Replace "Old" Strings

```diff
-void print(const char* message);
-void print(const std::string& message);
+void print(std::string_view message);
```
**[std::string_view][sv]** has the same member functions as
**[std::string][s]**,
and **[std::string][s]** can be implicitly converted to it,
so **[std::string_view][sv]** is a drop-in replacement.

## When to use `std::string` vs. `std::string_view`

**[std::string][s]** is useful when you want to *own* a string,
not just read its contents.
**[std::string_view][sv]** is a *non-owning view*.
For example, **[std::string_view][sv]** cannot be used here:
```cpp
// or when passing an rvalue reference
void store(std::string s) { this.s = std::move(s); }
```

## See Also

<:stackoverflow:1074747016644661258>
[How exactly is std::string_view faster than const std::string&?](https://stackoverflow.com/q/40127965/5740428)
- `!wiki ownership`

[sv]: https://en.cppreference.com/w/cpp/string/basic_string_view
[s]: https://en.cppreference.com/w/cpp/string/basic_string
