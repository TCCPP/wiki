---
bot_article: |
  # Overloading Stream Operators

  The `<<` and `>>` operators can be overloaded to allow custom types to be used with `std::cout`, `std::cin`, and other
  streams.

  ## Stream Insertion (`<<`)

  ```cpp
  std::ostream& operator<<(
    std::ostream& out, const point& p
  ) {
      return out << p.x << ' ' << p.y;
  }
  ```

  ## Stream Extraction (`>>`)

  ```cpp
  std::istream& operator>>(std::istream& in, point& p) {
      return in >> p.x >> p.y;
  }
  ```
  Both operators return the stream by reference to allow chaining like `std::cout << a << b`.
---

# Overloading Stream Operators

The stream insertion (`<<`) and stream extraction (`>>`) operators can be overloaded to allow custom types to work with
`std::cout`, `std::cin`, file streams, string streams, and any other C++ stream.

## The Basic Pattern

Here's a `point` type with both operators:

```cpp
struct point {
    int x;
    int y;
};

std::ostream& operator<<(std::ostream& out, const point& p) {
    return out << p.x << ' ' << p.y;
}

std::istream& operator>>(std::istream& in, point& p) {
    return in >> p.x >> p.y;
}
```

Now `point` works naturally with any stream:

```cpp
point p{3, 4};
std::cout << "Location: " << p << std::endl;  // Output: Location: 3 4

point q;
std::cin >> q;  // Reads two integers into q.x and q.y
```

## Understanding the Signature

Both operators follow a similar structure:

```cpp
std::ostream& operator<<(std::ostream& out, const point& p);
std::istream& operator>>(std::istream& in, point& p);
```

**The stream is taken by reference** because I/O operations modify internal stream state (position, error flags, etc.).

**The object parameter** differs: insertion takes `const&` since we only read from the object, while extraction takes a
non-const reference since we write into it.

**Returning the stream enables chaining.** When you write `std::cout << a << b << c`, this parses as
`((std::cout << a) << b) << c`. Each call returns the stream for the next operator to use.

## Working with Private Members

Stream operators must be non-member functions because the left operand is the stream, not your type. If your class has
private members, declare the operators as friends:

```cpp
class point {
    int x;
    int y;
public:
    point(int x, int y) : x(x), y(y) {}

    friend std::ostream& operator<<(std::ostream&, const point&);
    friend std::istream& operator>>(std::istream&, point&);
};

std::ostream& operator<<(std::ostream& out, const point& p) {
    return out << p.x << ' ' << p.y;
}

std::istream& operator>>(std::istream& in, point& p) {
    return in >> p.x >> p.y;
}
```

You can also define friend functions inline within the class. This is common for short operators:

```cpp
class point {
    int x;
    int y;
public:
    point(int x, int y) : x(x), y(y) {}

    friend std::ostream& operator<<(std::ostream& out, const point& p) {
        return out << p.x << ' ' << p.y;
    }

    friend std::istream& operator>>(std::istream& in, point& p) {
        return in >> p.x >> p.y;
    }
};
```

## Handling Input Errors

The stream's error state is set automatically when underlying reads fail. For custom validation, set the fail bit
explicitly:

```cpp
std::istream& operator>>(std::istream& in, point& p) {
    int x, y;
    if (in >> x >> y) {
        if (x >= 0 && y >= 0) {  // Must be in first quadrant
            p.x = x;
            p.y = y;
        } else {
            in.setstate(std::ios::failbit);
        }
    }
    return in;
}
```

This reads into temporaries first, validates, then modifies the target only if validation passes.

## Working with Different Stream Types

Because the operators use `std::ostream&` and `std::istream&` (the base classes), they work with any derived stream:

```cpp
point p{3, 4};

std::cout << p;                        // Console

std::ofstream file("points.txt");
file << p;                             // File

std::ostringstream oss;
oss << p;
std::string s = oss.str();             // String stream: "3 4"
```

## Best Practices

- **Keep output simple.** Produce a representation suitable for common use cases.

- **Match input and output.** Design extraction to parse what insertion produces, enabling round-tripping.

- **Follow whitespace conventions.** The default `>>` skips leading whitespace; yours should too.

- **Don't print trailing newlines.** Let the caller decide.

## See Also

- [std::ostream](https://en.cppreference.com/w/cpp/io/basic_ostream)
- [std::istream](https://en.cppreference.com/w/cpp/io/basic_istream)
- [Operator Overloading](https://en.cppreference.com/w/cpp/language/operators)
