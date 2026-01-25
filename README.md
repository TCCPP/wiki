# tccpp.wiki

Repository for the very much work-in-progress website for the Together C & C++ community focusing on tutorials,
resources, and wiki-like content.

Code is under the MIT license, site content is CC BY-SA.

## Table of Contents <!-- omit in toc -->

- [tccpp.wiki](#tccppwiki)
- [Contributing](#contributing)
  - [Getting Started](#getting-started)
  - [Markdown Info](#markdown-info)
  - [Sidebars](#sidebars)
  - [Guidelines](#guidelines)
    - [Editorial Style](#editorial-style)
    - [Code Style](#code-style)

# Contributing

Contributions are welcome! Please read our [writing guide](./docs/WRITING_GUIDE.md) for information about writing style,
supported markdown, and code style.

## Getting Started

Prerequisites: node 18 or newer and ideally make.

To get started: Run `make dev`.

If you do not have make, run `npm i` then `npm run dev`.

The site source is in [src/](src/).

Run the formatter with `make format` or `npm run format`

## Markdown Info

The site uses VitePress, which allows for content to easily be written in markdown and custom stuff to be done in Vue.
All normal markdown is supported and VitePress comes with a handful of useful extensions (github note/warning/etc
blocks, line highlighting for code, emojis, math equations, and more). Additionally, we add a few plugins:

- Footnotes
- Custom icons
- Keyboard key formatting

These are good overviews of what vitepress lets you do for markdown pages:

- https://vitepress.dev/guide/markdown
- https://vitepress.dev/guide/asset-handling
- https://vitepress.dev/guide/frontmatter
- https://vitepress.dev/guide/using-vue

An overview of custom markdown formatting for the site can be found at https://tccpp.wiki/resources/wiki-dev/markdown.

## Sidebars

The site relies a lot on sidebars for navigation. When contributing a page, remember to add it to the sidebar. This can
be done by adding it to the `sidebar.ts` (really just a big JSON list) file in the relevant section of the site (e.g.
[`wiki/cpp-tutorial/sidebar.ts`](wiki/cpp-tutorial/sidebar.ts) or
[`wiki/resources/sidebar.ts`](wiki/resources/sidebar.ts)).

<img src="./docs/assets/sidebar.png" alt="Site Sidebars" height="500">
