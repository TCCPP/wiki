---
wip: true
---

# Language Basics

Before we dive into the bulk of the tutorial, let's discuss a few of the key pieces of the language that you will use in
every C++ program you will ever write. The goal of this section is to get you to a point where you can understand simple
C++ programs. In future sections, we will build upon these concepts while introducing new concepts. It is important to
introduce common terminology early, so you can effectively communicate about C++ using widely agreed-upon definitions.

## Program Structure

In C++, your program begins execution in the `main` function, commonly referred to as the _entry point_ of the program.
Here is a simple example of a C++ program:

```cpp
int main() {
    return 0;
}
```

The `return` statement tells the computer to return from the function with some result. In this case, the result `0`
indicates that the program completed successfully.

Note that statements typically end with a semicolon (`;`). If you do not use a semicolon where it is needed, you will
experience compilation errors.

::: info For Advanced Developers

Functions that do not return `void` must have an explicit `return` statement. The `main` function is unique, as the
compiler will implicitly insert a `return 0;` at the end of the function if execution can reach the end of `main`
without returning.

:::

## Comments

Programs can also contain comments, which are pieces of text within your code. These are usually used to document why
you've written code a certain way. C++ has two types of comments:

```cpp
// This is a single-line comment.

/* This is a
   multi-line comment. */
```

_Line comments_ or _single-line comments_ start with `//` and go until the end of the line.

_Block comments_ start with `/*` and end with `*/`. Although they can be used for single-line comments, they are
typically used for comments that span multiple lines.

## Statements

In C++, we have many different types of statements. To start, we will discuss some of the most common statements.

### Declaration Statements

Declaration statements "add stuff" to your program. Doing so is called _declaring_. For example, we can declare
_variables_. Once you have declared to your compiler that something exists, you can use it later in your program with
other types of statements.

```cpp
// Declaration statement declares a variable.
int foo = 0;
```

Breaking down this statement, we will start by identifying the name of the variable, `foo`. To the left of `foo`, we see
the type of the variable, `int`. In C++, variables are required to have a type in the declaration, and a variable cannot
change its type after it is declared. The equals sign (`=`) gives `foo` its initial value. The expression on the right
side of the `=` specifies that value, which is `0` in this case.

### Expression Statements

Expression statements are used to instruct the computer to perform an action.

```cpp
int foo = 0;   // declaration statement
foo = foo + 2; // expression statement
```

The above snippet creates `foo` with an initial value of `0`, then evaluates `foo + 2` before assigning the value back
to the variable `foo`.

## Identifiers

In C++, _identifiers_ give our declarations a name. In the example above, `foo` is an identifier. Identifiers can
contain alphabetic characters, `_`, digits, and certain Unicode characters, but they cannot start with a digit.

::: info For Advanced Developers

While Unicode characters can be used in C++ identifiers, the degree of support for them has changed throughout the
years. Many C++ developers prefer to use only ASCII characters in their code, which is more portable and easier to type
on most keyboards. For example, most developers would name a variable `alpha` instead of `α`.

:::

## Keywords

