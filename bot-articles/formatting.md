# Why Should I Format My Code, and How Do I Do It?

Well-formatted code is much easier to read, especially for people who haven't
written it themselves.
Poor formatting can even be misleading, especially indentation:
```cpp
while (is_waiting);    // BAD! reader may think that
  std::cout << "hi\n"; // printing is in the loop

while (is_waiting) { } // good, empty statement
std::cout << "hi\n";   // is clearly visible
```

## Rules for Code Formatting
1. Stay consistent! (much easier when using auto-formatters)
2. Don't use exotic styles that surprise readers.
3. The rest is up to personal preference.

<!-- inline -->
## Auto-Formatting with clang-format
For C and C++, you can use **[clang-format][cf]** to decide on a style, and apply it automatically to your files. You can
use it in the terminal, or through an editor plugin.

Most IDEs will also let you configure a style in their settings, but
clang-format is universal.

[cf]: https://clang.llvm.org/docs/ClangFormat.html

<!-- inline -->
## See Support/Plugins
- **[VS Code](https://code.visualstudio.com/docs/cpp/cpp-ide#_code-formatting)**
- **[Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/reference/options-text-editor-c-cpp-formatting?view=vs-2022#configuring-clangformat-options)**
- **[CLion](https://www.jetbrains.com/help/clion/clangformat-as-alternative-formatter.html)**
- **[XCode](https://github.com/mapbox/XcodeClangFormat)**
