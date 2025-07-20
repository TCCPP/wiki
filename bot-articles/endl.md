# About `std::endl`, Buffers, and Flushing

I/O in C++ (**[std::cout][cout]**, i.e. **[std::ostream][ostream]**) is *buffered*, which means that not every character
you write to the stream is instantly written through to the terminal/disk. Doing so would be very slow.

Instead, there is a buffer of e.g. 8192 bytes and when it's full,
all data is written through to the OS, i.e. *flushed* in one syscall.
This is much more efficient.

[cout]: https://en.cppreference.com/w/cpp/io/cout
[ostream]: https://en.cppreference.com/w/cpp/io/basic_ostream

<!-- inline -->
## What Is *Flushing*?
*Flushing* means that all characters currently in the buffer are written through,
and the buffer is cleared.

Use **[<< std::flush][ioflush]**
or **[.flush()][oflush]**
to flush, or use
**[std::cerr][cerr]**, which is unbuffered.

[ioflush]: https://en.cppreference.com/w/cpp/io/manip/flush
[oflush]: https://en.cppreference.com/w/cpp/io/basic_ostream/flush
[cerr]: https://en.cppreference.com/w/cpp/io/cerr

<!-- inline -->
## `std::endl`
**[std::endl](https://en.cppreference.com/w/cpp/io/manip/endl)**
is an
[I/O manipulator](https://en.cppreference.com/w/cpp/io/manip) which writes a newline character to the stream, and
flushes it.

Use `<< '\n'` if you don't need to flush.

## See Also
<:stackoverflow:1074747016644661258>
["std::endl" vs "\n"](https://stackoverflow.com/q/213907/5740428)
