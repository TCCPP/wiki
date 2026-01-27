---
alias: ownership
bot_article: |
  # Ownership

  C and C++ don't have garbage collectors so resources must be manually managed by the programmer. Ownership answers:
  Which part of your code is responsible for an object's lifetime and cleanup?

  Without clear ownership you get memory leaks, double-frees, and use-after-free bugs.

  ## Ownership in C

  Ownership must be established through conventions and documentation. The compiler cannot enforce it.

  ## Ownership in C++

  RAII and smart pointers make ownership part of the type system:
  - `std::unique_ptr`: Single ownership
  - `std::shared_ptr`: Shared ownership via reference counting
  - `T*`: Non-owning (borrowing)
---

# Ownership

C and C++ do not have garbage collectors so resources must be carefully managed by the programmer. The question of
_ownership_ is: Which part of your code is responsible for that object's lifetime and cleanup?

When there isn't a clear sense of ownership software is prone to bugs. Consider this code:

```c
void process(int* ptr) {
    // use ptr
    free(ptr);
}

int main() {
    int* ptr = malloc(sizeof(int));
    process(ptr);
    free(ptr); // Double-free!
}
```

Both `main` and `process` free the pointer, causing a double-free bug that can corrupt memory or crash the program. The
root cause: ownership isn't clear. Does `process` take ownership of the pointer, or is it just borrowing it?

This ambiguity can lead to three common memory bugs:

- **Memory leaks:** No code takes responsibility for freeing a resource
- **Double-free:** Multiple places think they own the resource and all try to free it
- **Use-after-free:** Code accesses a resource after another part of the program has freed it

C and C++ handle ownership differently: C relies on conventions while C++ encodes ownership in the type system.

## Ownership in C

C has no built-in ownership mechanism, so ownership must be established through conventions and documentation. The most
common patterns are:

- **Caller owns:** The caller allocates and frees. Functions only borrow the resource.
- **Callee owns:** The function takes ownership and is responsible for cleanup.
- **Transfer on success:** Some functions take ownership only if they succeed.

By default, assume the caller retains ownership unless documented otherwise. Here's the earlier example fixed with
caller-owns semantics:

```c
void process(int* ptr) {
    // use ptr, but don't free it - we're just borrowing
}

int main() {
    int* ptr = malloc(sizeof(int));
    process(ptr);
    free(ptr); // main owns it, main frees it
}
```

Naming conventions help communicate intent. Functions like `create_widget()` signal that the caller must free the
result, while `take_widget()` suggests transfer.

These conventions work but they rely on discipline and documentation. The compiler cannot enforce them.

## Ownership in C++

C++ improves on C by expressing ownership through the type system, making it explicit and compiler-enforced.

### RAII: Tying Resources to Object Lifetime

The foundation of C++ resource management is _RAII_ (Resource Acquisition Is Initialization). The idea is simple:
Acquire resources in a constructor, release them in the destructor. This ties resource lifetime to object lifetime,
making cleanup automatic.

You're likely already using RAII without realizing it:

```cpp
void example() {
    std::vector<int> vec = {1, 2, 3, 4, 5};
    // vec owns its internal array
}  // vec is destroyed here, memory automatically freed
```

You never manually free a `std::vector`'s memory. The destructor handles it, even if the function exits early due to an
exception.

The same pattern works for all resources following RAII:

```cpp
void write_file() {
    std::ofstream file("output.txt"); // File opened
    file << "Hello";
} // the stream flushes and closes automatically when destroyed
```

### Smart Pointers

Standard library containers like `std::vector` and `std::string` manage their own memory through RAII. When you need
heap allocation for other objects, smart pointers apply RAII to pointers:

- **`std::unique_ptr`**: Single ownership
- **`std::shared_ptr`**: Shared ownership via reference counting
- **`T*`**: Non-owning (borrowing)

#### `std::unique_ptr` - Single Ownership

A **`std::unique_ptr`** object owns the object it points to and ownership must be explicitly transferred:

```cpp
#include <memory>

void process(std::unique_ptr<int> ptr) {
    // process takes ownership, ptr freed when function returns
}

int main() {
    auto ptr = std::make_unique<int>(42);
    process(std::move(ptr)); // Explicitly transfer ownership
    // ptr is now null - no double-free possible
}
```

Because `unique_ptr` cannot be copied, only moved, ownership transfer is enforced at compile-time. This should be your
default choice for owned heap objects.

#### `std::shared_ptr` - Shared Ownership

Unlike `std::unique_ptr`, **`std::shared_ptr`** can be copied and each instance of the `shared_ptr` object ensures that
the object it points to will remain alive at least as long as this `shared_ptr` instance. The resource is freed when the
last owning `shared_ptr` is destroyed:

```cpp
#include <memory>

std::shared_ptr<int> global_ptr;

void remember(std::shared_ptr<int> ptr) {
    global_ptr = ptr; // Both now share ownership
}

int main() {
    auto ptr = std::make_shared<int>(42);
    remember(ptr);
    // ptr goes out of scope, but global_ptr still owns the resource
}
```

::: warning

`shared_ptr` is often overused when a programmer doesn't want to think carefully about ownership. This is discouraged
because it makes code harder to reason about, can cause action at a distance, and adds runtime overhead. If your design
requires shared ownership everywhere, that often indicates unclear ownership relationships. Prefer `unique_ptr` when you
can identify a single owner.

:::

#### `T*` - Non-Owning Pointers

In modern C++, raw pointers signal non-owning references. A function taking `T*` is borrowing the resource:

```cpp
void process(int* ptr) {
    // Just borrowing, won't delete
}

int main() {
    auto ptr = std::make_unique<int>(42);
    process(ptr.get());  // Pass raw pointer for borrowing
    // unique_ptr still owns the resource
}
```

::: info

Raw pointers can still be owning in older codebases and code working with C interfaces. This is increasingly uncommon in
modern C++, but it's worth being aware of.

:::

### Summary

| Type              | Ownership            | When to Use                           |
| ----------------- | -------------------- | ------------------------------------- |
| `std::unique_ptr` | Exclusive            | Default for owned heap objects        |
| `std::shared_ptr` | Shared (ref-counted) | When multiple owners are truly needed |
| `T*` or `T&`      | Non-owning           | Borrowing a resource temporarily      |

## See Also

- [RAII (cppreference)](https://en.cppreference.com/w/cpp/language/raii)
- [std::unique_ptr (cppreference)](https://en.cppreference.com/w/cpp/memory/unique_ptr)
- [std::shared_ptr (cppreference)](https://en.cppreference.com/w/cpp/memory/shared_ptr)
