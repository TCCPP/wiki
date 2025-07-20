# What Is `std::span` and Why Should I Use It?

**[std::span](https://en.cppreference.com/w/cpp/container/span)**
is a C++20 class which refers to a contiguous sequence of objects.
You can think of it as a pointer and an *extent*.
It is more flexible than passing specific containers,
and easier to use than templates.

## Use Case - Combine Pointer And Size
```diff
-int sum(const int* data, size_t size);
+int sum(std::span<const int> data);
```

## Use Case - Avoid Passing Reference to `std::array`
A span with *static extent* can be created from
**[C-style arrays](https://en.cppreference.com/w/cpp/language/array)**,
**[std::array](https://en.cppreference.com/w/cpp/container/array)**, etc.
```diff
-void write(std::array<char, 8192>& to);
+void write(std::span<char, 8192> to);
```


## Use Case - Avoid Passing Reference to `std::vector`
A span with *dynamic extent* can be created from
**[std::vector](https://en.cppreference.com/w/cpp/container/vector)**,
**[std::array](https://en.cppreference.com/w/cpp/container/array)**, etc.
```diff
-void write(std::vector<char>& to);
+void write(std::span<char> to);
```

## See Also
<:stackoverflow:1074747016644661258>
[What is a "span" and when should I use one?](https://stackoverflow.com/q/45723819/5740428)
