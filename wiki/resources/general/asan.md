---
alias: asan
preview: |
  # Address Sanitizer

  Memory errors are common in C and C++ and can be hard to debug because they often manifest far from their source.

  Address sanitizer is a runtime tool that identifies memory errors **at their source** and makes debugging much simpler.
  This is an essential tool for C and C++ software development.

  Address sanitizer is available for gcc/clang on linux and msvc on windows. To use it, simply pass the flag
  `-fsanitize=address` to the compiler.
---

# Address Sanitizer

Memory errors are common in C and C++ and can be hard to debug because they often manifest far from their source. For
example, writing past the end of an array might corrupt data that isn't relied on until a completely different part of
the program's execution.

Address sanitizer is a runtime tool that identifies memory errors **at their source** and makes debugging much simpler.
This is an essential tool for C and C++ software development.

Address sanitizer is available for gcc/clang on linux and msvc on windows. To use it, simply pass the flag
`-fsanitize=address` to the compiler.

> [!IMPORTANT]
>
> Make sure to turn on debug symbols with `-g` for gcc/clang and `-Zi` for msvc.

## Example

Consider the following buggy program:

```c:line-numbers
#include <stdlib.h>
#include <stdio.h>

int sum(int* array, int n) {
    int sum = 0;
    for(int i = 0; i < n; i++) {
        sum += array[i];
    }
    return sum;
}

int main() {
    int* array = malloc(100 * sizeof(int));
    for(int i = 0; i < 100; i++) {
        array[i] = i;
    }
    printf("sum: %d\n", sum(array, 200));
}
```

This program contains an error on line `17`: The wrong length is passed to `sum` resulting in out of bounds memory
access in that function.

Running this program normally produces surprising results, e.g.:

```
sum: 139047
```

If we turn on address sanitizer by passing `-g -fsanitize=address` we get the following output when running our program:

```ansi
=================================================================
[1m[31m==1==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x6140000001d0 at pc 0x000000401211 bp 0x7ffe93ef4030 sp 0x7ffe93ef4028
[1m[0m[1m[34mREAD of size 4 at 0x6140000001d0 thread T0[1m[0m
    #0 0x401210 in sum /app/example.c:7
    #1 0x4012e4 in main /app/example.c:17
    #2 0x7131c5a29d8f  (/lib/x86_64-linux-gnu/libc.so.6+0x29d8f) (BuildId: 490fef8403240c91833978d494d39e537409b92e)
    #3 0x7131c5a29e3f in __libc_start_main (/lib/x86_64-linux-gnu/libc.so.6+0x29e3f) (BuildId: 490fef8403240c91833978d494d39e537409b92e)
    #4 0x4010e4 in _start (/app/output.s+0x4010e4) (BuildId: 67a16a963c4044ff390d49491a3b5152485a6b09)

[1m[32m0x6140000001d0 is located 0 bytes after 400-byte region [0x614000000040,0x6140000001d0)
[1m[0m[1m[35mallocated by thread T0 here:[1m[0m
    #0 0x7131c5df403f in malloc (/opt/compiler-explorer/gcc-13.2.0/lib64/libasan.so.8+0xdc03f) (BuildId: 53df075b42b04e0fd573977feeb6ac6e330cfaaa)
    #1 0x401238 in main /app/example.c:13
    #2 0x7131c5a29d8f  (/lib/x86_64-linux-gnu/libc.so.6+0x29d8f) (BuildId: 490fef8403240c91833978d494d39e537409b92e)

SUMMARY: AddressSanitizer: heap-buffer-overflow /app/example.c:7 in sum
Shadow bytes around the buggy address:
  0x613fffffff00: [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m
  0x613fffffff80: [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m
  0x614000000000: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m
  0x614000000080: [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m
  0x614000000100: [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m
=>0x614000000180: [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m[[1m[31mfa[1m[0m][1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
  0x614000000200: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
  0x614000000280: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
  0x614000000300: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
  0x614000000380: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
  0x614000000400: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
Shadow byte legend (one shadow byte represents 8 application bytes):
  Addressable:           [1m[0m00[1m[0m
  Partially addressable: [1m[0m01[1m[0m [1m[0m02[1m[0m [1m[0m03[1m[0m [1m[0m04[1m[0m [1m[0m05[1m[0m [1m[0m06[1m[0m [1m[0m07[1m[0m
  Heap left redzone:       [1m[31mfa[1m[0m
  Freed heap region:       [1m[35mfd[1m[0m
  Stack left redzone:      [1m[31mf1[1m[0m
  Stack mid redzone:       [1m[31mf2[1m[0m
  Stack right redzone:     [1m[31mf3[1m[0m
  Stack after return:      [1m[35mf5[1m[0m
  Stack use after scope:   [1m[35mf8[1m[0m
  Global redzone:          [1m[31mf9[1m[0m
  Global init order:       [1m[36mf6[1m[0m
  Poisoned by user:        [1m[34mf7[1m[0m
  Container overflow:      [1m[34mfc[1m[0m
  Array cookie:            [1m[31mac[1m[0m
  Intra object redzone:    [1m[33mbb[1m[0m
  ASan internal:           [1m[33mfe[1m[0m
  Left alloca redzone:     [1m[34mca[1m[0m
  Right alloca redzone:    [1m[34mcb[1m[0m
==1==ABORTING
```

