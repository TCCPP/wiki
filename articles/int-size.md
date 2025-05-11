# What Are the Sizes of Integers in C and C++?

```cpp
Integer   │ signed min │ signed max │ unsigned max
══════════╪════════════╪════════════╪═════════════
char      │  ≤  -2^7 * │ ≥  2^7 - 1 │  ≥  2^8 - 1
short     │  ≤ -2^15 * │ ≥ 2^15 - 1 │  ≥ 2^16 - 1
int       │  ≤ -2^15 * │ ≥ 2^15 - 1 │  ≥ 2^16 - 1
long      │  ≤ -2^31 * │ ≥ 2^31 - 1 │  ≥ 2^32 - 1
long long │  ≤ -2^63 * │ ≥ 2^63 - 1 │  ≥ 2^64 - 1
```
`*`: *only since C++20. Before C++20, add `+1`.*

<!-- inline -->
## :interrobang: Are Bytes Not Always 8 Bits?
A *[byte](https://eel.is/c++draft/intro.memory#def:byte)*, which has the same size as `char` is the
smallest addressable unit of memory.

It must be 8 bits at least, and is exactly 8 bits on
most platforms, but not on all.

<!-- inline -->
## :interrobang: Are `short` and `int` the Same Size?
They have the same minimum range, but `int` will usually
be 32-bit on 64-bit platforms, and `short` will be 16-bit.

It's more common to see `long` having the same size as `int`
or `long long` on 64-bit platforms.

## Querying the Size
- the **[sizeof](https://en.cppreference.com/w/cpp/language/sizeof)** operator yields number of bytes; `sizeof(char) == 1`
- **[std::numeric_limits::digits](https://en.cppreference.com/w/cpp/types/numeric_limits/digits)** yields the number of bits; `digits<int> >= 15`
