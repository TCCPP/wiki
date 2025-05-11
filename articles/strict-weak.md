# What Is a Strict Weak Ordering in C++?

Algorithms like **[std::sort][sort]** and containers like **[std::set]()** require a *[Compare][cmp]* function, which
induces a *[strict weak ordering][sw]*. This means that the comparison `comp(x, y)` has to behave similar to `x < y`:
1. `x < x` is false (*Irreflexivity*) (this makes it *strict*)
2. `x < y && y < z` implies `x < z` (*Transitivity*)
3. `x < y` implies `!(y < x)` (*Asymmetry*)
4. (see below)

[sort]: https://en.cppreference.com/w/cpp/algorithm/sort
[set]: https://en.cppreference.com/w/cpp/container/set
[cmp]: https://en.cppreference.com/w/cpp/named_req/Compare
[sw]: https://en.wikipedia.org/wiki/Weak_ordering#Strict_weak_orderings

## 4. Transitivity of Equivalence
Elements are allowed to be equivalent, i.e. `equiv(x, y)` is similar to `x == y`:
- let `equiv(x, y)` be `!(x < y) && !(y < x)`
- then `equiv(x, y) && equiv(y, z)` implies `equiv(x, z)` (*Transitivity*)

For example, when ordering strings by length, strings of the same length are
equivalent to each other, but not to other strings.
This satisfies **4.**.

It is **not okay** to have elements like `NaN` because by the transitive definition `equiv(NAN, 1)` and `equiv(NAN, 2)`
are true; but `1` is not equal to `2`.
`NaN` is equivalent to everything because `NaN < x` is always false.

## See Also
<:stackoverflow:1074747016644661258>
[Operator< and strict weak ordering](https://stackoverflow.com/q/979759/5740428)<br>
- `!wiki overload-less`
