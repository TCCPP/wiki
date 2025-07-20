# Clearing `std::cin` error flags
If `std::cin` fails to read something it will set an error state flag and ignore all future read instructions.<br/>
The most common error states are:
- Fail: An error occurred in reading e.g. trying to read an integer but the next character read is a letter.
- End of file: After a successful read `std::cin` sees that there is no more input to be read. (And the user can’t be prompted for more)

## Checking flags
All streams have a [bool operator](https://en.cppreference.com/w/cpp/io/basic_ios/operator_bool) that evaluates to false if the stream failed to read.
It doesn’t tell you if the stream has set the end of file flag, however. To know that you need to call [basic_ios::eof](https://en.cppreference.com/w/cpp/io/basic_ios/eof).

## Clearing
To tell `std::cin` that it is OK to continue reading you simply call it's member function [basic_ios::clear](https://en.cppreference.com/w/cpp/io/basic_ios/clear).

## Example
```cpp
if(std::cin.eof()) {
    // std::cin is out things to read
} else if(!std::cin) {
    // std::cin has most likely failed to read
    // handle the read error before clearing the stream
    std::cin.clear();
}
```
