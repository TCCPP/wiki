# Operators

In any programming language, the core standard provides simple ways to do various operations on numbers, variables, pointers, even functions with operator overloading. In C++, we are also provided with various operators that we can use to do different tasks. Usually they have the same symbols and methodology as elementary mathematics. We will discuss what are operators and how are they separated into groups by the C++ standard below.

## What Are Operators?

As discussed above, operators are symbols used to perform operations on variables or values. For example:

```c++
int value = 5 + 10; // value = 15
```

We can also do operations between variables or even variables and values like:

```c++
int a = 5;
int b = 10;
int value = a + b; // value = 15
// OR
int result = 10 + a; // result = 15
```

Operators in C++ can be classified into 6 groups:

1. Arithmetic Operators
2. Assignment Operators
3. Relational Operators
4. Logical Operators
5. Bitwise Operators
6. Other Operators

## Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations. These are the most commonly used operators and work similarly to basic mathematics.

|Operator|Description|Example|Result|
|---|---|---|---|
|`+`|Addition|`5 + 3`|`8`|
|`-`|Subtraction|`5 - 3`|`2`|
|`*`|Multiplication|`5 * 3`|`15`|
|`/`|Division|`10 / 2`|`5`|
|`%`|Modulus/Reminder|`10 % 3`|`1`|
|`++`|Increment|`int a = 5; a++`|`6`|
|`--`|Decrement|`int a = 5; a--`|`4`|

### Basic Examples for Arithmetic Operators:

```c++
int a = 10;
int b = 3;

int sum = a + b;        // 13
int difference = a - b; // 7
int product = a * b;    // 30
int quotient = a / b;   // 3 (integer division)
int remainder = a % b;  // 1
```

### Division Behavior

Division in C++ behaves differently based on the types of the values or variables involved. Some examples are given below:

```c++
int x = 7 / 2;      // 3 (integer division, decimal part truncated)
double y = 7.0 / 2; // 3.5 (floating-point division)
double z = 7 / 2.0; // 3.5 (at least one operand is floating-point)
```

### Increment and Decrement

The increment (`++`) and decrement (`--`) operators have two forms: prefix and postfix.

```c++
int a = 5;
int b = ++a; // Prefix: increment a first, then assign. a = 6, b = 6
int c = a++; // Postfix: assign a first, then increment. a = 7, c = 6

int x = 10;
int y = --x; // Prefix: decrement x first, then assign. x = 9, y = 9
int z = x--; // Postfix: assign x first, then decrement. x = 8, z = 9
```

## Assignment Operators

Assignment operators are used to assign values to variables. The basic assignment operator is `=`, but C++ provides compound assignment operators that combine arithmetic operations with assignment. The assignment is done from left to right, the value of left is assigned the value on right, in some cases after an operation.

| Operator | Description            | Example   | Equivalent To |
| -------- | ---------------------- | --------- | ------------- |
| `=`      | Simple assignment      | `a = 5`   | `a = 5`       |
| `+=`     | Add and assign         | `a += 3`  | `a = a + 3`   |
| `-=`     | Subtract and assign    | `a -= 3`  | `a = a - 3`   |
| `*=`     | Multiply and assign    | `a *= 3`  | `a = a * 3`   |
| `/=`     | Divide and assign      | `a /= 3`  | `a = a / 3`   |
| `%=`     | Modulus and assign     | `a %= 3`  | `a = a % 3`   |
| `&=`     | Bitwise AND and assign | `a &= 3`  | `a = a & 3`   |
| `\|=`    | Bitwise OR and assign  | `a \|= 3` | `a = a \| 3`  |
| `^=`     | Bitwise XOR and assign | `a ^= 3`  | `a = a ^ 3`   |
| `<<=`    | Left shift and assign  | `a <<= 2` | `a = a << 2`  |
| `>>=`    | Right shift and assign | `a >>= 2` | `a = a >> 2`  |

### Examples

```c++
int value = 10;
value += 5;  // value = 15
value -= 3;  // value = 12
value *= 2;  // value = 24
value /= 4;  // value = 6
value %= 4;  // value = 2
```

Compound assignment operators are more concise and can sometimes be more efficient than their long-form equivalents.

## Relational Operators

Relational operators (also called comparison operators) are used to compare two values. They return a boolean result: `true` or `false`.

|Operator|Description|Example|Result|
|---|---|---|---|
|`==`|Equal to|`5 == 5`|`true`|
|`!=`|Not equal to|`5 != 3`|`true`|
|`>`|Greater than|`5 > 3`|`true`|
|`<`|Less than|`5 < 3`|`false`|
|`>=`|Greater than or equal to|`5 >= 5`|`true`|
|`<=`|Less than or equal to|`5 <= 3`|`false`|

### Examples

```c++
int a = 10;
int b = 20;

bool is_equal = (a == b);        // false
bool is_not_equal = (a != b);    // true
bool is_greater = (a > b);       // false
bool is_less = (a < b);          // true
bool is_greater_equal = (a >= 10); // true
bool is_less_equal = (b <= 20);  // true
```

