# tccpp.wiki

Repository for the very much work-in-progress website for the Together C & C++ community focusing on tutorials,
resources, and wiki-like content.

# Contributing

Contributions are welcome!

Prerequisites: node 18 or newer and ideally make.

To get started: Run `make dev`.

If you do not have make, run `npm i` then `npm run dev`.

The site uses VitePress, which allows for content to easily be written in markdown and custom stuff to be done in Vue.
All normal markdown is supported. Additionally, VitePress comes with a handful of useful extensions (github
note/warning/etc blocks, line highlighting for code, emojis, math equations, and more) which can be seen at
https://vitepress.dev/guide/markdown. Additionally, we use the following markdown extensions:

- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)

The site source is in [src/](src/).

A note on formatting: We use prettier for formatting files. Prettier does not understand some markdown syntax, such as
note / tip / warning blocks. This can be worked around with extra newlines or `<!-- prettier-ignore -->`.

## Guidelines

Some guidelines for contribution:

- Try to explain things succinctly
- Mind your audience: If you're contributing beginner-oriented content, try to keep things as simple as possible,
  linking to more advanced topics if needed.
- Try to maintain consistent style. Some very rough points to touch on:
  - Indent with four spaces
  - Braces on the same line, e.g. `int main() {`
  - Pointers/references on the left, e.g. `void* ptr`
- Run the site locally and test how your contributions look. Make sure everything renders correctly, update formatting
  if needed.
- Columns should be no wider than 120 characters.

As this site evolves these guidelines will too.
