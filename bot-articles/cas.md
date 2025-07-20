# What Is an Atomic Compare-And-Swap (CAS)?

[CAS][cas] allows *[read-modify-write operations][rmw]* for atomics. It's often the foundation of
*[lock-free algorithms][lf]*. In C++, this takes the form of **[std::atomic::compare_exchange_xxx][xchg]**:
```cpp
bool atomic<T>::compare_exchange(T& expected, T desired) {
    T old = load(); // All of this happens atomically.
    // For weak exchanges, this test can fail spuriously:
    if (old == expected) { store(desired); return true; }
    else                 { expected = old; return false; }
}
```

[cas]: https://en.wikipedia.org/wiki/Compare-and-swap
[rmw]: https://en.wikipedia.org/wiki/Read%E2%80%93modify%E2%80%93write
[lf]: https://en.wikipedia.org/wiki/Non-blocking_algorithm
[xchg]: https://en.cppreference.com/w/cpp/atomic/atomic/compare_exchange

## Example - Lock-Free Singly Linked List Stack Push
```cpp
struct node { int val; std::atomic<node*> next; };
std::atomic<node*> top;

void push(int val) {
    node* element = new node{ val, nullptr };
    node* old_top = top;
    do {
        element->next = old_top;
    } while(!top.compare_exchange_weak(old_top, element));
}
```
Each iteration, `old_top` is loaded from `top`.
In the time that we set `element->next = old_top` another thread might have updated `top`,
which makes the exchange fail.
We keep retrying until we *safely* exchange `top` with the `element`.
