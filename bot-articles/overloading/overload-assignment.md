# Overloading the Assignment Operator

The assignment operator should assign one object to the value of another.
The assigned object should be returned by reference.
It must be defined as a member function.

## Example
```cpp
struct point {
    int x, y;
    // copy assignment, user-defined
    point& operator=(const point& other) {
        this->x = other.x;
        this->y = other.y;
        return *this;
    }
    // move assignment, explicitly defaulted
    point& operator=(point&&) = default;
};
```
Note: the copy assignment operator can accept `other` by value too.

## See Also

- [Copy Assignment Operator](https://en.cppreference.com/w/cpp/language/copy_assignment)
- [Move Assignment Operator](https://en.cppreference.com/w/cpp/language/move_assignment)
