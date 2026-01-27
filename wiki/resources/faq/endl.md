---
bot_article: |
  # `std::endl`, Buffers, and Flushing

  Both `std::endl` and `'\n'` write a newline to an output stream. The difference is that `std::endl` also *flushes* the
  stream.

  C++ I/O streams are *buffered*: characters are collected in a buffer and written in bulk for efficiency. *Flushing*
  forces the buffer contents to be written immediately.

  Recommendation: **Prefer `'\n'` over `std::endl`** unless you specifically need to flush. That said, in most programs
  this difference is negligible - it only matters when producing lots of output.
---

# `std::endl`, Buffers, and Flushing

Both `'\n'` and [`std::endl`](https://en.cppreference.com/w/cpp/io/manip/endl) write a newline, but `std::endl` also
flushes the stream. Recommendation: **Prefer `'\n'`** when you don't need the flush.

```cpp
std::cout << "Hello" << std::endl;  // Newline + flush
std::cout << "Hello" << '\n';       // Just a newline (usually sufficient)
```

That said, in most programs this difference is negligible and it's not something to worry about.

## I/O Buffering

I/O in C++ is _buffered_. Characters you write to a stream aren't instantly sent to the terminal or disk. Instead,
they're collected in an internal buffer and written later. This batching makes I/O more efficient by reducing system
call overhead.

_Flushing_ forces all buffered characters to be written immediately. You can flush manually with `<< std::flush` or
`.flush()`. Flushing also happens automatically when your program exits (but not through `abort` or `_exit`).

## Buffering Modes

Streams can operate in different buffering modes, which affect when automatic flushing occurs:

- **Fully buffered**: Flushes only when the buffer is full. Typical for file output.
- **Line buffered**: Flushes when a newline is written (or when the buffer is full). Typical for terminal output.
- **Unbuffered**: No buffering; each write goes directly to the destination. `std::cerr` uses this by default.

Because terminal output is typically line-buffered, `'\n'` triggers a flush automatically, so `std::endl` and `'\n'`
often behave the same for console output.

File output is typically fully buffered, so `'\n'` won't flush. This is where the distinction matters most:

```cpp
// Flushes after every line (slower for lots of output)
for (int i = 0; i < 10000; ++i) {
    file << i << std::endl;
}

// Buffer flushes only when full (more efficient)
for (int i = 0; i < 10000; ++i) {
    file << i << '\n';
}
```

For occasional output, the difference won't matter. In tight loops writing to files, it can be noticeable.

## When to Flush

Explicit flushing is useful when you need output to appear immediately:

- **Progress indicators**: Partial lines that should display before the next operation
- **Debugging output**: Ensuring messages appear before a potential crash
- **Logging**: When log messages must be written immediately

```cpp
std::cout << "Processing... ";
std::cout.flush();  // Show "Processing... " before the work starts
do_lengthy_work();
std::cout << "done.\n";
```

For interactive prompts, reading from `std::cin` automatically flushes `std::cout`, so explicit flushing is often
unnecessary.

For debugging, consider [`std::cerr`](https://en.cppreference.com/w/cpp/io/cerr) instead, which is unbuffered by
default.

## See Also

- [std::cout](https://en.cppreference.com/w/cpp/io/cout)
- [std::endl](https://en.cppreference.com/w/cpp/io/manip/endl)
- [std::flush](https://en.cppreference.com/w/cpp/io/manip/flush)
- [std::cerr](https://en.cppreference.com/w/cpp/io/cerr)
- ["std::endl" vs "\n"](https://stackoverflow.com/q/213907/5740428) on Stack Overflow
