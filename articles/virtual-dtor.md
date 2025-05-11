# When Do We Need a Virtual Destructor?

[As stated by the C++ standard](https://timsong-cpp.github.io/cppwp/n4868/expr.delete#3),
when we `delete` a `base*` which is actually pointing to a `derived` which inherits from `base`,
`base` must have a virtual destructor.
Otherwise, the behaviour is undefined.

```c
struct base {
  // make base a virtual class
  virtual void dummy() {}
  // virtual ~base() = default; uncomment to fix
};
struct derived : base {
  std::string str;
};
int main() {
  base* b = new derived{"awoo"};
  delete b; // undefined behaviour
}
```
The problem is that `derived` has a `str` member.
When we `delete b`, this calls the destructor of `base`, because `p` is `base*`,
but `~base()` doesn't call `~derived()`, so `str` is leaked.

## See Also
- [When to use virtual destructors?](https://stackoverflow.com/q/461203/5740428)
- [When NOT to use virtual destructors?](https://softwareengineering.stackexchange.com/q/284561)
- [What is 'Undefined Behaviour'?](https://64.github.io/cpp-faq/undefined-behaviour/)
