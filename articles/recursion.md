# Recursion in C and C++
[Recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)) occurs when a function calls itself.
For example, consider two implementations of the [factorial function](https://en.wikipedia.org/wiki/Factorial):

<!-- inline -->
## Iterative
```c
int f(int n) {
  int res = 1, i = 1;
  while (i++ < n)
    res *= i;
  return res;
}
```
As seen here, mutable local variables can help you avoid recursion.

<!-- inline -->
## Recursive
```c
int f(int n) {
  if (n == 0)
    return 1;
  else
    return n * f(n-1);
}
```
`if (n == 0)` here is known as a [base case](https://en.wikipedia.org/wiki/Recursion_(computer_science)#Base_case),
at least one of which is necessary to prevent infinite recursion.

## See Also
<:stackoverflow:1074747016644661258>
[Is recursion ever faster than looping?](https://stackoverflow.com/q/2651112/5740428)<br>
- [learncpp.com - Recursion](https://www.learncpp.com/cpp-tutorial/recursion)
- [Wikipedia - Tail Call](https://en.wikipedia.org/wiki/Tail_call) (important for optimizations)
