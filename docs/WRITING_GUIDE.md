# Together C & C++ Wiki Article Writing Guide

Project structure:

- Bot articles: `bot-articles/`
- Wiki pages: `wiki/`
  - Wiki assets: `wiki/public`
  - C tutorial: `wiki/c-tutorial`
  - C++ tutorial: `wiki/cpp-tutorial`
  - Non-tutorial resources: `wiki/resources`
  - Wiki sidebars: `wiki/*/sidebar.ts`
- Wiki code: `src/`

## Tone

It's important for wiki pages to maintain consistent tone and voice.

Write as an experienced developer helping a learner, not an academic lecturing. Take the stance of a patient mentor. Be
direct and authoritative without being condescending.

While writing:

- Keep target audience in mind: Don't overload beginner-focused pages with language-lawyer jargon or highly technical
  caveats. It can be ok to mention these things as asides for users who are interested.
- Be friendly but not overly casual
- It is ok to be opinionated but justified (always explain _why_)
- Put practice over theory but always mention both when important
- Be respectful of the reader's intelligence
- Be welcoming to beginners while maintaining technical precision

On wiki pages, a short bot article can be provided with `bot_article` frontmatter. These are rendered as discord embeds
and automatically link to the wiki page. Please always provide a `bot_article` for wiki articles that they can easily be
linked from discord. Include only the most important high-level information, the user can go to the wiki page for more
info.

Keep the presentation format in mind. Bot articles (bot-articles/ and `bot_article` frontmatter) must be extremely short
and succinct with narrow code examples and 3-8 line paragraphs. Wiki articles should be to the point but can afford to
show longer examples and provide more information.

### DO:

- Use best practices while writing C++ code
- Be concise and to the point: Users are unlikely to read long pages
- Use modern C++ practices
- State facts directly
- Provide approachable explanations for beginners
- Use metaphors sparingly only when they are significantly beneficial for clarity
- Use emphasis for strong recommendations
- Acknowledge trade-offs honestly: "While `#include <bits/stdc++.h>` is convenient and sufficient in many projects it is
  less portable and slows down build times."
- Explain _why_ before _what_
- Normalize not knowing: "If you haven't used a debugger yet..."
- IMPORTANT: When adding a wiki page, make sure to add an entry in `sidebar.ts`

### DON'T:

- Hedge excessively ("perhaps", "maybe", "it might be a good idea")
- Be preachy or lecture-like
- Editorialize
- Use jargon without explanation
- Overload with theory before practical examples
- Be dismissive of common mistakes

## Code Style

You can assume C++20 as a minimum without explicitly pointing it out. For example, you don't need to point out that
`std::span` or `char8_t` are C++20 features. For &ge; C++23 features like `std::println`, please mention the standard.

Also, try to maintain consistent style in code. Some very rough points to touch on:

- Most markdown and code on the website has a 120 column limit and this is enforced by the auto-formatter
- Code blocks in markdown should generally not be wider than 80 columns so that they fit without scrolling
- Indent with four spaces
- Braces on the same line, e.g. `int main() {`
- Don't omit braces on control flow statements
- Put pointers/references on the left, e.g. `void* ptr`
- Naming:
  - `lower_snake` for most things
  - `Capitalized` for template args
  - `SCREAM_CASE` for macros
- Avoid trailing whitespace on lines. In markdown, prefer `<br/>` over two spaces at the end of a line for a break.

## Main Wiki Markdown

Wiki articles use normal markdown syntax with some extensions (examples
[here](https://tccpp.wiki/resources/wiki-dev/markdown)):

- Header references (`#my-anchor`)
- Custom header anchors (`# My heading {#my-anchor}`)
- Yaml frontmatter
- Github-style tables
- Emojis (`:tada:`)
- Footnotes (put `[^name]` on the text then `[^name]: It's a footnote!` later)
- Table of contents (`[[toc]]`)
- Custom blocks:

  ```
  ::: info

  This is an info box

  :::
  ```

  Info, tip, warning, danger, and details are all options.

- Block titles:

  ```
  ::: info Try This!

  This is an info box with a custom title

  :::
  ```

- Github-flavored alerts:
  ```
  > [!NOTE]
  >
  > Note blocks
  ```
  Note, tip, important, warning, and caution are all options.
- Line highlighting in code blocks: ` ```js{4,6-8} ` or `// [!!code highlight]`
- Code focus in code blocks: `// [!code focus]`
- Diff lines in code blocks: `// [!code --]` and `// [!code ++]`
- Warning and error lines in code blocks: `// [!code warning]` and `// [!code error]`
- Line numbers in code blocks: ` ```js:line-numbers `
- Line numbers in code blocks starting at a line: ` ```js:line-numbers=2 `
- Code groups can be created with a `::: code-group` block containing multiple code blocks with file names, like
  ` ```js [config.js] `
- Math equations: `$inline math$` and `$$math block$$`
- Custom icons: :cpp: :c: :vscode:
- Kerboard key formatting: `[k:Ctrl + Enter:] or [k:⌘ Cmd + Enter:]`

A note on formatting: We use prettier for formatting files. Prettier does not understand some custom markdown syntax,
such as custom alert blocks. This can be worked around with newlines, e.g.:

```markdown
> [!NOTE]
>
> Content
```

or

```markdown
::: note

Content

:::
```

## Bot Article Markdown

Bot articles use a variant of normal markdown. Bot articles use the following format:

```md
<!-- directive -->
<!-- another directive -->

# Article Title

Body text goes here. This is the main description of the embed.

## Field Name

Field content goes here.

## Another Field

More content.

---

Footer text goes here.
```

A title is required. Fields are optional, so is the footer.

Available directives are:

- `<!-- alias name1, name2 -->` Adds command aliases for the article.
- `<!-- inline -->` Makes the next field inline (displays side-by-side with other inline fields).
- `<!-- no embed -->` Displays article as plain text instead of a Discord embed. Body is required; fields and footer are
  not allowed.
- `<!-- user author -->` Sets the embed author to the user who invoked the command.
- `<!-- wikilink url -->` Links to a wiki page

An image can be included in the bot article.

`<br>` or `<br/>` can be used as a line break.

Links can be used including reference-style links.

#channel-name and :emoji_name: can also be used to use server channels and emojis
