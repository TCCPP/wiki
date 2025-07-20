# How to Name Your Variables

- names should be short, but descriptive
- avoid single-character names like `a`
  - sometimes they are okay, like `i` for loop indices
- avoid excessive abbreviations like `tok` for `tokenize`, `cpy` for `copy`
- choose a consistent style

<!-- inline -->
## Bad Example
```c
int a;
int rct =
  scanf("%d", &a);
if (rct != 1)
  return -1;
printf("age: %d", a);
```

<!-- inline -->
## Good Example
```c
int age;
int readCount =
  scanf("%d", &age);
if (readCount != 1)
  return -1;
printf("age: %d", age);
```

## Naming Conventions
Above all else, use conventions consistently.
For example, `PascalCase` for classes, `camelCase` for variables/functions, `CAPS_CASE` for macros.
The C++ standard library uses `snake_case` for almost everything, but many developers do not follow this style.

The C standard library is a good example for breaking rule 4. It uses abbreviations extensively, which might harm readability (compare `strstr` `strtok` `strcspn`).

## See Also
- [Short article on naming conventions](https://www.theserverside.com/feature/A-guide-to-common-variable-naming-conventions)
