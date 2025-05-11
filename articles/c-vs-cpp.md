# C vs. C++: Which Is Better, Faster, ...?

Neither language is better, neither language is faster.
There are good reasons for using both languages:

<!-- inline -->
## Reasons to Use C
:white_check_mark: relatively low-level language<br>
:white_check_mark: much simpler language (no classes, templates, ...)<br>
:white_check_mark: portable to a wide variety of systems

<!-- inline -->
## Reasons to Use C++
:white_check_mark: lots of helpful abstractions (classes, templates, ...)<br>
:white_check_mark: feature-rich language (function overloads, `constexpr`, ...)<br>
:white_check_mark: extensive standard library

## Which Is Faster?
Neither language is inherently faster than the other.
In modern compilers, the exact same optimizer is used for both languages.
Certain high-level C++ features can make it easy to inadvertently write inefficient code (e.g.
innocent looking code performing large copies).

One notable difference between the two languages is their standard libraries' string representation:
C strings, while simple, are highly inefficient because they are terminated by a null character, therefore needing
to walk the whole string to find out its length.

## Conclusion
Both languages can be equally fast, choose the right language for your job, and the language you
enjoy working in.