C++ reserves a set of words in the language for its own use, known as _keywords_. Developers may use these keywords, but
they cannot be used as identifiers (such as variable names). You can find a list of C++ keywords on
[cppreference](https://en.cppreference.com/w/cpp/keyword).

```cpp
int my_integer_value = 0; // int is a keyword
float pi = 3.14f;         // float is a keyword

int int = 0;              // error: cannot use "int" as an identifier (variable name)
```

::: info For Advanced Developers

In addition to these "true keywords", C++ also has "contextual keywords", formally called _identifiers with special
meaning_, such as `override`. We will cover these in later chapters.

:::

## Initialization Versus Assignment

When we first create a variable in C++, it undergoes _initialization_. Initialization is the process of providing a
variable with an initial value.

```cpp
int foo = 0;
```

The above statement is one of the most common ways to initialize a variable. It gives the variable `foo` an initial
value of `0`. There are many ways to initialize a variable in C++, each having its own pros and cons. The different
types of initialization will be discussed in more detail in a later section.

Assignment happens _after_ a variable has been created. It is the process of giving an existing variable a new value.

```cpp
int foo = 0; // initialization (begins with the type of the variable)
foo = 2;     // assignment (no type specified)
```

Like initialization, assignment has several forms that will be discussed in more detail in a later chapter.

## Fundamental Data Types and Literals

In C++, every value has a _type_, and a variable can only hold values of the type it was declared with.

The simplest types are _fundamental types_. You have already seen variables of the fundamental type `int`, and values
such as `0`, which are also of type `int`. The following sections cover some commonly used fundamental types.

### `bool`

The type `bool` holds a Boolean value, which is either `true` or `false`. You can use it to store the result of logical
expressions, like:

```cpp
bool b = 1 > 0; // True if 1 is greater than 0.
```

### Integer Types

_Integer types_ in C++ are similar to integers in math. They can store values like `1`, `0`, or `-1`, but not fractions
like `0.5`.

Below are the standard _signed integer types_:

| Type          | Minimum Range                                           | Minimum Width in Bits |
| ------------- | ------------------------------------------------------- | --------------------- |
| `signed char` | [-128, 127]                                             | 8                     |
| `short`       | [-32768, 32767]                                         | 16                    |
| `int`         | [−32768, 32767]                                         | 16                    |
| `long`        | [−2,147,483,648, 2,147,483,647]                         | 32                    |
| `long long`   | [−9,223,372,036,854,775,808, 9,223,372,036,854,775,807] | 64                    |

There are also _unsigned integer types_, which cannot store negative values.

| Type                 | Minimum Range                   | Minimum Width in Bits |
| -------------------- | ------------------------------- | --------------------- |
| `unsigned char`      | [0, 255]                        | 8                     |
| `unsigned short`     | [0, 65535]                      | 16                    |
| `unsigned int`       | [0, 65535]                      | 16                    |
| `unsigned long`      | [0, 4,294,967,295]              | 32                    |
| `unsigned long long` | [0, 18,446,744,073,709,551,615] | 64                    |

::: info

As seen in the table, these ranges are minimums, and the exact size can vary. For example, `int` and `unsigned int` are
usually 32-bit, so they're wider than the 16-bit minimum. `long` and `unsigned long` are 64-bit on 64-bit \*nix systems,
and 32-bit on Windows.

The C++ standard library provides exact-width aliases like `std::int32_t`.

:::

### Character Types

In addition to `signed char` and `unsigned char`, C++ has a type called `char`. All three of these types are used to
represent characters and are one byte in size. The standard does not specify whether `char` is signed or unsigned, but
it is a distinct type from both `signed char` and `unsigned char`. On x86-64, `char` is typically signed, and on ARM64,
it is typically unsigned.

Throughout the years, further character types were added to C++:

- `wchar_t` - A character type that is typically wider than the `char` type. It is typically 32-bit on \*nix platforms,
  and 16-bit on Windows.
- `char8_t` - A character type that can represent any UTF-8 code unit.
- `char16_t` - A character type that can represent any UTF-16 code unit.
- `char32_t` - A character type that can represent any UTF-32 code unit.

### Floating-Point Types

A floating-point type can represent:

- integers (e.g. `0`),
- numbers with fractional parts (e.g. `0.5`),
- positive or negative infinity, and
- NaN (not a number).

Floating-point numbers have a fixed size, so they can only represent certain fractional numbers exactly. For example,
`0.1` cannot be represented exactly as a floating-point number. Each type also has a limited range, so extremely large
and extremely tiny numbers cannot be represented at all.

C++ provides at least three fundamental floating-point types: `float`, `double`, and `long double`. A `double` must have
a range at least as large as a `float`, and a `long double` must have a range at least as large as a `double`. Beyond
these requirements, the language does not provide many strong guarantees about the floating-point types.

::: info IEEE-754 Floating-Point Model

Because C++ supports many kinds of hardware, it does not require a specific floating-point representation. This tutorial
assumes that you are working on a device that uses the IEEE-754 floating-point specification, which is the case for
almost all consumer hardware.

The rest of the tutorial assumes that a `float` is an IEEE-754 binary32 float and that a `double` is an IEEE-754
binary64 float.

| Type     | Range                  | Width |
| -------- | ---------------------- | ----- |
| `float`  | $\pm 3.402 * 10^{38}$  | 32    |
| `double` | $\pm 1.797 * 10^{308}$ | 64    |

On many x86-64 platforms, `long double` is an IEEE-754 binary64 extended format float, which is 80 bits wide. MSVC is an
exception, where `long double` is 64 bits, the same as `double`. On other platforms, it may be an IEEE-754 binary128
float.

:::

### Literals

Literals are a way that C++ allows us to provide a value directly in the code. You may recall above where the code
snippets were creating variables using numbers in the code. Those numbers are referred to as literals.

- **Integer literals** are numbers with no fractional part (e.g. `3`). Adding a `u` suffix makes the literal unsigned
  (e.g. `3u`).
- **Floating-point literals** are numbers with a fractional part (e.g. `3.14`). By default, the compiler treats them as
  `double`. Adding an `f` suffix makes the literal a `float` (e.g. `3.14f`).

```cpp
int foo = 3;            // This is an integer literal
unsigned int ufoo = 3u; // This is an unsigned integer literal
float bar = 3.14f;      // This is a floating-point literal for a float
double baz = 3.14;      // This is a floating-point literal for a double
```

## Basic Operators

Operators are symbols that perform operations on values. For example, `+` is an operator that adds two values together.
Here are a handful of operators that you can use with the fundamental types covered above:

| Operator | Name           | Function                                  |
| -------- | -------------- | ----------------------------------------- |
| `+`      | Addition       | Adds two values                           |
| `-`      | Subtraction    | Subtracts two values                      |
| `*`      | Multiplication | Multiplies two values                     |
| `/`      | Division       | Divides two values                        |
| `%`      | Remainder      | Returns the remainder of integer division |
| `=`      | Assignment     | Assigns a value to a variable             |

::: info The Assignment Operator

As we saw above, the equals sign (`=`) is used both to initialize a variable and to assign a new value to an existing
variable. Initialization and assignment are different operations even though they use the same symbol. The distinction
between the two will be explored further in a later chapter.

:::

In your exploration of the language so far, you may have noticed that there is a `^` operator. In math, you may think of
this as a power/exponentiation operator. In C++, the `^` operator means something else, which will be discussed in a
later chapter on [bitwise operators](/cpp-tutorial/operators#bitwise-operators).

## Wrapping Up

We've now covered the basics of a C++ program. At this point, you should know:

- how a C++ program is structured
- how to write comments
- how to create a variable
- some of the types that C++ provides
- some of the operations you can use on those types

Let's put this into practice and write a simple program that converts Fahrenheit to Celsius.

The equation to convert the two is very simple: $C = (F - 32) / (9 / 5)$.

Temperatures can have fractional parts, so we will use `double` to store our variables.

```cpp
int main() {
    double my_temperature_f = 68.0;
    double my_temperature_c = (my_temperature_f - 32.0) / (9.0 / 5.0);

    // Don't forget to return 0 at the end
    return 0;
}
```

This simple program converts from Fahrenheit to Celsius, but it doesn't print anything out. In the next chapter, we will
be discussing how to view values in our program.
