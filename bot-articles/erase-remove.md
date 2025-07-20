# Erase-Remove Idiom

Elements from **[std::string][string]** and **[std::vector][vector]** can be removed using the erase-remove idiom.

[string]: https://en.cppreference.com/w/cpp/string/basic_string
[vector]: https://en.cppreference.com/w/cpp/container/vector

## Example: Removing Every Zero From A Vector
```cpp
std::vector<int> v{ 0, 2, 3, 0, 5, 7, 0 };
v.erase( std::remove(v.begin(), v.end(), 0),
        v.end() );
// v is now {2, 3, 5, 7}
```
## Explanation
**[std::remove](https://en.cppreference.com/w/cpp/algorithm/remove)**
accepts iterators to the range, and the element to be removed.
It will move all remaining elements to the beginning.
In our example, the result is: `{2, 3, 5, 7, ?, ?, ?}`, where `?` represents an unspecified state.
The result is an iterator to the first "removed" element, i.e. the first `?`.

**[std::vector::erase](https://en.cppreference.com/w/cpp/container/vector/erase)**
then reduces the size of the vector by erasing all "garbage" elements at the end.

## Alternatives Since C++20
There now exists a **[std::erase](https://en.cppreference.com/w/cpp/container/vector/erase2)**
function which does both steps in one function.
However, the idiom can be applied to other algorithms like
**[std::unique](https://en.cppreference.com/w/cpp/algorithm/unique)**, so it is still useful.
