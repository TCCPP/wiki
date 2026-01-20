---
wip: true
---

# Control Flow

Control flow is the order in which instructions are executed in a program. You can specify the control flow of a program
by using control flow statements (without these statements the program will execute every instruction one after
another).

| Type of control flow statements | Statements            |
| ------------------------------- | --------------------- |
| Conditional                     | if-else, switch       |
| Loop (Iteration)                | for-loop, while-loop  |
| Jump                            | goto, break, continue |

:::info Block Statement (Compound Statement)

Block `{...}` groups a sequence of statements into a single statement, creating a block scope.

:::

## Conditional Statements

Conditional statements (also known as branching statements or selection statements) allow you to execute different sets
of instructions (branches of code) based on some condition. This condition is any expression that evaluates to a boolean
(`true` or `false`).

### If-Statement

An if statement executes code if the condition is `true`.

```cpp
if(condition) {
    /* block executed if condition is true */
}
```

This code updates a `price` of a product where only loyal customers are eligible for a 15% discount (normal customers
pay the regular price):

```cpp
if(eligibleForDiscount) {
    price *= 0.75; /* apply discount of 25% */
}
```

### If-Statement With an Else Branch

An else statement executes code if condition is `false`. Else statements always go after an if statement.

```cpp
if(condition) {
    /* block executed if condition is true */
} else {
    /* block executed if condition is false */
}
```

Implementation of a program that takes user input and prints if the number is odd or even:

```cpp
#include <iostream>

int main() {
    int number;
    std::cout << "Enter a number: ";
    std::cin >> number;

    /* if the remainder of division by 2 is equal to 0 */
    if(number % 2 == 0) {
        std::cout << "Number is even";
    } else { /* number % 2 == 1 */
        std::cout << "Number is odd";
    }
}
```

:::info Braces are optional

You don't have to use `{...}` (block) when writing if-else statements but it is highly recommended (for better code
readability since it can result in mistakes).

```cpp
if(condition) /* if-statement */;
else /* else-statement */;
```

