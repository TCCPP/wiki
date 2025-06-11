---
alias: ideas
bot_article: |
  # Project Ideas

  Looking for inspiration for what to build? Check out our community-curated list of project ideas.
---

# Project Ideas

This page has a list of ideas for projects of varying difficulties. It is by no means exhaustive and is mainly meant to
provide inspiration. If an idea here catches your interest, we recommend trying to make something related to it and you
have the freedom to explore, problem solve, and be creative with what you make. There's no one right or wrong way to do
anything in computer science, try things and have fun!

Each of these can vary in difficulty and you have a lot of freedom over how much you try to do and how challenging you
want to make it for yourself. You also have complete freedom over design and what exactly you want to build. This page
is meant to be a source of inspiration rather than a list of projects to make.

## Videogames and Graphics

- Battleships
- Blackjack
- [Breakout](<https://en.wikipedia.org/wiki/Breakout_(video_game)>) game
- [Cookie clicker](https://orteil.dashnet.org/cookieclicker/)-like game
- DOOM clone
- Dungeon crawler console game[^dungeon]
- Hangman
- Hard mode: [Ultimate Tic-Tac-Toe](https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe)
- Make a platformer game
- Mancala
- Minesweeper
- Single-player survival game
- Snake game
- Tetris
- Tic-Tac-Toe
- Tower defense game
- Write a raytracer[^raytracing]

[^raytracing]:
    For an introduction to concepts see
    [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html)

    > [!NOTE]
    >
    > We never recommend following tutorials line for line, this results in not having to grapple with design decisions
    > or as much problem solving yourself. Instead, we recommend the tutorial for a high-level overview and intro to the
    > relevant mathematics.

[^dungeon]:
    This is a good challenge from a software design, game dev, and algorithmic standpoint. You have a lot of creative
    freedom with what you make but we have some suggestions to get started:

    We recommend exploring unicode box-drawing characters and make sure you use a terminal that supports UTF-8.

    ```
    Box characters reference:
    ╔═╦═╗
    ║ ║ ║
    ╠═╬═╣
    ║ ║ ║
    ╚═╩═╝

    Possible game screen:
    ╔═══════════════════════════════╦════════╗
    ║                               ║        ║
    ║                               ║        ║
    ║                               ║        ║
    ║                               ║        ║
    ║                               ║        ║
    ║                               ║        ║
    ║                               ║        ║
    ║                               ║        ║
    ║                               ║        ║
    ╠═══════════════════════════════╣        ║
    ║        player info etc        ║        ║
    ║  HP: XXX / XXX    MP: XX / XX ║        ║
    ║  Items: [][][][][][][][][]    ║        ║
    ╚═══════════════════════════════╩════════╝
    ```

## Applications and Tools

- Calendar
- Text editor
- To-do list
- Version control system (like git)

## Algorithmic and Number Crunching

- [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) encoder/decoder
  - Bonus: Make an auto-decoder which makes guesses based on
    [frequency analysis](https://en.wikipedia.org/wiki/Frequency_analysis)
- Chess engine
- Data compression[^compression]
- Given an amount of money, convert it to the fewest number of bills and coins
- [Julia set](https://en.wikipedia.org/wiki/Julia_set) fractal
- [Mandelbrot set](https://en.wikipedia.org/wiki/Mandelbrot_set) fractal
  - Bonus: Make a visual representation of the iterative steps- [Nonogram](https://en.wikipedia.org/wiki/Nonogram) generator
- Maze generator
- Maze solver
- Pi calculator
- Prime number checker
- Rubix Cube solver
- Sieve of Eratosthenes
- Sudoku solver
- Test the Collatz Conjecture for large numbers
- Traveling salesman problem

[^compression]: Hint: Start with learning about [Huffman Coding](https://en.wikipedia.org/wiki/Huffman_coding)

## Scientific Computing and Simulation

<<<<<<< HEAD:wiki/resources/general/project-ideas.md
=======
- Agent-based simulation[^agents]
- [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
>>>>>>> 736e3b6 (Sort project ideas by alpha order):src/resources/general/project-ideas.md
- Electrical circuit simulator
- Fluid simulation[^fluids]
- N-body simulation
- Simulate collisions of a bunch of balls

### Cellular Automata

- [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- [Rule 110](https://en.wikipedia.org/wiki/Rule_110)

[^agents]: For inspiration see videos like

    - [Simulating the Evolution of Aggression](https://www.youtube.com/watch?v=YNMkADpvO4w)
    - [Swarm intelligence simulation](https://www.youtube.com/watch?v=Yu7sF9rcVJY)
    - [Simulating an Ecosystem](https://www.youtube.com/watch?v=r_It_X7v-1E)
    - [Ant and Slime Simulations](https://www.youtube.com/watch?v=X-iSQQgOd1A)

[^fluids]:
    For inspiration and an introduction to some relevant concepts see
    [Simulating Fluids](https://www.youtube.com/watch?v=rSKMYc1CQHE).

## Data Structures

- Binary tree
  - Explore traversing the tree (pre-order, in-order, post-order)
  - Implement a binary search tree
- Dynamic array / vector
- Hash table
- LRU cache (a fixed size cache which evicts the oldest items when needed)
- Linked list

## Concurrency and Parallelism

- Explore CUDA
- Explore x86 SIMD
- Message passing interface
- Parallel matrix multiplication algorithms
- Spin lock
- Thread pool

## Parsers, Compilers, and Interpreters

- CSV parser
- Create a simple interpreter or compiler
  - Also check out out list of [Compiler Development Resources](../advanced/compiler-development.md)
  - Check out [Crafting Interpreters](https://craftinginterpreters.com/contents.html) for a great tutorial on relevant 
	concepts
- JSON parser
- Lisp interpreter
- Lua interpreter
- Parse and evaluate simple math formulas (e.g. `1 + 2 * 3`)[^expressions]
- Regular expression parser / evaluator
- [BrainF\*ck](https://en.wikipedia.org/wiki/Brainfuck) interpreter
  - For extra challenge: Create an optimized interpreter or JIT compiler

[^expressions]:
    Hint: It may be helpful to learn about
    [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation) and the
    [Shunting yard algorithm](https://en.wikipedia.org/wiki/Shunting_yard_algorithm). It may also be helpful to learn
    about [precedence climbing](https://eli.thegreenplace.net/2012/08/02/parsing-expressions-by-precedence-climbing).

## Systems Programming

- 8 bit computer emulator, e.g. for [CHIP-8](https://en.wikipedia.org/wiki/CHIP-8)[^chip-8]
- Assembler
- Disassembler
- Implement a simple malloc
- Simple operating system kernel
- Write a Shell

[^chip-8]: Here's a helpful guide to get started with CHIP-8: https://tobiasvl.github.io/blog/write-a-chip-8-emulator/

## Networking

- Implement a simple HTTP server
- Implement the [RCON](https://developer.valvesoftware.com/wiki/Source_RCON_Protocol) protocol (used for issuing
  commands to some game servers, like Minecraft)
- Simple chat application over TCP

## Problem Sets

- [Project Euler](https://projecteuler.net/)
- http://nifty.stanford.edu/
- https://github.com/practical-tutorials/project-based-learning