These operators are commonly used in conditional statements:

```c++
int age = 18;

if (age >= 18) {
    std::cout << "You are an adult.\n";
}
```

> [!WARNING]
> 
> Be careful not to confuse `=` (assignment) with `==` (comparison). Using `=` in a conditional statement is a common mistake that can lead to unexpected behavior.

## Logical Operators

Logical operators are used to combine multiple boolean expressions or to invert boolean values. They are essential for creating complex conditional statements.

|Operator|Description|Example|Result|
|---|---|---|---|
|`&&`|Logical AND|`true && false`|`false`|
|`\|`|Logical OR|`true \| false`|`true`|
|`!`|Logical NOT|`!true`|`false`|

### Logical AND (`&&`)

Returns `true` only if both operands are `true`.

```c++
int age = 25;
bool has_license = true;

if (age >= 18 && has_license) {
    std::cout << "You can drive.\n";
}
```

### Logical OR (`||`)

Returns `true` if at least one operand is `true`.

```c++
bool is_weekend = false;
bool is_holiday = true;

if (is_weekend || is_holiday) {
    std::cout << "Time to relax!\n";
}
```

### Logical NOT (`!`)

Inverts the boolean value.

```c++
bool is_raining = false;

if (!is_raining) {
    std::cout << "It's a nice day!\n";
}
```

### Short-Circuit Evaluation

C++ uses short-circuit evaluation for logical operators:

- For `&&`, if the left operand is `false`, the right operand is not evaluated
- For `||`, if the left operand is `true`, the right operand is not evaluated

```c++
int x = 5;
// The second condition is never checked because the first is false
if (x > 10 && ++x > 0) {
    // This won't execute
}
// x is still 5, not 6
```

This behavior can be useful for avoiding errors:

```c++
int* ptr = nullptr;
// Check if ptr is valid before dereferencing
if (ptr != nullptr && *ptr > 0) {
    // Safe to use *ptr here
}
```

## Bitwise Operators

Bitwise operators perform operations on individual bits of integer types. They are useful for low-level programming, working with binary data, flags, and performance-critical code.

|Operator|Description|Example|Result (binary)|
|---|---|---|---|
|`&`|Bitwise AND|`5 & 3`|`1` (`0101 & 0011 = 0001`)|
|`\|`|Bitwise OR|`5 \| 3`|`7` (`0101 \| 0011 = 0111`)|
|`^`|Bitwise XOR|`5 ^ 3`|`6` (`0101 ^ 0011 = 0110`)|
|`~`|Bitwise NOT|`~5`|`-6` (inverts all bits)|
|`<<`|Left shift|`5 << 1`|`10` (`0101 -> 1010`)|
|`>>`|Right shift|`5 >> 1`|`2` (`0101 -> 0010`)|

### Bitwise AND (`&`)

Sets each bit to 1 if both corresponding bits are 1. Otherwise sets the bit to 0.

```c++
unsigned int a = 12; // 1100 in binary
unsigned int b = 10; // 1010 in binary
unsigned int result = a & b; // 1000 in binary = 8
```

Common use: checking if specific bits are set (masking).

```c++
const unsigned int READ_PERMISSION = 0b100;
unsigned int permissions = 0b110;

if (permissions & READ_PERMISSION) {
    std::cout << "Has read permission\n";
}
```

### Bitwise OR (`|`)

Sets each bit to 1 if at least one corresponding bit is 1.

```c++
unsigned int a = 12; // 1100 in binary
unsigned int b = 10; // 1010 in binary
unsigned int result = a | b; // 1110 in binary = 14
```

Common use: setting specific bits (flags).

```c++
const unsigned int READ = 0b100;
const unsigned int WRITE = 0b010;
unsigned int permissions = READ | WRITE; // 0b110
```

### Bitwise XOR (`^`)

Sets each bit to 1 if the corresponding bits are different. If they are the same, set them to 0.

```c++
unsigned int a = 12; // 1100 in binary
unsigned int b = 10; // 1010 in binary
unsigned int result = a ^ b; // 0110 in binary = 6
```

Common use: toggling bits or simple encryption.

```c++
int value = 42;
int key = 123;
int encrypted = value ^ key;
int decrypted = encrypted ^ key; // Back to 42
```

### Bitwise NOT (`~`)

Inverts all bits (1 becomes 0, 0 becomes 1).

```c++
unsigned int a = 12; // 00001100 in binary (assuming 8 bits)
unsigned int result = ~a; // 11110011 in binary
```

### Left Shift (`<<`)

Shifts bits to the left, filling with zeros. Each shift left multiplies the value by 2.

```c++
unsigned int a = 5;  // 0101 in binary
unsigned int result = a << 2; // 10100 in binary = 20
```

### Right Shift (`>>`)

