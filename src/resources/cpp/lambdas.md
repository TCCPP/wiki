## Abstract

A lambda expression is a shorthand notation for creating an unnamed callable object (also called a closure, or an
anonymous function). A lambda can "capture" variables from its surrounding scope by value or by reference, allowing the
body of the lambda to access or modify those variables without having to pass them as parameters. Unlike regular
functions, lambdas are typically written in-line, combining the reusability of functions with direct access to local
context. The lambda retains captured variables' state (for captures by value) or dynamically references them (for
captures by reference), making lambdas ideal for short, context-dependent operations like custom comparisons, filters,
or event handlers.

For example:

```cpp
// Define a function in namespace scope
bool is_even(int x) {
	return x % 2 == 0;
}

int main() {
	std::vector<int> data = { 1, 3, 5, 10, 73 };

	// Actually use the function here
	bool has_even = std::ranges::any_of(data, is_even);
}
```

can instead be rewritten as:

```cpp
int main() {
	std::vector<int> data = { 1, 3, 5, 10, 73 };

	// Define a lambda in-line
	bool has_even = std::ranges::any_of(data, [](int x) { return x % 2 == 0; });
}
```

&nbsp;

&nbsp;

## Syntax

The basic syntax of a lambda expression looks like this:

```
[captures](params) -> ReturnType {
	statements;
}
```

