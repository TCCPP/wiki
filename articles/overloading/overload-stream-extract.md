# Overloading the Stream Extraction Operator

The stream extraction operator should assign the members of an object
by extracting them from the stream, which is then returned to allow for operator chaining.

## Example
```cpp
struct point { int x, y; };

std::istream& operator>>(std::istream& in,
                         point& p) {
    return in >> p.x >> p.y;
}
```
Here, `p.x` and `p.y` will be extracted from the input stream.
