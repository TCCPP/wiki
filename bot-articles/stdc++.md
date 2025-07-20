# Why Should I not `#include <bits/stdc++.h>`?

The `stdc++.h` header is not a C++ standard header.
It's an implementation detail of
[libstdc++, the GNU C++ Library][libstdc++].
Other implementations such as [Clang's libc++][libc++]
or the [MSVC STL][msvc-stl] do not contain
this header.

If you use `bits/stdc++.h`, **your code is not portable.**
This header also includes the entirety of the standard library,
which means **your code is slow to compile.**

[libstdc++]: https://gcc.gnu.org/onlinedocs/libstdc++/
[libc++]: https://libcxx.llvm.org/index.html
[msvc-stl]: https://github.com/microsoft/STL