A more detailed explanation of the syntax can be found on
[cppreference](https://en.cppreference.com/w/cpp/language/lambda#Syntax).

&nbsp;

Each lambda expression has its own unique, unnameable type:

```cpp
auto add = [](int x, int y) { return x + y; };
```

is similar to writing:

```cpp
struct {
	auto operator()(int x, int y) const {
		return x + y;
	}
} add;
```

This also means that even identical lambda expressions always have completely different types, and are not
interconvertible:

```cpp
auto foo = [](int x) { return x + 1; };
auto bar = [](int x) { return x + 1; };

static_assert(not std::same_as<decltype(foo), decltype(bar)>);
```

&nbsp;

### Capture list

All lambda expressions begin with a capture list. The capture list specifies which variables to capture from the
surrounding scope:

```cpp
int x = 10;

auto lambda = [x](int y) { return x + y; };

lambda(5) // 15
```

- `[]` - Empty capture list.
- `[=]` - Automatically capture variables that are used in the lambda body by value.
  - Mutually exclusive with `[&]`.
  - Does not implicitly capture `this` if used in a class.
- `[&]` - Automatically capture variables that are used in the lambda body by reference.
  - Mutually exclusive with `[=]`.
- `[x]` - Capture only `x` by value.
- `[&x]` - Capture only `x` by reference.
- `[x...]` - Capture a pack `x` by value.
- `[&x...]` - Capture a pack `x` by reference.
- `[this]` - Capture `*this` by reference.
- `[x = y]` - Define a local variable `x` and initialize it to `y`.

Different captures can be mixed together:

```cpp
int a = 1;
int b = 2;
int c = 3;

auto foo = [=, &b, d = c]() {
	// `a` is implicitly captured by value,
	// `b` is explicitly captured by reference, and
	// `d` is initialized to `c`.
	return a + b + d;
};
```

However, `[=]` may only be followed by captures by reference and `[&]` may only be followed by captures by value.

Implicit captures can be nested multiple times:

```cpp
int x = 0;

[&]() {
	[&]() {
		x = 5;
	}();
}();
```

&nbsp;

### Parameters

Lambda parameters work the same way as normal function parameters, and `auto` parameters make a lambda's `operator()`
implicitly templated.

If a lambda takes no parameters, the parameter list may be omitted entirely:

```cpp
auto very_important_number = [] { return 4; };
```

Finally, the explicit `this` parameter can also be in lambdas since C++23:

```cpp
auto fibonacci = [](this auto self, int n) {
	if (n < 2) return n;
	return self(n - 1) + self(n - 2);
};
```

&nbsp;

### Return type

A lambda's return type may be specified with an arrow:

```cpp
auto add = [](int x, int y) -> int { return x + y; };
```

Omitting the return type is the same as writing `-> auto`.

&nbsp;

### Specifiers

- `constexpr` - Explicitly specifies that a lambda's `operator()` is a
  [constexpr function](https://en.cppreference.com/w/cpp/language/constexpr#constexpr_function).
  - Mutually exclusive with `consteval`.
  - Lambdas are implicitly marked `constexpr`, if possible.
- `consteval` - Makes a lambda's `operator()` an
  [immediate function](https://en.cppreference.com/w/cpp/language/consteval).
  - Mutually exclusive with `constexpr`.
- `static` - Makes a lambda's `operator()` a
  [static member function](https://en.cppreference.com/w/cpp/language/static#Static_member_functions).
  - Mutually exclusive with `mutable`.
  - Cannot be used if the captures list is not empty, or an explicit `this` parameter is present.
- `mutable` - Allows the body of the lambda to modify the variables captured by value.
  - Mutually exclusive with `static`.
  - Cannot be used if an explicit `this` parameter is present.

```cpp
auto next = [i = 0] mutable { return i++; };

next() // 0
next() // 1
next() // 2
```

These may be followed by a `noexcept` specifier, to determine whether calling the lambda may throw an exception.

&nbsp;

### Template parameters

A lambda's `operator()` may be templated to accept template parameters since C++20:

```cpp
auto lambda = []<typename T>(const T& x) {
	return x;
};

// Deduce template argument from function argument
lambda(5);

// Pass template argument explicitly
lambda.template operator()<double>(5);
```

&nbsp;

### Attributes

Lambdas may be given attributes that apply to their `operator()`s since C++23:

```cpp
auto very_important_number = [][[nodiscard]] { return 4; };
```

These attributes are placed right after (optional) template parameters.

For details, see [cppreference](https://en.cppreference.com/w/cpp/language/lambda).

&nbsp;

&nbsp;

## Notes

### Inheritance

Lambdas can be derived from:

```cpp
auto base = [] { std::puts("Hello, world!"); };

struct : decltype(base) {} derived;

derived(); // prints "Hello, world!"
```

This, in combination with multiple inheritance, allows for a very neat "visitor" class:

```cpp
template<typename... Fs>
struct visitor : Fs... {
	using Fs::operator()...;
};

visitor {
	[](int) { std::puts("int"); },
	[](double) { std::puts("double"); },
	[](...) { std::puts("unknown"); }
}(5); // prints "int"
```

&nbsp;

### Capturing function parameters

While you can use a function's parameters in its `noexcept` specifier and trailing `requires` clause, using a lambda
there which captures the function's parameters is invalid:

```cpp
// Fine
void f(int x) noexcept(noexcept(x)) {}

// Invalid
void f(int x) noexcept(noexcept([x] { x; })) {}
```

This is because the lambda is technically not in function or class scope, and thus cannot have captures. See
[expr.prim.lambda.capture#3](https://timsong-cpp.github.io/cppwp/n4950/expr.prim.lambda.capture#3). This can sometimes
be worked around using a `requires` expression:

```cpp
void f(int x) noexcept(requires(decltype(x) x) {
	requires noexcept([x] { x; });
}) {}
```

&nbsp;

### Type aliases

Making a type alias with an in-line lambda in a header file or module interface violates the
[One-Definition Rule](https://en.cppreference.com/w/cpp/language/definition) because aliases are not a "definable item",
so lambdas in them are not allowed to match with other lambda declarations in other
[translation units](https://en.cppreference.com/w/cpp/language/translation_phases#Translation_process):

```cpp
// Bad
using T = decltype([] {});

// Bad
template<auto> struct A {};
using T = A<[] {}>;

// Ok
auto lambda = [] {};
using T = decltype(lambda);
```

&nbsp;

### In-line partial specialization

Partial specialization usually requires writing out a struct in namespace scope:

```cpp
template<typename>
struct return_type;

template<typename Return, typename... Args>
struct return_type<Return(Args...)> {
	using type = Return;
};

return_type<int(char)>::type // int
```

However, the fact that lambdas can be invoked immediately when they are defined allows doing the same work completely
in-line:

```cpp
decltype(
	[]<typename Return, typename... Args>(std::type_identity<Return(Args...)>) {
		return std::type_identity<Return>();
	}(std::type_identity<int(char)>())
)::type // int
```

Here, `T` and `Return` are wrapped in `std::type_identity` objects to pass them around without actually constructing the
types they hold.

A similar trick is useful in concepts:

```cpp
template<typename T, template<typename...> typename Template>
concept specialization_of = requires {
	[]<typename... Args>(std::type_identity<Template<Args...>>) {}(std::type_identity<T>());
};

static_assert(specialization_of<std::tuple<int>, std::tuple>);
```

and with `std::integer_sequence`:

```cpp
[]<std::size_t... i>(std::index_sequence<i...>) {
	(..., std::print("{} ", i));
}(std::make_index_sequence<5>());
// prints "0 1 2 3 4"
```
