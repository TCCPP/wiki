# Language Basics

Before we dive into the bulk of the tutorial, let's discuss a few of the key pieces of the language that you will use in
every C++ program you will ever write. The goal of this section is to get you to a point where you can understand simple
C++ programs. In future sections, we will build upon these concepts while introducing new concepts. It is important to
introduce common terminology early so you can effectively communicate about C++ using widely agreed upon definitions.

So what actually is a computer program? From just about any perspective you take on this question, it boils down to a
sequence of instructions that the computer executes. Each of these instructions is referred to as a statement.

## Program Structure

The primary construct of the C++ programming language is a statement. Statements are used to build the logic for how
your program will be executed by the computer. Statements are executed in the order in which they are visited. In C++,
your program will begin execution in the main function, commonly refered to as the entry point. This is unlike other
languages, such as Python or JavaScript, where execution of your code begins at the top of the file. The majority of
statements must be written within functions. There are some exceptions to this rule of thumb, and we'll go over these in
later chapters.

```cpp
int main() {
    return 0;
}
```

This is the simplest form of the main function. It has a single statement within it, `return 0;`. One thing you should
note as we continue, statements typically end with a semicolon (';'). If you do not use a semicolon where it is needed,
you will experience compilation errors.

::: info

For Advanced Developers: The `main` function has special properties and restrictions compared to other functions. In
most functions with non-void returns, you must return a value. In `main`, if the end of the function is reached without
a return, an implicit `return 0;` is added.

:::

In C++, we have many different types of statements. To start, we will discuss the two most common types of statements:
Declaration and Expression.

### Declaration Statements

Declaration statements provide the compiler with knowledge about the existance of some named piece of your program. The
simplest thing to declare is a variable. Once you have declared to your compiler that something exists, you can use it
later in your program with other types of statements.

```cpp
int foo = 0; // Declaration Statement
```

The above snippet creates a variable call `foo`, tells the compiler that it is an integer, and provides it with an
initial value of `0`.

### Expression Statements

Expression statements are used to instruct the computer to perform an action. Many of the lines of code you will end up
writing are expression statements. By writing many expression statements, we can tell the computer to perform more and
more complex tasks.

```cpp
int foo = 1;   // Declaration Statement
foo = foo + 2; // Expression Statement
```

The above snippet creates `foo` with an initial value of `1`, then evaluates `foo + 1` before assigning the value back
to the variable `foo`.

### Identifiers

In C++, the way things are named is with a concept called identifiers. In the statement examples above, `foo` is an
identifier. Identifiers must be given a name in a specific format. The first character of an identifier must be a latin
letter (`a-z`, case insensitive) or an underscore (`_`). All subsequent characters must be a digit (`0-9`), a latin
letter (`a-z`, case insensitive) or an underscore (`_`). Idenfitiers have no maximum length imposed by the language, so
you should make your identifiers descriptive.

::: info

For Advanced Developers: Identifiers may also start with unicode characters with the property `XID_Start` and any
character thereafter may be a unicode character with the property `XID_Continue`. However, Unicode support among
compilers is limited.

:::

```cpp
// A variable describing the freezing point of water in Fahrenheight
int freezing_point_f = 32;
```

## Comments

Programs can rapidly increate in complexity. Instead of trying to keep all of the information in your head, you can
utilize comments in your code. Comments are pieces of text ignored by the compiler, typically used for programmer
convenience. Comments come in two flavors: single line and multiline.

```cpp
// This is a single line comment
```

Single line comments start with two consecutive forward slashes (`//`). This comment goes until the end of the line.
These are commonly used to just leave quick thoughts in your code.

```cpp
/*
 * This is a multiline comment
 */
```

Multiline comments start with a `/*` and last until a `*/`. These are commonly used to leave longer thoughts in your
code, such as detailed documentation. You may frequently see many developers use `//` on multiple lines in a row instead
of using the dedicated multiline comment style.

## Keywords