Shifts bits to the right. Each shift right divides the value by 2 (integer division).

```c++
unsigned int a = 20; // 10100 in binary
unsigned int result = a >> 2; // 00101 in binary = 5
```

> [!NOTE]
> 
> For signed integers, right shift behavior is implementation-defined. Some systems perform arithmetic shift (sign extension), while others perform logical shift (zero fill).

> [!NOTE] For Advanced Programmers
> 
> Be aware of type promotion when using bitwise operators. Small integer types like `char` and `short` are promoted to `int` before bitwise operations, which can lead to unexpected results with the NOT operator. Also, shifting by an amount greater than or equal to the bit width of the type results in undefined behavior.

## Other Operators

C++ provides several other operators that don't fit into the previous groups but are essential for various programming tasks. Do keep in mind this operators are useful as you learn more about C++ so feel free to use them whenever you get the chance.

### Ternary Operator (`? :`)

The ternary operator is a shorthand for `if-else` statements. It takes three operands.

**Syntax:** `condition ? value_if_true : value_if_false`

```c++
int a = 10;
int b = 20;
int max = (a > b) ? a : b; // max = 20

// This is Equivalent to:
int max;
if (a > b) {
    max = a;
} else {
    max = b;
}
```

### Comma Operator (`,`)

The comma operator evaluates multiple expressions from left to right and returns the value of the rightmost expression.

```c++
int a = (5, 10, 15); // a = 15

int x = 1, y = 2;
int result = (++x, ++y); // x = 2, y = 3, result = 3
```

It's most commonly seen in `for` loops:

```c++
for (int i = 0, j = 10; i < j; ++i, --j) {
    // Multiple operations in the increment section
}
```

### Sizeof Operator

The `sizeof` operator returns the size (in bytes) of a type or variable.

```c++
int size_of_int = sizeof(int);        // Usually 4
int size_of_double = sizeof(double);  // Usually 8

int array[10];
int array_size = sizeof(array);       // 40 (assuming int is 4 bytes)
int array_length = sizeof(array) / sizeof(array[0]); // 10
```

### Member Access Operators

These operators are used to access members of structures, classes, and pointers.

```c++
struct Point {
    int x;
    int y;
};

Point p;
p.x = 10;     // Dot operator for direct access
p.y = 20;

Point* ptr = &p;
ptr->x = 30;  // Arrow operator for pointer access
ptr->y = 40;

// ptr->x is equivalent to (*ptr).x
```

### Address-Of and Dereference Operators

The address-of operator (`&`) returns the memory address of a variable, while the dereference operator (`*`) accesses the value at a given address.

```c++
int value = 42;
int* ptr = &value;  // ptr holds the address of value
int result = *ptr;  // result = 42 (dereference ptr)

*ptr = 100;         // Changes value to 100
```
> [!NOTE]
> 
> `&` cannot be used with a null value, meanwhile a pointer can be null. You would learn more on pointers later in the wiki.
### Scope Resolution Operator (`::`)

The scope resolution operator is used to access global variables, static members, and namespace members.

```c++
int value = 10; // Global variable

int main() {
    int value = 20; // Local variable
    std::cout << value << '\n';   // 20 (local)
    std::cout << ::value << '\n'; // 10 (global)
}

// Accessing namespace members
std::cout << "Hello\n";

// Accessing static class members
class MyClass {
public:
    static int count;
};
int x = MyClass::count;
```

### Cast Operators

C++ provides several cast operators for type conversion (C++11 and later also includes more sophisticated casting mechanisms).

```c++
double pi = 3.14159;
int truncated = (int)pi;           // C-style cast
int truncated2 = static_cast<int>(pi); // C++ style cast (preferred)
```

> [!NOTE] For Advanced Programmers
> 
> C++ provides four named cast operators: `static_cast`, `dynamic_cast`, `const_cast`, and `reinterpret_cast`. These provide more type safety and clarity than C-style casts and should be preferred in modern C++. Additionally, operator precedence and associativity become important when combining multiple operators in complex expressions.

## Experimenting with Operators

As you continue learning C++, you'll discover that operators can be used in creative and powerful ways. Some of this areas are operator overloading, combining operators, bitwise tricks, etc.

The best way to master operators is through practice. Try:

- Writing programs that use different combinations of operators
- Experimenting with operator precedence to understand evaluation order
- Implementing algorithms that leverage bitwise operations
- Creating your own classes with overloaded operators

Remember that readable code is often more important than clever tricks. Use operators in ways that make your intent clear to other programmers (or yourself in the future).

> [!NOTE] For Advanced Programmers
> 
> Consider exploring topics like expression templates, SFINAE with operators, the spaceship operator (`<=>`) introduced in C++20, and how compilers optimize operator usage. The `constexpr` keyword can also be applied to operator overloads for compile-time evaluation. Understanding move semantics and perfect forwarding becomes crucial when overloading assignment operators and implementing efficient operator overloads.


