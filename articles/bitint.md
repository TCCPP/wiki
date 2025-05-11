# _BitInt and Extended Integers in C and C++

**[_BitInt(N)][1]** is an N-bit integer available since [C23](https://en.cppreference.com/w/c/23), but may not be
available in C++. Major compilers have limited support for extended integers.

[1]: https://en.cppreference.com/w/c/language/arithmetic_types#Integer_types

<!-- inline -->
## GCC
:white_check_mark: **[__int128](https://gcc.gnu.org/onlinedocs/gcc/_005f_005fint128.html)**<br>
:warning: **[_BitInt(N)](https://gcc.gnu.org/gcc-14/changes.html#c)** (only in C, and only supported on some targets)

<!-- inline -->
## Clang
:white_check_mark: `__int128`<br>
:white_check_mark: **[_BitInt(N)](https://clang.llvm.org/docs/LanguageExtensions.html#extended-integer-types)** (C++ too)<br>
:warning: `_ExtInt(N)` (deprecated)

<!-- inline -->
## MSVC
:no_entry: *[No support yet.](https://en.cppreference.com/w/c/compiler_support/23)*


## 3rd-Party Solutions
- [Boost.Multiprecision](https://www.boost.org/doc/libs/1_82_0/libs/multiprecision/doc/html/index.html) provides **[boost::cpp_int](https://www.boost.org/doc/libs/1_82_0/libs/multiprecision/doc/html/boost_multiprecision/tut/ints/cpp_int.html)** and other types. (C++)
- [GMP](https://en.wikipedia.org/wiki/GNU_Multiple_Precision_Arithmetic_Library) provides **[mpz_t](https://gmplib.org/manual/Integer-Functions)** and other types. (C and C++)
- [Wikipedia: List of arbitrary-precision arithmetic software](https://en.wikipedia.org/wiki/List_of_arbitrary-precision_arithmetic_software)
