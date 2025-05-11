<!-- alias ownership -->

# Ownership

C and C++ do not have garbage collectors and as such resources must be managed in our code. Any resource that is
allocated must be released, and some part of the code must be responsible for that cleanup. This is where the concept of
[*ownership*][ownership] originates. In order to prevent common memory errors such as memory leaks or double-frees it's
important to have a clear notion of who owns resources and is responsible for their cleanup.

## Example
For example, this code has a double-free due to unclear ownership of the pointer:
```c
void foo(int* ptr) {
    // use ptr
    free(ptr); // who "owns" this resource, foo or main?
}
int main() {
    int* ptr = malloc(sizeof(int));
    foo(ptr);
    free(ptr); // who "owns" this resource, foo or main?
}
```

## Ownership in C++

C++ provides smart pointers to help with ownership:
- `std::unique_ptr`: Single ownership, the `unique_ptr` owns its resource
- `std::shared_ptr`: Shared ownership, reference counting is used to figure out when to release the resource. Note:
  `shared_ptr` should only rarely be used in C++, generally we should have a more clear sense of ownership in our code.
- Raw pointers (`T*`): Good at representing a non-owning pointer
Additionally, [RAII][raii] enables classes to manage and own their resources. For example, `std::vector` owns its
internal array.

[ownership]: https://stackoverflow.com/questions/13852710/single-vs-shared-ownership-meaning
[raii]: https://en.cppreference.com/w/cpp/language/raii
