---
bot_article: |
  # Specializing std::formatter

  `std::formatter` can be specialized to allow custom types to work with `std::format`, `std::print`, and related
  functions.

  ## Basic Pattern

  ```cpp
  template<>
  struct std::formatter<point> {
      constexpr auto parse(auto& ctx) {
          return ctx.begin();
      }
      auto format(const point& p, auto& ctx) const {
          return std::format_to(
              ctx.out(), "({}, {})", p.x, p.y
          );
      }
  };
  ```
  The `parse` method handles format specifiers. The `format` method outputs the formatted result.
---

# Specializing std::formatter

The `std::formatter` class template can be specialized to allow your custom types to work with `std::format`,
`std::print` (C++23), and related formatting functions. This is the modern alternative to overloading stream operators
for output.

## The Basic Pattern

Here's a `point` type with a formatter specialization:

```cpp
#include <format>

struct point {
    int x;
    int y;
};

template<>
struct std::formatter<point> {
    constexpr auto parse(std::format_parse_context& ctx) {
        return ctx.begin();
    }

    auto format(const point& p, std::format_context& ctx) const {
        return std::format_to(ctx.out(), "({}, {})", p.x, p.y);
    }
};
```

Now `point` works with any formatting function:

```cpp
point p{3, 4};
std::string s = std::format("Location: {}", p);  // "Location: (3, 4)"
std::print("Point: {}\n", p);                    // C++23: prints "Point: (3, 4)"
```

Every specialization needs these two methods. The `parse` method receives a context where `ctx.begin()` points to the
first character after the colon (or directly to `}` if there's no colon) and must return an iterator to the closing `}`.
The `format` method writes to `ctx.out()` and returns the updated output iterator.

## Custom Format Specifiers

The basic pattern ignores format specifiers. To support them, parse the specifier in `parse()` and use it in `format()`.
Here's a formatter that supports a `c` specifier for compact output:

```cpp
template<>
struct std::formatter<point> {
    bool compact = false;

    constexpr auto parse(std::format_parse_context& ctx) {
        auto it = ctx.begin();
        if (it != ctx.end() && *it == 'c') {
            compact = true;
            ++it;
        }
        return it;
    }

    auto format(const point& p, std::format_context& ctx) const {
        if (compact) {
            return std::format_to(ctx.out(), "{},{}", p.x, p.y);
        } else {
            return std::format_to(ctx.out(), "({}, {})", p.x, p.y);
        }
    }
};
```

```cpp
point p{3, 4};
std::format("{}", p);   // "(3, 4)"
std::format("{:c}", p); // "3,4"
```

## Reusing Existing Formatters

Rather than implementing parsing from scratch, you can inherit from an existing formatter. This gives your type the same
format specifiers as a built-in type for free:

```cpp
template<>
struct std::formatter<point> : std::formatter<std::string> {
    auto format(const point& p, std::format_context& ctx) const {
        return std::formatter<std::string>::format(
            std::format("({}, {})", p.x, p.y), ctx
        );
    }
};
```

Now you can use string format specifiers like width and fill:

```cpp
std::format("{:>20}", p);  // "              (3, 4)"
```

## See Also

- [std::formatter](https://en.cppreference.com/w/cpp/utility/format/formatter)
- [std::format](https://en.cppreference.com/w/cpp/utility/format/format)
- [std::format_to](https://en.cppreference.com/w/cpp/utility/format/format_to)
- [Overloading Stream Operators](/resources/faq/stream-operators)
