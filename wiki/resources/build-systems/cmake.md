---
alias: cmake
bot_article: |
  # CMake

  CMake is the most widely used build system for C++. It has good portability, compiler support, and IDE integration.

  The main downside is learning CMake's configuration language, but the investment is worthwhile.

  **Recommended resource:** [An Introduction to Modern CMake](https://cliutils.gitlab.io/modern-cmake/README.html)
---

# CMake

While the C++ development ecosystem is highly fractured and there are dozens upon dozens of build systems, CMake is the
most widely used build system. It has good portability and compiler support and most IDEs work well with it.

The main downside of CMake is that its own special configuration language you have to learn, however, we highly
recommend taking the time to do so.

We recommend the following resources for getting started:

- [An Introduction to Modern CMake](https://cliutils.gitlab.io/modern-cmake/README.html)

## Basic Setup

```cmake
cmake_minimum_required(VERSION 3.8)

project(my_project LANGUAGES C CXX)

add_executable(
    myprogram
    # It's recommended to list all .cpp files explicitly as opposed to using
    # glob syntax
    main.cpp
    util.cpp
)
# Set your C++ standard to C++20
target_compile_features(myprogram cxx_std_20)
```

To build:

```bash
# build in debug mode, add -G for custom generator, e.g. -G ninja
cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug
# build the build folder
cmake --build build
# run the program (on windows it will be called myprogram.exe)
build/myprogram
```

## Setting Options

Build options can be set with `target_compile_options`. We recommend setting the following flags:

```cmake
# Enable recommended warning flags for the three major compilers
set(
  WARNING_FLAGS
  $<$<NOT:$<CXX_COMPILER_ID:MSVC>>:-Wall -Wextra -Werror=return-type -Wundef>
  $<$<CXX_COMPILER_ID:GNU>:-Wuseless-cast -Wmaybe-uninitialized>
  $<$<CXX_COMPILER_ID:MSVC>:/W4 /permissive->
)

# We recommend using -g for both debug and release builds, it's difficult to use a
# debugger on a release build but some symbols are better than no symbols during
# development. Debug symbols can be disabled or stripped for a build that you
# distribute to users.
set(
  FLAGS
  -g
)

target_compile_options(myprogram ${WARNING_FLAGS} ${FLAGS})
```
