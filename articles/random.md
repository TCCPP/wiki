# Generating Random Numbers in C++

The [<random>][1] header in C++ provides (pseudo-)random number generation (PRNG):
- *[UniformRandomBitGenerators][2]* produce random bits (entropy)
- *[RandomNumberDistributions][3]* use entropy to generate random numbers

[1]: https://en.cppreference.com/w/cpp/header/random
[2]: https://en.cppreference.com/w/cpp/named_req/UniformRandomBitGenerators
[3]: https://en.cppreference.com/w/cpp/named_req/RandomNumberDistribution

## Example: Printing Ten Random Dice Rolls
```cpp
#include <random>
#include <iostream>
int main() {
  std::random_device dev; // for seeding
  std::default_random_engine gen{dev()};
  std::uniform_int_distribution<int> dis{1, 6};
  for (int i = 0; i < 10; ++i)
    std::cout << dis(gen) << ' ';
}
```

## Possible Output (will be different each time)
```cpp
1 1 6 5 2 2 5 5 6 2
```

<!-- inline -->
## Common Generators
- **[std::random_device](https://en.cppreference.com/w/cpp/numeric/random/random_device)**: truly random
- **[std::default_random_engine](https://timsong-cpp.github.io/cppwp/n4868/rand.predef#lib:default_random_engine)**
- **[std::mt19937](https://timsong-cpp.github.io/cppwp/n4868/rand.predef#lib:mt19937)**: popular default choice

<!-- inline -->
## Common Distributions
- **[std::uniform_int_distribution](https://en.cppreference.com/w/cpp/numeric/random/uniform_int_distribution)**
- **[std::uniform_real_distribution](https://en.cppreference.com/w/cpp/numeric/random/uniform_real_distribution)**
- **[std::normal_distribution](https://en.cppreference.com/w/cpp/numeric/random/normal_distribution)**

## See Also
- [Pseudo-random number generation](https://en.cppreference.com/w/cpp/numeric/random)<br>
<:stackoverflow:1074747016644661258>
[Generate random numbers using C++11 random library](https://stackoverflow.com/q/19665818/5740428)<br>
<:stackoverflow:1074747016644661258>
[Why is the use of rand() considered bad?](https://stackoverflow.com/q/52869166/5740428)
