---
alias: scanf-whitespace
bot_article: |
  # Handling Whitespace in scanf

  The `%c` format specifier for `scanf` can cause some subtle bugs due to how whitespace in the program input is
  handled.

  ## The Fix

  Add a space before `%c` to skip whitespace:
  ```c
  scanf(" %c", &c);
  ```
  The leading space matches any amount of whitespace (including none).
---

# Handling Whitespace in scanf

Consider a program that asks for a quantity and then a yes/no confirmation:

```c
#include <stdio.h>

int main() {
    int quantity;
    char confirm;
    printf("Enter quantity: ");
    scanf("%d", &quantity);
    printf("Order %d items? (y/n): ", quantity);
    scanf("%c", &confirm);
    printf("You entered: '%c'\n", confirm);
}
```

When you run this program and answer the first prompt by typing a number like `5` then pressing [k:Enter:], the program
skips right past the confirmation prompt:

```
Enter quantity: 5
Order 5 items? (y/n): You entered: '
'
```

The program never waited for you to type y or n. What's going on?

## Why This Happens

When you type `5` and press [k:Enter:], the input buffer contains `5\n`. The `scanf("%d", &quantity)` reads `5` but
leaves `\n` in the buffer. Then `scanf("%c", &confirm)` immediately reads that leftover newline instead of waiting for
new input.

This happens because `%c` reads _exactly one character_, including whitespace. Most other format specifiers like `%d`
and `%s` automatically skip leading whitespace, but `%c` does not. This is intentional: if `%c` skipped whitespace,
there would be no way to read a space or newline character.

## The Solution

Add a space before `%c` in the format string:

```c
scanf(" %c", &confirm); // Note the space before %c
```

A space in a `scanf` format string tells it to skip any amount of whitespace before reading the next value. This
consumes leftover newlines or spaces before reading the character you actually want.

```c
#include <stdio.h>

int main() {
    int quantity;
    char confirm;
    printf("Enter quantity: ");
    scanf("%d", &quantity);
    printf("Order %d items? (y/n): ", quantity);
    scanf(" %c", &confirm);  // Space before %c skips the leftover newline
    printf("You entered: '%c'\n", confirm);
}
```

Now the program works as expected:

```
Enter quantity: 5
Order 5 items? (y/n): y
You entered: 'y'
```

## Quick Reference

**Specifiers that skip leading whitespace:** `%d`, `%i`, `%f`, `%lf`, `%s`, `%u`, `%x`, `%o`, `%p`

**Specifiers that do NOT skip whitespace:** `%c`, `%[...]` (scansets)

For the specifiers that don't skip whitespace, add a space before them when needed: `" %c"`, `" %[a-z]"`.

## Alternative: Line-Based Input

For more complex input parsing, consider reading entire lines with `fgets` and parsing with `sscanf`. This avoids
whitespace issues entirely and gives you more control over error handling:

```c
char line[256];

fgets(line, sizeof(line), stdin);
sscanf(line, "%d", &quantity);

fgets(line, sizeof(line), stdin);
sscanf(line, "%c", &confirm);
```

## See Also

- [cppreference: scanf](https://en.cppreference.com/w/c/io/fscanf)
