# Overloading the Stream Insertion Operator

The stream insertion operator should insert an object into the stream
and return the stream to allow for chaining of the operator.

## Example
```cpp
struct point { int x, y; };

std::ostream& operator<<(std::ostream& out,
                         point p) {
    return out << p.x << ' ' << p.y;
}
```
Here, `p.x` and `p.y` will be inserted into the stream, separated by a space.
