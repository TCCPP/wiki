---
wip: true
---

# File Input and Output
In C++, you can use the `fstream` library to create, write and read files. \
To use fstream, you need to include the `<iostream>` **AND** `<fstream>` header files.

``` cpp
#include <iostream>
#include <fstream> 
```
The `<fstream>` library provides three main classes:
|Function|Description|
|--------|-----------|
|`std::ofstream`|Used to create and write to files|
|`std::ifstream`|Used to read from files|
|`std::fstream`|Used for both reading and writing|

::: info Note
`std::fstream` is a general-purpose file stream, while `std::ifstream` and `std::ofstream` are more specific and commonly used in practice.
:::

## Read a File (`std::ifstream`) {#read-a-file}
`std::ifstream` is used to read data from a file.

``` cpp
std::string line;

std::ifstream file("filename.txt");

if (!file) return 1;

while (std::getline(file, line)) {
    std::cout << line << "\n";
}

file.close();
```

Using a `while` loop with `getline()` allows us to read a file line by line until we reach the end, and then print each line.

## Write a File (`std::ofstream`) {#write-a-file}
`std::ofstream` is used to write data to a file.

``` cpp
std::ofstream file("filename.txt");

if (!file) return 1;

file << "Hello Together C & C++!";

file.close();
```
This will create the file if it doesn’t exist, or overwrite it if it already exists.

## Redirecting standard input/output {#redirecting-stdio}
`freopen` is used to redirect standard input and output streams to files.\
It reassigns `stdin` or `stdout` to a file instead of the default console input/output.
``` cpp
freopen("input.txt", "r", stdin);
freopen("output.txt", "w", stdout);
```
::: info Note
`freopen` is commonly used in competitive programming for convenience, but it is not recommended for general C++ applications.
:::