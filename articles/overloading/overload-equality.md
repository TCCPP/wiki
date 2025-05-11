# Overloading the Equality Comparison Operator

The equality comparison operator returns `true` if one object is equal to another.
Defining this operator makes a type *[EqualityComparable][1]*.

[1]: https://en.cppreference.com/w/cpp/named_req/EqualityComparable

## Example
```cpp
struct point {
    int x, y;
    // Note: You may want to use `const point&`
    friend bool operator==(point lhs, point rhs) {
        return lhs.x == rhs.x and lhs.y == rhs.y;
    }
    friend bool operator!=(point lhs, point rhs) {
        return !(lhs == rhs);
    }
};
```

## Since C++20
```cpp
struct point {
    int x, y;
    // Explicitly defaulted, != will use == automatically
    friend bool operator==(point, point) = default;
};
```

## See Also

- [Comparison Operators](https://en.cppreference.com/w/cpp/language/operator_comparison)
