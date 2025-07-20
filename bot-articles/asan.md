<!-- alias asan -->

# Address Sanitizer

Memory errors in C and C++ are easy to make and they can be very hard to debug because they can **manifest far from
their source**. Address sanitizer is a runtime checker that identifies memory errors __at their source__ and makes
debugging much simpler.
Address sanitizer is available for gcc/clang on linux and msvc on windows. To use it simply pass `-fsanitize=address`
to the compiler.

> Note: Make sure to turn on debug symbols with `-g` for gcc/clang and `-Zi` for msvc.

<:ce:1211139919884582943> [Example](https://godbolt.org/z/rYsnP8WTG)

## How to read sanitizer output

The first few lines tell you the problem, heap-use-after-free, due to performing a `READ of size 4`, at `example.c`
line `7` (from the first line of the stack trace).
```
==1==ERROR: AddressSanitizer: heap-use-after-free on address ....
READ of size 4 at 0x602000000010 thread T0
    #0 0x40120f in main /app/example.c:7
    #1 0x7fda58629d8f  (...)
    #2 0x7fda58629e3f in __libc_start_main (...)
    #3 0x4010b4 in _start (...)
```
Additional information is also included such as where the allocation was performed and where the allocation was freed.

## See Also
- Other sanitizers exist and can be similarly helpful, including ubsan, threadsan, and memorysan.
