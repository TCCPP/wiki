---
wip: true
---

# Control Flow

Control flow is the order in which instructions are executed in a program. You can specify the control flow of a program
by using control flow statements. Without these statements program will execute every instruction one after another
(sequentially).

| Type of control flow statements | Statements            |
| ------------------------------- | --------------------- |
| Conditional                     | if-else, switch       |
| Loop (Iteration)                | for-loop, while-loop  |
| Jump                            | goto, break, continue |

:::info Block (Compound Statement)

Block `{...}` groups a sequence of statements into a single statement, creating a block scope.

:::

## Conditional Statements

Conditional statements (also known as branching statements or selection statements) allow you to execute different sets
instructions (branches of code) based on some condition. This condition is any expression that evaluates to a boolean
(`true` or `false`).

### If Statement

If statement executes a substatement if the condition is `true`.

```cpp
if(condition) {
    /* block executed if condition is true */
}
```

This code updates a `price` of a product where only loyal customers are eligible for a 15% discount (normal customers
pay the regular price):

```cpp
if(eligibleForDiscount) {
    price *= 0.75; /* apply discount of 15% */
}
```

### If Statement With an Else Branch

Else statement executes a substatement if condition is `false`. Else statement always goes after the if statement.

```cpp
if(condition) {
    /* block executed if condition is true */
} else {
    /* block executed if condition is false */
}
```

Example of a code that takes user input and prints if the number is odd or even:

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

Braces are optional. You don't have to use `{...}` (block) when writing if-else statements but it is highly recommended.

```cpp
if(condition) /* if statement */;
else /* else statement */;
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

this is equivalent to:

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

## Loop Statements

The loop statements allow you to execute the same instructions multiple times.

### While Loop

While loop keeps executing a statement while condition is `true`. Condition gets re-evaluated every iteration (this is
true for every type of the loop statement).

```cpp
while(condition) {
    /* block (loop body) */
}
```

Example of printing numbers from 0 to 100 using a while loop:

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

Calculating factorial of a number:

```cpp
#include <iostream>

int main() {
    int fac = 1, num;
    std::cout << "Enter a number: ";
    std::cin >> num;

    while(num) {
        fac *= num;
        --num;
    }

    std::cout << "The factorial of the number is: " << b;
}
```

Calculating nth Fibonacci number:

```cpp
#include <iostream>

int main() {
    int a = 0, b = 1, n;
    std::cout << "Enter a number: ";
    std::cin >> n;

    /* F(n + 2) = F(n + 1) + F(n) */
    while(--n) {
        int swap = b;
        b += a;
        a = swap;
    }

    std::cout << "The nth Fibonacci number is: " << b;
}
```

### Do While Loop

Do-while loop keeps executing a substatement while condition is `true`. Do-while loop is similar to while loop but it
guarantees that the substatement gets executed at least once.

```cpp
do {
    // block (loop body) executed at least once
} while(condition);
```

Example of code that prints out digits of of a number:

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

Example of code that sums up user inputted numbers until user inputs `0`:

```cpp
#include <iostream>
int main() {
    int num;
    int sum = 0;
    do {
        std::cin >> num;
        sum += num;
    } while(num != 0);
    std::cout << "The sum is: " << num;
}
```

### For Loop

For loop also keeps executing a block of code while condition is `true`. Init statement evaluates exactly once at the
start. Expression gets always evaluated after the statement.

```cpp
for(/* init-statement */; /* condition */; /* expression */) {
    /* block (loop body) */
}
```

For loop is equivalent to:

```cpp
{
    /* init-statement */
    while (condition) {
        /* statement */
        /* expression */ ;
    }
}
```

This is a valid for loop that loops infinitely:

```cpp
for(;;) {
    /* block (loop body) */
}
```

Example of printing numbers from 0 to 100 using a for loop:

```cpp
#include <iostream>

int main() {
    for(int i = 0; i <= 100; ++i) {
        std::cout << i << '\n';
    }
}
```

Example combining if-else statement and a for loop to play a word game called
[FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) for the first 100 numbers.

```cpp
#include <iostream>

int main() {
    for(int num = 1; num <= 100; ++num) {
        if(num % 15 == 0) {
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

The break statement allows you to stop a loop early. Here is an example of a simple guessing game:

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

The continue statement allows you to skip the rest of the body.

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

Goto statement allows you to jump to a defined label. You can only jump to a label within the same function. Goto
statements make code less readable and you should avoid using them. Here is a code equivalent of a while loop:

```cpp
LOOP_LABEL:
if(condition) {
    /* statement */
    goto LOOP_LABEL;
}
```

Jumping into an if statement:

```cpp
goto LABEL;
if(false) {
    LABEL:
    std::cout << "This code gets executed!";
} else {
    std::cout << "This one doesn't!";
}
```

Jump also cannot bypass variable initialization. This code is invalid and compiler should give you a compilation error:

```cpp
int main() {
    goto LABEL;
    int x = 0;
    LABEL:
    ++x;
}
```

## Switch Statements

Switch statements are very similar to if else statements. Condition gets evaluated once and execution jumps to the
appropriate label. Break statement allows you to jump to the end of the switch statement. There are two labels `case`
and `default`. Case label needs to be followed by a constant expression. There can only be one default label. If none of
the cases apply execution jumps to the end of the switch statement or the default label if specified.

```cpp
switch (condition)
{
case 1:
    std::cout << "One";
    break;
case 2:
    std::cout << "Two";
    [[fallthrough]]; /* Attribute (optional - disables warnings) */
case 3:
    std::cout << "Three";
    break;
}
default:
    std::cout << "Too big!"
```

Example of a minimal calculator that takes in two numbers separated by one of `+-*/` operators.

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

Here is an example of conditional operator usages:

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

Stream insertion operator has precedence `<<` over the ternary operator `?:`

:::
