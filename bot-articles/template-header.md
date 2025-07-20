# Why can templates only be implemented in the header file?

When a template is used, the compiler instantiates it by substituting template arguments in the function, class, struct, etc. Because the compiler must have the definition of the function, class, or struct available at the point of instantiation it doesn't work to split templates between C++ header files and .cpp files as is traditionally done for functions, classes, and structs.

The compiler needs to have access to the implementation of the class methods or the function to instantiate them with the template argument. If these implementations were not in the header, they wouldn't be accessible, and therefore the compiler wouldn't be able to instantiate the template.

```cpp
// foo.hpp
template<typename T>
T add(T a, T b);
// foo.cpp
#include "foo.hpp"
template<typename T>
T add(T a, T b) {
    return a + b;
}
// bar.cpp
#include "foo.hpp"
int bar(int a, int b) {
    // references add<int> but the compiler can't instantiate this since it doesn't have the definition
    return add(a, b);
}
```

## Alternative solution

Another solution is to keep the implementation separated, and explicitly instantiate all the template instances you'll need.

