# Getting Started with C and C++

## Getting Started on Windows

To get started on Windows, select one of the following guides to set up a development environment.

* [Visual Studio Community](/resources/dev-envs/visual-studio-community) (Recommended for Beginners)
* Visual Studio Code with MINGW64 (TODO)
* CLion (TODO)

## Getting Started on Linux

* Visual Studio Code (TODO)
* CLion (TODO)

## Getting Started on Mac

* Visual Studio Code (TODO)
* XCode (TODO)
* CLion (TODO)

## Your First Program

In order to ensure your development environment is set up correctly, copy the provided code and try to run the code.

For C
```c
#include <stdio.h>

int main(){
    printf("Hello World\n"); // or puts without \n
}
```

For C++
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
}
```

If all goes correctly, you should have a terminal with "Hello, World!" printed in it.

::: tip
It is important to make sure all files are saved before you try to build and run your code. If not, your changes will
not be reflected in the executable you build.
:::