There's a lot of output here so let's break it down:

1. The first two lines tell us that an address sanitizer error has occurred. More specifically, they tell us that a
   heap-buffer-overflow happened in the main thread (`T0`) when reading `4` bytes at a specific address:
   ```ansi
   [1m[31m==1==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x6140000001d0 ...
   [1m[0m[1m[34mREAD of size 4 at 0x6140000001d0 thread T0[1m[0m
   ```
2. The next lines are the most important: They provide a stack trace showing the exact line where things went wrong and
   how the program got there. In this case, it tells us the error happened on line `7` inside `sum` and `sum` was called
   from `main` on line `17`:
   ```ansi
       #0 0x401210 in sum /app/example.c:7
       #1 0x4012e4 in main /app/example.c:17
       ...
   ```
   While the memory error occurred on line `7`, the line `sum += array[i];` is itself is not a bug. Nor is anything else
   about the `sum` function. Rather we must look in the caller to understand why this error has happened in `sum`.
3. The next set of lines tell us information about the memory error in relation to the relevant block of memory and
   where this block of memory originated from. Specifically, it tells us we're accessing memory immediately after a
   `400`-byte block of memory allocated by the main thread in `main` on line `17`:
   ```ansi
   [1m[32m0x6140000001d0 is located 0 bytes after 400-byte region [0x614000000040,0x6140000001d0)
   [1m[0m[1m[35mallocated by thread T0 here:[1m[0m
       #0 0x7131c5df403f in malloc (/opt/compiler-explorer/gcc-13.2.0/lib64/libasan.so.8+0xdc03f) (BuildId: 53df075b42b04e0fd573977feeb6ac6e330cfaaa)
       #1 0x401238 in main /app/example.c:13
   ```
   This information about the allocation combined with information about where the program read past the end of the
   allocation is sufficient for us to understand this memory error and pinpoint how our program went wrong.
4. Lastly, address sanitizer prints out a view of the memory in the program to illustrate the block of memory and where
   the attempted bad access was within the program memory:
   ```ansi
   Shadow bytes around the buggy address:
   0x613fffffff00: [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m
   0x613fffffff80: [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m
   0x614000000000: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m
   0x614000000080: [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m
   0x614000000100: [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m
   =>0x614000000180: [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m [1m[0m00[1m[0m[[1m[31mfa[1m[0m][1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
   0x614000000200: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
   0x614000000280: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
   0x614000000300: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
   0x614000000380: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
   0x614000000400: [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m [1m[31mfa[1m[0m
   ```
   This bit of output is usually not necessary to understand memory errors or particularly helpful, however, there are
   cases where it can be helpful. It is, at the very least, quite pretty.

Try it yourself: :ce: [Example](https://godbolt.org/z/PfbjEz75E)

## Other Sanitizers

In addition to address sanitizer, a handful of other sanitizers exist:

- Undefined behavior sanitizer (`-fsanitize=undefined`): Checks some array subscript out of bounds, signed integer
  overflow, misaligned and null pointers, etc.
- Memory sanitizer (`-fsanitize=memory`): Checks for use of uninitialized memory
- Thread sanitizer (`-fsanitize=thread`): Checks for data races
