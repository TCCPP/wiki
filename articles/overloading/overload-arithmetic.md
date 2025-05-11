# Overloading Arithmetic Operators

Arithmetic operators like `+` perform an arithmetic operation without modifying their operands,
and return the result by value.

## Example
```cpp
struct point {
    int x, y;
    // implementation as member function
    point operator+(point other) const {
        return {x + other.x, y + other.y};
    }
};
// better: free function (can be hidden friend)
point operator-(point a, point b) {
    return {a.x - b.x, a.y - b.y};
}
// implement using *= (if it exists)
point operator*(point a, point b) {
    return a *= b;
}
```
Note: for large types, pass as `const&` and not by value
