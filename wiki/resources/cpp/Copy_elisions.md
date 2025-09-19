# Copy Elision

Copy elision is a compiler optimization in C++ that eliminates unnecessary copy and move operations when creating or
transferring objects. Think of it as the compiler being smart enough to recognize when you're creating an object in one
place just to immediately move it somewhere else and deciding to create it directly where it needs to go instead.

This optimization allows you to write clean, readable code that returns objects by value without worrying about
performance costs. What makes copy elision special is that starting with C++17, some forms of copy elision are
**guaranteed** by the language standard.

::: info What This Means for You Copy elision is formally defined in the C++ standard under
[**copy elision**](https://en.cppreference.com/w/cpp/language/copy_elision). When it works, objects are constructed
directly where they're needed, skipping any intermediate copying steps entirely. :::

## A Brief History

Let's start with some context.

Back in 1988, compiler developers realized that programs were doing a lot of unnecessary copying when returning objects
from functions. The Zortech compiler introduced something called "Return Value Optimization" to address this
inefficiency.

By 1997, the C++ standards committee recognized that this optimization was so beneficial that they officially included
it in the language specification. However, they made it **optional** and compilers were allowed to do it, but not
required to.

The introduction of move semantics in C++11 helped reduce copying costs, but copy elision remained even better because
it could eliminate operations entirely rather than just making them cheaper.

The real breakthrough came with **C++17**, when the standards committee decided that certain copy elision scenarios were
so obviously beneficial that they made them **mandatory**. This means modern C++ guarantees that some optimizations will
happen, giving you confidence in writing efficient code.

## Understanding the Different Types

Copy elision isn't just one thing, it's actually several related optimizations that apply to different situations. Let's
explore each type to understand when and how they work.

### Return Value Optimization (RVO)

This is probably the most common and important type of copy elision you'll encounter. It deals with what happens when
you return objects from functions.

#### Named Return Value Optimization (NRVO)

This applies when you create a local variable in a function and then return it. Here's a simple example:

```cpp
#include <iostream>
#include <string>

class Foo {
public:
    std::string data;

    Foo(const std::string& str) : data(str) {
        std::cout << "Foo constructed\n";
    }

    Foo(const Foo& other) : data(other.data) {
        std::cout << "Foo copied\n";
    }

    Foo(Foo&& other) noexcept : data(std::move(other.data)) {
        std::cout << "Foo moved\n";
    }
};

Foo make_foo() {
    Foo obj("hello");  // We create a named local variable
    return obj;        // NRVO can optimize this return
}
```

Without NRVO, you'd expect the program to:

1. Create the `obj` object inside the function
2. Copy or move `obj` to create the return value
3. Copy or move the return value to wherever `make_foo()` was called

With NRVO, the compiler is smart enough to construct `obj` directly in the final destination, skipping steps 2 and 3
entirely.

**Expected output with NRVO:**

```
Foo constructed
```

**Expected output without NRVO (using `-fno-elide-constructors`):**

```
Foo constructed
Foo moved
```

#### Unnamed Return Value Optimization (URVO)

This applies when you return a temporary object that doesn't have a name. Starting with C++17, this optimization is
**guaranteed** to happen:

```cpp
Foo make_simple_foo() {
    return Foo("world");  // Temporary object - guaranteed optimization in C++17+
}

Foo make_another_foo() {
    return Foo{"temporary"};  // Also guaranteed to be optimized
}
```

The guarantee is important because it means you can write this kind of code with complete confidence that it will be
efficient, regardless of which compiler you use or what optimization flags you set.

**Expected output (always in C++17+):**

```
Foo constructed
```

### Parameter Passing Elision

Copy elision doesn't just work for return values, it can also optimize how arguments are passed to functions:

```cpp
void process_foo(Foo obj) {  // Takes parameter by value
    std::cout << "Processing: " << obj.data << "\n";
}

void demonstrate_parameter_elision() {
    // These calls might benefit from copy elision:
    process_foo(Foo("temp"));       // Temporary object
    process_foo(make_foo());         // Returned object
}
```

When you pass a temporary object or the result of a function call directly to a parameter, the compiler might construct
that object directly in the parameter's memory location rather than creating it elsewhere and then copying it.

### Exception Object Elision

Even when dealing with exceptions, copy elision can help make error handling more efficient:

```cpp
class MyError {
public:
    std::string message;

    MyError(const std::string& msg) : message(msg) {
        std::cout << "MyError constructed\n";
    }

    MyError(const MyError& other) : message(other.message) {
        std::cout << "MyError copied\n";
    }
};

void doSomething() {
    throw MyError("something went wrong");  // Elision opportunity
}

void handle_error() {
    try {
        doSomething();
    } catch (MyError e) {  // Another elision opportunity when catching
        std::cout << "Error: " << e.message << "\n";
    }
}
```

The compiler can optimize both the creation of the exception object and its transfer to the catch block, though the
catch block elision is eligible but not guaranteed.

**Expected output with elision:**

```
MyError constructed
Error: something went wrong
```

## Guaranteed vs Optional: Understanding the Difference

This is a crucial distinction that affects how confidently you can write your code.

### Guaranteed Copy Elision (C++17 and later)

These scenarios are **guaranteed** to be optimized and the compiler has no choice but to eliminate the copy/move
operations:

```cpp
// 1. Returning a temporary object
Foo getFoo() {
    return Foo("guaranteed");  // Guaranteed - no copy/move will happen
}

// 2. Initializing with a temporary
Foo obj = Foo("direct");  // Guaranteed - constructed directly

// 3. Passing a temporary to a function
void process(Foo f);
process(Foo("parameter"));  // Eligible for elision, but not guaranteed

// 4. Throwing a temporary
throw MyError("guaranteed");  // Guaranteed
```

The word **"guaranteed"** here is strong - even if you compile with flags that try to disable optimizations, these will
still be optimized.

### Optional Copy Elision (All C++ versions)

These are optimizations that compilers will usually do, but aren't required to:

```cpp
// 1. Named Return Value Optimization
Foo createFoo() {
    Foo f("local");
    return f;  // Usually optimized, but not guaranteed
}

// 2. Copy elision in other scenarios
Foo existing("test");
process(existing);  // Might be optimized, might not
```

Most modern compilers will perform these optimizations, but you can't rely on them being guaranteed by the standard.

## Seeing Copy Elision in Action

Let's create a comprehensive example that shows different copy elision scenarios:

```cpp
#include <iostream>
#include <string>

class Bar {
    std::string name;

public:
    // Constructor
    explicit Bar(const std::string& n) : name(n) {
        std::cout << "Created: " << name << "\n";
    }

    // Copy constructor
    Bar(const Bar& other) : name(other.name + "_copy") {
        std::cout << "Copied: " << name << "\n";
    }

    // Move constructor
    Bar(Bar&& other) noexcept : name(std::move(other.name) + "_moved") {
        std::cout << "Moved: " << name << "\n";
    }

    // Destructor
    ~Bar() {
        std::cout << "Destroyed: " << name << "\n";
    }

    const std::string& getName() const { return name; }
};

// URVO - Guaranteed elision in C++17+
Bar make_temporary() {
    std::cout << "Making temporary...\n";
    return Bar("temp");
}

// NRVO - Usually optimized
Bar make_named() {
    std::cout << "Making named object...\n";
    Bar obj("local");
    return obj;
}

// Cannot be elided - multiple return paths
Bar make_conditional(bool flag) {
    std::cout << "Making conditional object...\n";
    Bar first("option1");
    Bar second("option2");
    return flag ? first : second;
}

int main() {
    std::cout << "\n=== Testing URVO (should be optimized) ===\n";
    Bar a = make_temporary();

    std::cout << "\n=== Testing NRVO (likely optimized) ===\n";
    Bar b = make_named();

    std::cout << "\n=== Testing multiple paths (cannot optimize) ===\n";
    Bar c = make_conditional(true);

    std::cout << "\n=== Program ending ===\n";
    return 0;
}
```

**Expected output with copy elision:**

```
=== Testing URVO (should be optimized) ===
Making temporary...
Created: temp

=== Testing NRVO (likely optimized) ===
Making named object...
Created: local

=== Testing multiple paths (cannot optimize) ===
Making conditional object...
Created: option1
Created: option2
Moved: option1_moved

=== Program ending ===
Destroyed: temp
Destroyed: local
Destroyed: option1_moved
Destroyed: option2
Destroyed: option1
```

When you run this with a modern compiler, you'll see that the first two cases only show creation and destruction - no
copying or moving. The third case shows additional move operations because the compiler can't optimize it.

## When Copy Elision Cannot Help

Understanding when copy elision fails is just as important as understanding when it works. Here are the common
situations where the optimization cannot be applied:

### Multiple Return Paths

This is the classic case where NRVO cannot work:

```cpp
Foo create_foo(bool useDefault) {
    Foo defaultFoo("default");
    Foo customFoo("custom");

    // The compiler doesn't know which one you'll return
    if (useDefault) {
        return defaultFoo;  // Cannot optimize
    } else {
        return customFoo;   // Cannot optimize
    }
}
```

The compiler looks at this function and thinks "I have no idea which object will be returned until runtime, so I can't
optimize either one."

Here's how you could restructure this to be optimization-friendly:

```cpp
Foo create_foo_better(bool useDefault) {
    Foo result("default");  // Single object that might be optimized

    if (!useDefault) {
        result = Foo("custom");
    }

    return result;  // NRVO can potentially work now
}
```

### Type Conversions

When you return a different type than what the function declares, copy elision cannot work:

```cpp
class Base {
public:
    virtual ~Base() = default;
};

class Derived : public Base {
public:
    int extra = 42;
};

Base make_base() {
    Derived d;  // We create a Derived object
    return d;   // But return it as Base - conversion prevents elision
}
```

The compiler cannot construct a `Base` directly because you're actually creating a `Derived` object first.

### Explicit Move Operations

This is a common mistake - trying to "help" the compiler by using `std::move`:

```cpp
Foo bad_idea() {
    Foo obj("test");
    return std::move(obj);  // This prevents NRVO! Even without NRVO,
                            // return obj; would only move, never copy.
}
```

When you write `std::move(obj)`, you're explicitly telling the compiler "please move this object." But the compiler was
planning to use NRVO to eliminate the operation entirely. Your "optimization" actually makes the code less efficient.

The correct way is simply:

```cpp
Foo good_idea() {
    Foo obj("test");
    return obj;  // Let NRVO work its magic, or at worst it's an implicit move
}
```

**Expected output comparison:**

```cpp
// bad_idea() output:
Foo constructed
Foo moved

// good_idea() output (with NRVO):
Foo constructed
```

### Complex Return Expressions

NRVO works with simple variable names, not complex expressions:

```cpp
Foo too_complex() {
    Foo obj("test");
    return someCondition ? obj : std::move(obj);  // Too complex for NRVO
}
```

Keep your return statements simple to give copy elision the best chance of working.

## Writing Copy Elision-Friendly Code

Now that you understand how copy elision works, let's look at how to write code that takes advantage of it effectively.

### Embrace Returning by Value

In modern C++, don't be afraid to return objects by value. Copy elision makes this efficient:

```cpp
// This is excellent modern C++ style
std::string create_message(const std::string& name) {
    std::string message = "Hello, ";
    message += name;
    message += "!";
    return message;  // Efficient with copy elision
}

// This is old-style C++ - avoid this
void create_message_old_style(std::string& output, const std::string& name) {
    output = "Hello, ";
    output += name;
    output += "!";
}
```

The modern approach is cleaner, more intuitive, and just as efficient (or more efficient) than the old style.

### Factory Functions Work Great

Factory functions are a perfect use case for copy elision:

```cpp
class Widget {
private:
    std::string type;
    int value;

public:
    Widget(const std::string& t, int v) : type(t), value(v) {}

    // Factory methods that leverage copy elision
    static Widget create_button() {
        return Widget("button", 1);  // URVO - guaranteed in C++17+
    }

    static Widget create_slider() {
        return Widget("slider", 50);  // URVO - guaranteed in C++17+
    }
};
```

These factory functions are clean, readable, and efficient thanks to copy elision.

### Chain Operations Naturally

Copy elision enables functional programming patterns that would otherwise be expensive:

```cpp
class Text {
    std::string content;

public:
    explicit Text(std::string str) : content(std::move(str)) {}

    Text add_prefix(const std::string& prefix) const {
        Text result(prefix + content);  // NRVO opportunity
        return result;
    }

    Text add_suffix(const std::string& suffix) const {
        Text result(content + suffix);  // NRVO opportunity
        return result;
    }

    const std::string& get() const { return content; }
};

void demonstrate_chaining() {
    Text text("world");

    // This chain of operations is efficient with copy elision
    Text result = text.add_prefix("hello ").add_suffix("!");

    std::cout << result.get() << "\n";  // Prints: hello world!
}
```

Each step in the chain can benefit from copy elision, making the functional style practical.

## Compiler Support and Flags

Understanding compiler behavior helps in verifying and controlling copy elision behavior.

### Compiler Versions and Support

- **GCC 7.0+**: Full C++17 guaranteed copy elision support
- **Clang 4.0+**: Complete C++17 guaranteed elision implementation
- **MSVC 15.5+ (Visual Studio 2017)**: Full C++17 compliance - guaranteed copy elision always performed for required
  scenarios regardless of compiler flags

### Important Compiler Flags

```bash
# Disable optional copy elision (guaranteed elision still occurs in C++17+)
g++ -fno-elide-constructors source.cpp

# Enable optimization reporting in GCC
g++ -fopt-info-optimized source.cpp

# Clang-specific copy elision reporting
clang++ -Rpass=copy-elision source.cpp

# MSVC doesn't need special flags - guaranteed elision always works in C++17+ mode
cl /std:c++17 source.cpp
```

::: tip Compiler Flag Note The `-fno-elide-constructors` flag only disables **optional** copy elision. In C++17 and
later, **guaranteed** copy elision scenarios will still be optimized even with this flag. :::

### Testing Copy Elision

You can verify copy elision behavior using diagnostic classes:

```cpp
class TestElision {
    static int construction_count;
    static int copy_count;
    static int move_count;

public:
    TestElision() { ++construction_count; }
    TestElision(const TestElision&) { ++copy_count; }
    TestElision(TestElision&&) { ++move_count; }

    static void report() {
        std::cout << "Constructions: " << construction_count
                  << ", Copies: " << copy_count
                  << ", Moves: " << move_count << "\n";
    }

    static void reset() {
        construction_count = copy_count = move_count = 0;
    }
};

int TestElision::construction_count = 0;
int TestElision::copy_count = 0;
int TestElision::move_count = 0;

TestElision test_function() {
    return TestElision();  // Should show only construction in C++17+
}
```

When copy elision works, you'll see only constructor calls - no copy or move constructors.

## Why Copy/Move Constructors Should Not Have Side Effects

This is an important principle in C++ design. Copy and move constructors should only perform the essential work of
creating a new object - they shouldn't have observable side effects like:

- Printing to console
- Modifying global state
- Opening files
- Network operations

Here's why this matters with copy elision:

```cpp
class ProblematicClass {
public:
    ProblematicClass() {}

    ProblematicClass(const ProblematicClass&) {
        std::cout << "Important side effect!\n";  // This might not execute!
        perform_critical_operation();
    }

private:
    void perform_critical_operation() {
        // Some critical work that the program depends on
    }
};

ProblematicClass create_object() {
    ProblematicClass obj;
    return obj;  // If NRVO happens, copy constructor never called!
}
```

If your program logic depends on copy constructor side effects, copy elision can break your program's correctness. The
solution is to move side effects out of constructors into regular member functions that are explicitly called.

## Common Misconceptions

Let's clear up some common misunderstandings about copy elision:

### "Move semantics made copy elision obsolete"

This isn't true. Move semantics and copy elision solve related but different problems:

- **Move semantics**: Makes copying cheaper when it must happen
- **Copy elision**: Eliminates copying entirely when possible

Copy elision is still better when it can be applied because it eliminates operations completely rather than just making
them cheaper.

### "Copy elision only helps with expensive objects"

Copy elision benefits all types of objects by:

- Eliminating function call overhead
- Reducing code size
- Improving register allocation
- Simplifying the execution path

Even for simple types, these benefits can add up.

### "I should use std::move to help the compiler"

For local returns, this is actually harmful:

```cpp
// DON'T do this - it prevents NRVO
std::string bad() {
    std::string str = "hello";
    return std::move(str);  // Makes it slower!
}

// DO this - allows NRVO to work
std::string good() {
    std::string str = "hello";
    return str;  // Let the compiler optimize
}
```

The compiler knows what it's doing - trust it to make the right optimization choices.

## Practical Guidelines

Here are some practical guidelines for writing copy elision-friendly code:

### For Beginners

1. **Return objects by value** - don't worry about performance
2. **Avoid using `std::move` on local returns** - it usually makes things worse
3. **Write simple, clear code** - the compiler will optimize it
4. **Use factory functions** - they work great with copy elision

### For Advanced Programmers

1. **Understand guaranteed vs optional elision** - design APIs accordingly
2. **Prefer single return paths** when possible for better NRVO opportunities
3. **Leverage C++17 features** - guaranteed elision enables new design patterns
4. **Test with diagnostic tools** - verify your assumptions about elision behavior

## Conclusion

Copy elision is one of C++'s most important optimizations, enabling you to write clean, expressive code without
sacrificing performance. The key insights to remember are:

- **C++17 guarantees** certain copy elision scenarios, giving you confidence in API design
- **NRVO is optional** but widely supported by modern compilers
- **Simple patterns work best** - avoid complex expressions and explicit moves
- **Value semantics are efficient** in modern C++ thanks to copy elision

By understanding how copy elision works and writing code that leverages it effectively, you can create programs that are
both readable and performant. The optimization removes the traditional tension between clean code and fast code,
allowing you to focus on expressing your intent clearly while trusting the compiler to handle the efficiency details.

::: tip Key Takeaways

- Write clear, simple code and let copy elision optimize it
- Return objects by value with confidence in modern C++
- Avoid manual "optimizations" that prevent copy elision
- Use diagnostic tools to verify that elision is working as expected
- Leverage C++17's guaranteed elision for robust API design :::

## References

1. [Copy elision - cppreference.com](https://en.cppreference.com/w/cpp/language/copy_elision)
2. [C++17 Standard - Guaranteed Copy Elision (P0135R1)](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2016/p0135r1.html)
3. [GCC Documentation - Optimize Options](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html)
4. [Effective Modern C++ by Scott Meyers](https://www.oreilly.com/library/view/effective-modern-c/9781491908419/)
5. [MSVC Copy and Move Elision Blog Post](https://devblogs.microsoft.com/cppblog/improving-copy-and-move-elision/)
6. [CppCon 2018: "Return Value Optimization: Harder Than It Looks" by Arthur O'Dwyer](https://www.youtube.com/watch?v=hA1WNtNyNbo)

---

_This guide covers copy elision comprehensively for developers at all skill levels. Understanding copy elision is
essential for writing modern C++ code that balances expressiveness with performance._
