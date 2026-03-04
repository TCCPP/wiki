---
bot_article: |
  # Generating Random Numbers in C++
  ## Example: Printing Ten Random Dice Rolls

  ```cpp
  #include <random>
  #include <iostream>

  int main() {
    // initialize a random device
    std::random_device dev;

    // seed default_random_engine
    std::default_random_engine gen{dev()};

    // initialize a uniform integer distribution
    std::uniform_int_distribution<int> dis{1, 6};

    // roll the dice
    for (int i = 0; i < 10; ++i) {
        std::cout << dis(gen) << ' ';
    }
  }
  ```

  ## Possible Output (will be different each time)
  ```cpp
  1 1 6 5 2 2 5 5 6 2
  ```
---

# Generating Random Numbers

A [Pseudorandom Number Generator (PRNG)](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) is an algorithm
for generating a sequence of (almost) random numbers. PRNGs maintain an internal state that is updated each time a new
number is generated. The initial state of the PRNG is called the seed and the process of setting the initial state is
called seeding.

In the [C++ standard library](https://en.cppreference.com/w/cpp/header/random), random engines are callable objects that
implement PRNG algorithms behind a
[shared interface](https://en.cppreference.com/w/cpp/named_req/RandomNumberEngine.html).

Unlike the C `rand()` function, which relies on common shared seed via `srand()`, the C++ random engines are independent
and each one has its own seed. This ensures thread safety, whereas C `rand()` does not. Another thing worth mentioning
about `rand()` is that it is implementation defined and can vary system to system. The C++ random library should be
always preferred.

It should be noted that none of these PRNGs are cryptographically secure (should not be used for security-sensitive
applications). This means that the state of the random engine can be figured out and predicted given enough values.

A common example of a random engine is `std::default_random_engine`, which serves as a standard, general-purpose
generator.

## Example: Printing Ten Random Dice Rolls

First, include the `<random>` header containing the random library. Then create a random number engine and seed it. The
seed determines the sequence of numbers produced.

If you were to use a fixed seed (e.g. `std::default_random_engine gen{42};`) then the program will generate the same
sequence every time it runs. To generate a unique sequence of numbers each time, obtain a random seed from a random
device.

To ensure fairness of dice rolls redistribute the output of random engine using a uniform int distribution.

```cpp
#include <random>
#include <iostream>

int main() {
  // initialize a random device
  std::random_device dev;

  // seed default_random_engine
  std::default_random_engine gen{dev()};

  // initialize a uniform integer distribution
  std::uniform_int_distribution<int> dis{1, 6};

  // roll the dice
  for (int i = 0; i < 10; ++i) {
    std::cout << dis(gen) << ' ';
  }
}
```

## Random Device

A random device ([std::random_device](https://en.cppreference.com/w/cpp/numeric/random/random_device)) is random number
generator that attempts to utilize randomness from a non-deterministic source, typically provided by the operating
system (e.g. reading from `/dev/random` or `/dev/urandom` on UNIX-like systems).

The random device should primarily be used for seeding random engines as it is slow and usually requires system calls.

## Mersenne Twister

[Mersenne Twister (MT)](https://en.wikipedia.org/wiki/Mersenne_Twister) is a general-purpose PRNG with good statistical
properties and a very fast speed.

The C++ standard library provides two predefined MT-based engines the 32 bit version
[`mt19937`](https://timsong-cpp.github.io/cppwp/n4868/rand.predef#lib:mt19937) and the 64 bit version
[`mt19937_64`](https://timsong-cpp.github.io/cppwp/n4868/rand.predef#lib:mt19937_64).

The name `mt19937` comes from the fact that Mersenne Twister algorithm is based on Mersenne primes—specifically the
prime number $2^{19937} - 1$. It is also the number of possible states MT will reach before returning back to the
initial state.

The main limitation of the MT engine is its large internal state size of exactly `624 * sizeof(std::uint_fast32_t)`
bytes for `mt19937`. Because of this size MT engine makes is less suitable for multi-threaded applications than other
PRNGs with a smaller state.

```cpp
#include <iostream>
#include <random>

int main() {
    // initialize a random device
     std::random_device dev;

    // initialize Mersenne Twister engine with seed sequence
    std::mt19937 gen{dev()};

    // initialize a uniform real distribution
    std::uniform_real_distribution<double> dis{0.0, 1.0};

    // generate random numbers in the interval [0, 1)
    for (int i = 0; i < 100; ++i) {
        double random_number = dis(gen);
        std::cout <<  random_number << std::endl;
    }
}
```

## Seed Sequence

Seed sequence (`std::seed_seq`) is an utility in the standard library for converting a small number of inputs into a
higher quality seed (does not contain large areas of zeros/ones) suitable for seeding PRNGs with large internal state
(e.g. `std::mt19937`).

```cpp
#include <iostream>
#include <random>

int main() {
    // initialize seed sequence
    std::seed_seq seq{1, 2, 3, 4};

    // initialize Mersenne Twister engine with seed sequence
    std::mt19937 gen{seq};

    // initialize a uniform real distribution
    std::uniform_real_distribution<double> dis{0.0, 1.0};

    // generate random numbers in the interval [0, 1)
    for (int i = 0; i < 100; ++i) {
        double random_number = dis(gen);
        std::cout <<  random_number << std::endl;
    }
}
```

## Linear Congruential Generator

[Linear congruential generator (LCG)](https://en.wikipedia.org/wiki/Linear_congruential_generator) is a very simple PRNG
with a small internal state of `sizeof(std::int_fast32_t)` bytes.

The C++ standard library provides three predefined LCG-based engines
[`minstd_rand0`](https://timsong-cpp.github.io/cppwp/n4868/rand.predef#lib:minstd_rand0) (minimal standard 0),
[`minstd_rand`](https://timsong-cpp.github.io/cppwp/n4868/rand.predef#lib:minstd_rand) (minimal standard) and
[`knuth_b`](https://timsong-cpp.github.io/cppwp/n4868/rand.predef#lib:knuth_b) (shuffled LCG).

The statistical quality of all these 3 generators is not considered good by modern standards. Typically LCG are
considered fast but `minstd_rand0` and `minstd_rand` are not necessarily faster than `mt19937` on modern hardware. The
`knuth_b` engine slightly improves the statistical properties of `minstd_rand0` by shuffling the generated sequence.

## Predefined Generators

| Name                  | Generator                 | Summary                                |
| --------------------- | ------------------------- | -------------------------------------- |
| default_random_engine | implementation defined    | Reproducibility is not important       |
| minstd_rand0          | linear congruential       | Small internal state                   |
| minstd_rand           | linear congruential       | Small internal state                   |
| mt19937               | mersenne twister          | Generally should be preferred          |
| mt19937_64            | mersenne twister          | Generally should be preferred          |
| ranlux24              | subtract with carry       | Statistical quality                    |
| ranlux48              | subtract with carry       | Statistical quality                    |
| knuth_b               | minstd_rand0 with shuffle | Almost no reason to use it             |
| philox4x32 (C++26)    | counter-based philox      | Good for multi-threaded applications\* |
| philox4x64 (C++26)    | counter-based philox      | Good for multi-threaded applications\* |

\*Not yet implemented

[source](https://timsong-cpp.github.io/cppwp/n4868/rand.predef)

## Distributions

- **[std::uniform_int_distribution](https://en.cppreference.com/w/cpp/numeric/random/uniform_int_distribution)**
- **[std::uniform_real_distribution](https://en.cppreference.com/w/cpp/numeric/random/uniform_real_distribution)**
- **[std::normal_distribution](https://en.cppreference.com/w/cpp/numeric/random/normal_distribution)**
- **[all distributions](https://en.cppreference.com/w/cpp/named_req/RandomNumberDistribution)**

## See Also

- **[UniformRandomBitGenerators](https://en.cppreference.com/w/cpp/named_req/UniformRandomBitGenerator)**
- **[Pseudo-random number generation](https://en.cppreference.com/w/cpp/numeric/random)**
- **[Generate random numbers using C++11 random library](https://stackoverflow.com/q/19665818/5740428)**
- **[Why is the use of rand() considered bad?](https://stackoverflow.com/q/52869166/5740428)**
- **[ChaCha20](https://cr.yp.to/chacha.html)**
- **[A PRNG Shootout](https://prng.di.unimi.it/)**
- **[PCG Random](https://pcg-random.org/)**
- **[myths about urandom](https://www.2uo.de/myths-about-urandom/)**
- **[boost::random](https://www.boost.org/library/latest/random/)**
