# Getting Started with CMake

CMake is a build system for C, C++ and more, which works on any major operating system and has integration in most IDEs.
It is the most common cross-platform build system for C and C++ projects.

## Basic CMake C++ 17 Project
```cmake
cmake_minimum_required(VERSION 3.8)
project(my_project)
add_executable(myprogram main.cpp util.cpp util.h)
target_compile_features(myprogram cxx_std_17)
```
## Building CMake Projects
```sh
cmake -S . -B build # -G for custom generator
cmake --build build # output is now in build/
build/myprogram # run (file suffix may vary)
```

## See Also
- [Installing CMake](https://cmake.org/install/)
- [Introduction to modern CMake](https://cliutils.gitlab.io/modern-cmake/)