Example of confusing indentation (this is typically a bug because it's almost certainly not what the programmer intended):

```cpp
if(condition)
    std::cout << "This expression is executed only if the condition is true.";
    std::cout << "This expression is always executed.";
```

:::

### Nested If-Statements

You can nest if statements. Most often you will see them nested in the form of an `else if`:

```cpp
if(condition_1) {
    /* 1st block */
    /* condition_1 is true */
} else if(condition_2) {
    /* 2nd block */
    /* condition_1 is false */
    /* condition_2 is true */
} else {
    /* 3rd block */
    /* condition_1 is false */
    /* condition_2 is false */
}
```

this code is equivalent to:

```cpp
if(condition_1) {
    /* 1st block */
} else {
    if(condition_2) {
        /* 2nd block */
    } else {
        /* 3rd block */
    }
}
```

Implementation of a program that prompts user to enter a number, takes user input (number), prints if a number is
positive, negative or a zero:

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

## Loop Statements

Loop statements allow you to execute the same instructions multiple times.

::: info Loop Body

The body of a loop is a common way of referring to a block statement `{...}` that gets executed by the loop.

:::

### While-Loop

A while loop executes its body while its condition is `true`. The condition is checked at the start of every iteration.

```cpp
while(condition) {
    /* loop body */
}
```

Implementation of a program printing numbers from 0 to 100 using a while-loop:

```cpp
#include <iostream>

int main() {
    int n = 0;
    while(n <= 100) {
        std::cout << n << '\n';
        ++n;
    }
}
```

Implementation of a program calculating nth [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_sequence):
(remember that integers can store only a range of values)

```cpp
#include <iostream>

int main() {
    int a = 0, b = 1, n;
    std::cout << "Enter a number: ";
    std::cin >> n;

    /* F(n + 2) = F(n + 1) + F(n) */
    while(--n) {
        int previous_b = b;
        b += a;
        a = previous_b;
    }

    std::cout << "The nth Fibonacci number is: " << b;
}
```

### Do-While-Loop

A do-while loop executes its loop body after every iteration, ensuring the loop body runs at least once regardless of any condition.

```cpp
do {
    // loop body executed at least once
} while(condition);
```

Implementation of a program that prints out digits of a number:

```cpp
#include <iostream>

int main() {
    int num;
    std::cout << "Enter a number: ";
    std::cin >> num;

    do {
        std::cout << num % 10 << '\n';
        num /= 10;
    } while(num != 0);
}
```

Implementation of a program that sums up user inputted numbers until user inputs `0`:

```cpp
#include <iostream>
int main() {
    int sum = 0;
    int num; // declared outside the loop body so it may be referenced in the condition
    do {
        std::cin >> num;
        sum += num;
    } while(num != 0);
    std::cout << "The sum is: " << sum;
}
```

### For-Loop


Similar to a while loop, a for loop also executes its loop body while its condition is `true` (checked at the start of every iteration). For loops have an "init statement" which is evaluated at the start of the loop and can be used to declare variables that are scoped to the loop. For loops also have an "update" statement which is evaluated at the end of every loop iteration, this is often used to increment counters.

```cpp
for(/* init statement */; /* condition */; /* update */) {
    /* loop body */
}

A for loop is a nicer way of writing a while loop and is equivalent to this code:

```cpp
{
    /* init-statement */
    while (condition) {
        /* statement */
        /* update */
    }
}
```

This is a valid for-loop that loops indefinitely:

```cpp
for(;;) {
    /* loop body */
}
```

Implementation of a program printing numbers from 0 to 100 (inclusive) using a for-loop:

```cpp
#include <iostream>

int main() {
    for(int i = 0; i <= 100; ++i) {
        std::cout << i << '\n';
    }
}
```

Implementation of a program combining if-else statement and a for-loop to play a word game called
[FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) for the first 100 numbers (1 to 100).

```cpp
#include <iostream>

int main() {
    for(int num = 1; num <= 100; ++num) {
        if(num % 3 == 0 && num % 5 == 0) {
            std::cout << "FizzBuzz";
        } else if(num % 3 == 0) {
            std::cout << "Fizz";
        } else if(num % 5 == 0) {
            std::cout << "Buzz";
        } else {
            std::cout << num;
        }
        std::cout << '\n';
    }
}
```

## Jump statements

### Break Statement

The break statement allows you to stop (terminate) the enclosing loop early without checking the condition.
Implementation of a simple guessing game:

```cpp
#include <iostream>

int main() {
    int number = 1234;
    int guess;
    for(;;) { // infinite loop
        std::cout << "Guess a number: ";
        std::cin >> guess;
        if(guess < number) {
            std::cout << "Too low!\n";
        } else if (guess > number) {
            std::cout << "Too high!\n";
        } else {
            std::cout << "You guessed correctly!!!";
            break;
        }
    }
}
```

### Continue Statement

The continue statement allows you to skip the rest of the loop body. The continue statement is often used to reduce
nesting of the statements. Implementation of a program that prints odd numbers:

```cpp
#include <iostream>

int main() {
    for(int i = 0; i < 100; ++i) {
        if(i % 2 == 0) continue;
        std::cout << i << '\n';
    }
}
```

### Goto Statement

Goto statement allows you to jump to a defined label. You can only jump to a label within the same function. Here is a
code equivalent of a while-loop:

```cpp
LOOP_LABEL:
if(condition) {
    /* statement */
    goto LOOP_LABEL;
}
```

Jump cannot bypass variable initialization. This code is invalid and compiler should give you compilation error:

```cpp
int main() {
    goto LABEL;
    int x = 0;
    LABEL:
    ++x;
}
```

:::info

Goto statements are useful. However they make the code less readable and it requires additional knowledge to use them
properly so it might be a good idea to avoid them for now.

:::

## Switch Statements

Switch statements are very similar to if-else statements. The expression gets evaluated once and execution jumps to the
matching label. Break statements allow you to jump to exit the switch statement (without these execution continues through other cases in the switch statement). There are two labels you can
define `case` and `default`. Case label needs to be followed by a constant expression. If none of the cases match the expression, execution jumps to the end of the
switch statement or the default case if one is provided.

```cpp
switch (condition) {
case 1:
    std::cout << "One";
    break;
case 2:
    std::cout << "Two";
    [[fallthrough]]; /* Attribute (optional - disables warnings on fallthrough) */
case 3:
    std::cout << "Three";
    break;
default:
    std::cout << "Default"
}
```

Implementation of a minimal calculator that takes in two numbers separated by one of `+-*/` operators.

```cpp
#include <iostream>
#include <print> // C++23 feature

int main() {
    int x, y;
    char op;
    std::cout << "Enter number operator number";
    std::cin >> x >> op >> y;

    switch(op) {
      case '+':
          std::println("Sum: {} + {} = {}", x, y, x + y);
          break;
      case '-':
          std::println("Difference: {} - {} = {}", x, y, x - y);
          break;
      case '*':
          std::println("Product: {} * {} = {}", x, y, x * y);
          break;
      case '/':
          std::println("Quotient (rounded down): {} / {} = {}", x, y, x / y);
          break;
      default:
          std::println("Invalid operator!!!");
    }
}
```

## Conditional Operator

Conditional operators are ternary operators (operators taking in 3 operands). If second and third operands are of the
same type, the result is of that type.

```cpp
(condition) ? /* condition true */ : /* condition false */;
```

Here is an example of conditional operator usage:

```cpp
int main() {
    int x, y;
    std::cin >> x >> y;
    int max = (x > y) ? x : y;
    std::cout << "The maximum is: " << max << '\n';
    std::cout << "The ordering is: " << ((x == y) ? "Equal to" : (x < y) ? "Less than" : "Greater than");
}
```

::: info

Stream insertion operator has precedence `<<` over the ternary operator `?:`. See
[article](https://en.cppreference.com/w/cpp/language/operator_precedence.html) for more information about operator
precedence.

:::
