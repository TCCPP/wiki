# Why Should Preprocessor Macros Be Avoided?

Macros work by simply replacing text,
making them difficult to use and possibly unsafe.
Almost always, C++ offers better alternatives such as function templates.
Two common macro issues are shown below.

<!-- inline -->
## :one: Unsanitized macros

```cpp
#define mul(a, b) a * b
mul(2 + 3, 4)
// Expands to:
// 2 + 3 * 5
```
Because of the lack of `()` in `mul`,
the order of addition/multiplication is unintentionally reversed.

<!-- inline -->
## :two: Multiple evaluations

```cpp
#define max(a, b) \
  (a > b ? a : b)
int x =
  max(read_int(file), 0);
```
If `read_int(file) > 0` is `true`,
`read_int(file)` is called a second time,
which is problematic if the file contains only one `int`.
