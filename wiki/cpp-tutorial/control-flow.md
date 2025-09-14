---
wip: true
---

# Control Flow

## What is Control Flow?

Control flow is the order in which instructions are executed in a program. You can specify the control flow of a program
by using control flow statements. Without these statements program will execute every instruction one after another
(sequentially).

| Type of control flow    | Type of statement     |
| ----------------------- | --------------------- |
| Sequential              | (By default)          |
| Jump                    | goto, break, continue |
| Branching (Conditional) | if-else, switch       |
| Looping (Iterative)     | for-loop, while-loop  |

## Branches

Branching in programming means executing different sets instructions (branches) based on some condition. This condition
is any expression that evaluates to a boolean.

### If Statement

If statement runs a block of code if the condition is `true` (execution jumps to the end of the if-statement if
condition is `false`).

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

### While Loop

While loop keeps executing a block of code while condition is `true`. Condition gets checked at the start of the while
statement and jumps to the end if condition is `false`.

```cpp
while(condition) {
    // loop body
}
```

:::info While loop is equivalent to

```cpp
LOOP_START:
{
    if (condition) {
        // loop body
        goto LOOP_START;
    }
}
```

:::

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

Calculating a factorial of a number:

```cpp
#include <iostream>

int main() {
    int number;
    std::cin >> number;

    int factorial = number;
    while(--number) {
        factorial *= number;
    }

    std::cout << "The factorial of " << number << "is " << factorial;
}
```

### Do While Loop

Do-while loop keeps executing a block of code while condition is `true`. Condition gets checked at the end of the
do-while statement and the execution jumps to the start if condition is `true`.

```cpp
do {
    // loop body (executed at least once)
} while(condition);
```

:::info Do-While loop is equivalent to:

```cpp
LOOP_START:
{
    // loop body
    if (condition) {
        goto LOOP_START;
    }
}
```

:::

### For Loop

For loop also keeps executing a block of code while condition is `true`. Init statement evaluates exactly once at the
start. Expression gets always evaluated after the loop body.

```cpp
for(/* init-statement */; /* condition */; /* expression */) {
    // loop body
}
```

:::info For loop is equivalent to:

```cpp
{
    /* init-statement */
    while (condition) {
        /* loop body */
        /* expression */ ;
    }
}
```

:::

This is a valid for loop that loops infinitely:

```cpp
for(;;) {
    // loop body
}
```

Example of printing numbers from 0 to 100 using a for loop:

```cpp
#include <iostream>

int main() {
    // declaration ; condition ; increment
    for(int i = 0; i <= 100; ++i) {
        std::cout << i << '\n';
    }
}
```

Example combining if-else statement and a for loop to play [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz) game for
the first 100 numbers.

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

## Switches

## Conditional Operator
