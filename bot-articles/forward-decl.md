# Forward Declarations

Sometimes we need to just declare a function, not define it:
- when splitting declaration/definition into header/source
- when resolving (circular) dependencies between declarations

When we declare a function, use it, and define it later, this is called a *forward declaration*.

## Example
```cpp
// forward-declaration
void print_num(int x);
// using the declared function:
void do_stuff() {
  print_num(123);
}
// definition
void print_num(int x) {
  printf("%d", x);
}
```

<!-- inline -->
## Declaration
- ends with semicolon
- defines default parameters (C++), if any
- can have parameter names, but optional
- usually in header

<!-- inline -->
## Definition
- ends with function body
- defines default parameters (C++) if forward-decl. does not
- often in source file, but may be in header (with `inline` linkage)
- must have same function signature, linkage, qualifications as decl.
