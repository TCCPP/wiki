# Special Member Functions in C++
![](https://cdn.discordapp.com/attachments/861906541823918101/877150143089098792/b2VBV.png)

Special member functions in C++, such as constructors must be handled carefully to manage resources of a class.
The C++ community has agreed on three guidelines:

<!-- inline -->
## Rule of Zero
Only [default](https://en.cppreference.com/w/cpp/language/default_constructor) or normal constructors.
Everything managed automatically.

<!-- inline -->
## Rule of Three
- [copy constructor](https://en.cppreference.com/w/cpp/language/copy_constructor)
- [copy assignment](https://en.cppreference.com/w/cpp/language/copy_assignment)
- [destructor](https://en.cppreference.com/w/cpp/language/destructor)

<!-- inline -->
## Rule of Five
- [copy constructor](https://en.cppreference.com/w/cpp/language/copy_constructor)
- [move constructor](https://en.cppreference.com/w/cpp/language/move_constructor)
- [copy assignment](https://en.cppreference.com/w/cpp/language/copy_assignment)
- [move assignment](https://en.cppreference.com/w/cpp/language/move_assignment)
- [destructor](https://en.cppreference.com/w/cpp/language/destructor)

---
Red cells in the image are deprecated behavior
