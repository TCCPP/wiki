# Why Should You Avoid Unsigned Integers?

Unsigned integers should be avoided due to unintentional wraparound
and surprising behavior for signed/unsigned conversion and comparison:

```cpp
void foo(unsigned val) { std::print("{}", val); }
int main() { foo(-1); } // prints 4294967295
```
**Bug:** `-1` is implicitly converted to a huge positive integer.

```cpp
unsigned deficit = target_size - size();
if (deficit > 0) { insert_amount(deficit); }
else             { remove_amount(deficit); }
```
**Bug:** Subtraction wraps around, so `deficit`
is never negative.

```cpp
unsigned i = /* ... */;
if (i > -1) { /* ... */ }
```
**Bug:** The if statement is never entered because `-1` is
converted to
[`UINT_MAX`](https://en.cppreference.com/w/c/types/limits).

<!-- inline -->
## Recommendation

Use unsigned integers only for bit manipulation or serialization;
prefer signed integers otherwise,
and avoid mixing signed/unsinged above all else.

Compiler warnings can be used to detect the issues above
([`-Wsign-conversion`](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html#index-Wsign-conversion),
[`-Wsign-compare`](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html#index-Wsign-compare), etc.),
but they detect countless harmless cases.

<!-- inline -->
## See Also

- [CppCoreGuidelines ES.106][guide] *Don’t try to avoid negative values by using unsigned*
- [Bjarne Stroustrup - P1428][p1428] *Subscripts and sizes should be signed*
- [CppCon 2016: Jon Kalb][cppcon] *`unsigned`: A Guideline for Better Code*

[guide]: http://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Res-nonnegative
[p1428]: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2019/p1428r0.pdf
[cppcon]: https://www.youtube.com/watch?v=wvtFGa6XJDU
