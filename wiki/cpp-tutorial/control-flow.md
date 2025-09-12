---
wip: true
---

# Control Flow

## What is Control Flow?

Control flow is the order in which instructions are executed in a program. You can specify the control flow of a program
by using control flow statements. Without these statements program will execute every instruction one after another
(sequentially).

The 3 main control flows are

- Sequential
- Branching (Conditional)
- Looping (Iterative)

## Branches

Branching in programming means executing different sets instructions (branches) based on some condition. This condition
is any expression that evaluates to a boolean.

### If Statement

If statement runs a block of code if the condition is `true`.

```cpp
if(condition) {
    // block of code executed if condition is true
}
```

This code updates a `price` of a product where only loyal customers are eligible for a 15% discount (normal customers
pay the regular price):

```cpp
if(eligibleForDiscount) {
    price *= 0.75; // apply discount of 15%
}
```

### If Statement With an Else Branch

Else statement runs a block of code if condition is `false`. Else statement always goes after the if statement.

```cpp
if(condition) {
    // block of code executed if condition is true (if block)
} else {
    // block of code executed if condition is false (else block)
}
```

Example of a code that takes user input and prints if the number is odd or even:

```cpp
#include <iostream>

int main() {
    int number;
    std::cout << "Enter a number: ";
    std::cin >> number;

    if(number % 2 == 0) { // if the remainder of division by 2 is equal to 0
        std::cout << "Number is even";
    } else { // number % 2 == 1
        std::cout << "Number is odd";
    }
}
```

Braces are optional. You don't have to use `{...}` when writing if-else statements but it is highly recommended.

```cpp
if(condition) /* if block */;
else /* else block */;
```

Example of confusing indentation:

```cpp
if(condition)
    std::cout << "This expression executed only if condition is true.";
    std::cout << "This expression is always executed.";
```

### Nested If Statements

You can nest if statements. Most often you will see them nested using the `else if` expression.

```cpp
if(condition_1) {
    // 1st block
    // condition_1 is true
} else if(condition_2) {
    // 2nd block
    // condition_1 is false
    // condition_2 is true
} else {
    // 3rd block
    // condition_1 is false
    // condition_2 is false
}
```

this is equivalent to:

```cpp
if(condition_1) {
    // 1st block
} else {
    if(condition_2) {
        // 2nd block
    } else {
        // 3rd block
    }
}
```

Example of code that prints if a number is positive, negative or a zero:

```cpp
#include <iostream>

int main() {
    int number;
    std::cout << "Enter a number: ";
    std::cin >> number;

    if(number > 0) {
        std::cout << "Positive";
    } else if(number < 0) {
        std::cout << "Negative";
    } else {
        std::cout << "Zero";
    }
}
```

## Looping

## Switches

## Conditional Operator
