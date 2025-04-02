# Lambdas

## Prerequisites

- This chapter assumes you have a basic understanding the following topics as this builds up on the knowledge taught in the following chapters:
- [functions](functions.md)
- references
- classes

## What is a lambda?

Lambdas are similar to functions, however they are not identical they specifically are [closures](https://en.wikipedia.org/wiki/Closure_(computer_programming)) what might be a term you are familiar with from other languages.

if they are similar to functions one might ask why would I ever need a lambda? They have multiple usages but the simplest and most common one is for predicates in algorithms. Algorithms are nice and generic and you want their behavior to be slightly different depending on your specific use case.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> v{3, -4, 2, -8, 15, 267};

    // Here we declare a local lambda object, called print
    auto print = [](const int& n) { std::cout << n << '\n'; };

    // Here we use this lambda object in the algorithm for each, where the lambda will be called for each
    // iteration and print the value in the vector.
    std::for_each(v.cbegin(), v.cend(), print);

    // As a lambda is similar to a function we can also call it like a function. This will print 5
    print(5);
}
```

## Structure of lambdas

A lambda consists of at least three parts:

- `[]`, the introducer, containing captures.
- `()`, the parameters (optional in some cases).
- `{}`, the body of the lambda.

There are many further optional parts, but `[](){}` or `[]{}` are the bare minimum, depending on the language version.

### Parameters `()`

The parameter part of a lambda is the exact same as the parameter list of a function. Here you specify the inputs of your lambda.

For example `[](int a, int b){}` is a lambda that takes in 2 integer values.

### body `{}`

The lambda body is the exact same as the body of the function. It's hold the code that the lambda will execute when it's invoked.

### Capture list

As the name implies, the capture list allows us to capture values into the lambda as it's constructed. Unlike the parameters where we specify which values we want to pass in when we invoke the lambda. This tends to be particularly common when you want to bring external state into a generic algorithm.

Take for example a simple program where you want to multiply every number with a number the user provides.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> v{3, -4, 2, -8, 15, 267};

    std::cout << "Please enter a number to multiply with";
    int multiply_number = 0;
    std::cin >> multiply_number;

    // Here we declare a local lambda object. We capture the variable multiply_number so it can be used in the lambda. We return the value of the passed in value with multiply_number.
    auto func = [multiply_number](const int& n) {
        return n * multiply_number;
    };

    // Here we use this lambda object in the algorithm transform. This algorithm takes a ranges to iterate over, an output destination (the begin of the same vector in this case) and the predicate (our lambda)
    std::transform(v.cbegin(), v.cend(), v.begin(), func);
}
```

You might have noticed that the lambda uses the same variable name inside the lambda as declared in main. These are actually not the same variables. The multiply_number in the lambda is a copy of the original in main. you can modify the above example like this to give the variable a different name if so desired.

```cpp
auto func = [num = multiply_number](const int& n) {
    return n * multiply_number;
};
```

Here we make a copy of multiply_number called num, we do not need to specify the type here.

Making a copy of a value might be undesirable and if wanted we can also capture the variable as a reference. Now no copy is made of multiply_number.

```cpp
auto func = [&multiply_number](const int& n) {
    return n * multiply_number;
};
```

You can mix this syntax to capture multiple variables.

```cpp
int a = 1;
int b = 2;
int c = 3;
auto func = [a, &b, d = c](const int& n) {
    return a + b + d;
};
```

Here we capture `a` by value, `b` as a reference and `c` as a copy into the variable `d` in the lambda.

As you noticed the list here is getting rather long. Luckily we have some special values that can help us keep the lambda small. We have `=` that captures all used variables in the lambda by value. and `&` that captures all variables as a reference.

```cpp
int a = 1;
int b = 2;
int c = 3;
int d = 4;
// a,b, c are copied into the lambda. d is not copied as it's not used.
auto func = [=](const int& n) {
    return a + b + c;
};

// a,b, c are captured as a reference into the lambda.
auto func2 = [&](const int& n) {
    return a + b + c;
};
```

You can also mix this with the syntax you learned above to capture specifically by reference or value. So for example by default we make a copy except the specific value we capture as a reference.

```cpp
int a = 1;
int b = 2;
int c = 3;
int d = 4;
// a,b are copied into the lambda. d is not copied as it's not used. and c is captured as a reference into the lambda.
auto func = [=, &c](const int& n) {
    return a + b + c;
};
```

## `this` keyword

The lambda has 1 additional special keyword called `this` you might be familiar with this keyword if you have worked with classes. For lambdas however the meaning is slightly different. By specifying this into the lambda capture list you give it access to the class variables as if it where part of the parent class itself. even private variables.

```cpp
#include <iostream>

class Foo
{
    private:
    int a = 5;

    public:
    void func(){
        auto lambda = [this](){
            // notice how we can access the private member a here!
            std::cout << a << "\n";
        };

        lambda();
    }
};

int main(){
    Foo obj;
    obj.func();

}
```

You can capture additional variables as well with the same rules as described in the previous chapter.

```cpp
#include <iostream>

class Foo
{
    private:
    int a = 5;

    public:
    void func(){
        int b = 1;
        int c = 2;

        // b is captured as a copy, and c is captured by reference.
        auto lambda = [this, b, &c](){
            // notice how we can access the private member a here! as well as the local variable b and c
            std::cout << a << " " << b << " " << c << "\n";
        };

        lambda();
    }
};

int main(){
    Foo obj;
    obj.func();

}
```