C++ reserves a set of words in the language for its own use. Developers may use these keywords, but meaning cannot be
provided to these keywords. In the above example on [Expression Statements](#expression-statements), `int` is a keyword.
You can find a list of all keywords on [cppreference](https://en.cppreference.com/w/cpp/keyword). Fundamental types are
an example of keywords. These types will be covered in more detail [later](#fundamental-data-types-and-literals).

In addition to keywords, C++ has a concept of identifiers with special meanings. These are frequently available for use,
but are reserved for the language to use in certain contexts. We will cover these in more detail in later chapters.

```cpp
int my_integer_value = 0; // int is a keyword
float pi = 3.14f;         // float is a keyword
```

## Initialization vs Assignment

When we first create a variable in C++, it undergoes a process called initialization. Initialization is the process of
providing a variable with an initial value.

```cpp
int foo = 0;
```

The above statement is one of the most common ways to initialize a variable. It gives the variable `foo` an initial
value of `0`. There are many ways to initialize a variable, each having its own pros and cons. The different types of
initialization will be discussed in more detail in another section.

Assignment is a process that takes place after a variable already exists. It is the process of assigning a new value to
an existing variable.

```cpp
int foo = 0; // Initialization
foo = 2;     // Assignment
```

Like initialization, assignment has several different forms that will be discussed in more dtail in a later chapter.

## Fundamental Data Types and Literals

Data types are a way in code to represent a unit of data. Programmers will build data types using other data types. C++
provides developers with a set of data types built into the language, called fundamental types. Fundamental types cannot
be split further without losing meaning. You can think of these types as the "atoms" of your programs.

### Booleans

The most fundamental type that can hold a value is a boolean. A boolean is a representation of `true` or `false`.

### Integer Types

An integer type in C++ is the same as the integer concept in math. Integer types represent real numbers with no decimal
part. C++ provides integer types that can support different ranges of values.

| Type          | Minimum Range                                           | Minimum Width in Bits |
| ------------- | ------------------------------------------------------- | --------------------- |
| `signed char` | [-128, 127]                                             | 8                     |
| `short`       | [-32768, 32767]                                         | 16                    |
| `int`         | [−32768, 32767]                                         | 16                    |
| `long`        | [−2,147,483,648, 2,147,483,647]                         | 32                    |
| `long long`   | [−9,223,372,036,854,775,808, 9,223,372,036,854,775,807] | 64                    |

The above types are called signed types. This means that these types can represent negative values. C++ also has
unsigned types, only supporting non-negative types.

| Type                 | Minimum Range                   | Minimum Width in Bits |
| -------------------- | ------------------------------- | --------------------- |
| `unsigned char`      | [0, 255]                        | 8                     |
| `unsigned short`     | [0, 65535]                      | 16                    |
| `unsigned int`       | [0, 65535]                      | 16                    |
| `unsigned long`      | [0, 4,294,967,295]              | 32                    |
| `unsigned long long` | [0, 18,446,744,073,709,551,615] | 64                    |

::: info

These are just minimum ranges for values. Many platforms use different data models. On 64-bit Windows, the signed and
unsigned variants of `int` is 32 bits in width. On 64 bit \*nix systems, a signed or unsigned `int` is 32 bits and a
signed or unsigned `long` is 64 bits.

:::

### Character Types

In addition to `signed char` and `unsigned char`, C++ has a type `char`. All three of these types are used for character
representation. The standard does not specify if `char` is signed or unsigned, but its signedness is determined by the
compiler and is usually the most optimal representation for a single byte character on the platform. On x86-64, char is
typically signed, whereas on ARM64, it is typically unsigned.

For characters that are not able to be represented in a single byte, C++ provides other distinct types for wider
character storage.

- `wchar_t` - A character type that is typically wider than the `char` type. On \*nix platforms, it is typically 32 bits
  in width. On windows platforms, it is typically 16 bits in width.
- `char8_t` - A character type that can represent any UTF-8 character representation.
- `char16_t` - A character type that can represent any UTF-16 code point.
- `char32_t` - A character type that can represent any UTF-32 code point.

### Floating Point Types

A floating point type is a real number that can have a decimal part. However, floating point types cannot represent all
decimal numbers, as computers have a fixed size for processing numbers. Thus, computers use various representations to
approximate decimals.

::: info

Because C++ needs to support many different types of computers, it does not enforce that floating points are represented
in a specific way. For the sake of this tutorial, we will assume that you are working on a device that uses the IEEE-754
floating point specification. This is the case for almost all consumer hardware. The rest of the tutorial will make the
assumption that a `float` is an IEEE-754 single precision float and that a `double` is an IEEE-754 double precision
float.

:::

| Type     | Range                  | Width |
| -------- | ---------------------- | ----- |
| `float`  | $\pm 3.402 * 10^{38}$  | 32    |
| `double` | $\pm 1.797 * 10^{308}$ | 64    |

The language also provides a type `long double`, which is at least as large as a `double`.

### Void

The last of the fundamental types we are going to cover is the concept of `void`. `void` is a data type that represents
an empty set of values. You cannot create an object of type `void`, but it can be used in useful ways that will be
discussed later.

### Literals

Literals are a way that C++ allows us to provide a value directly in the code. You may recall above where the code
snippets were creating variables using numbers in the code. Those numbers are referred to as literals.

Integer literals are just numbers in code with no trailing decimal portion. By adding a `u`, you can tell the compiler
that the literal represents an unsigned integer type. Floating point literals are numbers in code with a trailing
decimal portion. Without a `f` at the end, the compiler will treat the number as a `double`. By adding a trailing `f`,
the compiler now treats it as a `float.

```cpp
int foo = 3; // This is an integer literal
int ufoo = 3u; // This is an unsigned integer literal
float bar = 3.14f; // This is a floating point literal for a float
double baz = 3.14; // This is a floating point literal for a double
```

## Basic Operators

Operators are a type of expression that uses symbols to provide meaning. For example, `+` is an operator. As you may
have assumed, `+` is typically used to add values together. Here, we'll introduce a handful of operators that you can
use with the types you learned about above:

| Operator | Name           | Function                                  |
| -------- | -------------- | ----------------------------------------- |
| `+`      | Addition       | Adds two values                           |
| `-`      | Subtraction    | Subtracts two values                      |
| `*`      | Multiplication | Multiplies two values                     |
| `/`      | Division       | Divides two values                        |
| `%`      | Remainder      | Returns the remainder of integer division |
| `=`      | Assignment     | Assigns a value to a variable             |

::: info

The assignment operator can be used both for initialization and assignment of variables.

:::

In your exploration of the language so far, you may have noticed that there is a `^` operator. In math, you may think of
this as a power operator. In C++, this operator has a different meaning that will be discussed in a later chapter on
[bitwise operators](/resources/cpp/operators#bitwise-operators).

## Wrapping Up

In the above sections, we've covered the basics of a C++ program. At this point, you should know the basics of how a C++
program is structured, how to create a variable, some of the types that C++ provides you, and some of the operations
provided to you on those types. Additionally, you should be able to write a comment in your code. Let's bring this
together and write a simple program that changes Fahrenheit to Celsius.

The equation to convert the two is very simple: $C = (F - 32) / (9 / 5)$.

Because temperature is not a integer value, but a real number, we will use `double` to store our variables.

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
