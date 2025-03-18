# Setting Up Visual Studio Community

CLion is a commercial IDE from JetBrains. You can download CLion [here](https://www.jetbrains.com/clion/download).

During installation, tick the "Add bin folder to PATH" and "Add Open Folder as Project" options.
After completing the installation, you should be prompted to log into your JetBrains account.

If this doesn't happen, you can log in from the menu later after creating a project: Help -> Register...

## Installing a compiler

CLion ships with MinGW GCC on Windows.

::: info
If you want to install MSVC, use the Visual Studio Installer to install it. You will be able to use MSVC from CLion.
:::

## Getting Started

After you installed and activated CLion with your JetBrains account, you should see this page:

![CLion welcome menu](/assets/clion/clion-1.png)

Click "New Project". Select C++ Executable, name your project and select a C++ standard (or select "C Executable" if you want to use C). C++23 is a good choice (or C23 for C) if you don't know what to use.

The next thing you will see is this:

![CLion project wizard](/assets/clion/clion-2.png)

If you have other toolchains like MSVC installed, they will appear here. If you don't just click "Ok".

## Running Your Program

Try and see if your setup works by pressing the green play button or press Shift + F10.
A terminal should pop up at the bottom that says "Hello, World!".
