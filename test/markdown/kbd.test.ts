import { describe, expect, test } from "vitest";
import MarkdownIt from "markdown-it";
import { reduce } from "./utils";
import { kbd_plugin } from "../../src/core/markdown/kbd";

describe("nobr tests", () => {
    test("basic", () => {
        const md = MarkdownIt();
        md.use(kbd_plugin);
        const result = md.parse("[k:Enter:]", {});
        expect(reduce(result)).to.deep.equal([
            {
                children: null,
                content: "",
                type: "paragraph_open",
            },
            {
                children: [
                    {
                        children: null,
                        content: "Enter",
                        type: "kbd",
                    },
                ],
                content: "[k:Enter:]",
                type: "inline",
            },
            {
                children: null,
                content: "",
                type: "paragraph_close",
            },
        ]);
    });
    test("sequential", () => {
        const md = MarkdownIt();
        md.use(kbd_plugin);
        const result = md.parse("[k:Enter:][k:]:]", {});
        expect(reduce(result)).to.deep.equal([
            {
                children: null,
                content: "",
                type: "paragraph_open",
            },
            {
                children: [
                    {
                        children: null,
                        content: "Enter",
                        type: "kbd",
                    },
                    {
                        children: null,
                        content: "]",
                        type: "kbd",
                    },
                ],
                content: "[k:Enter:][k:]:]",
                type: "inline",
            },
            {
                children: null,
                content: "",
                type: "paragraph_close",
            },
        ]);
    });
    test("paragraph", () => {
        const md = MarkdownIt();
        md.use(kbd_plugin);
        const result = md.parse("foo [k:Enter:] bar", {});
        expect(reduce(result)).to.deep.equal([
            {
                children: null,
                content: "",
                type: "paragraph_open",
            },
            {
                children: [
                    {
                        children: null,
                        content: "foo ",
                        type: "text",
                    },
                    {
                        children: null,
                        content: "Enter",
                        type: "kbd",
                    },
                    {
                        children: null,
                        content: " bar",
                        type: "text",
                    },
                ],
                content: "foo [k:Enter:] bar",
                type: "inline",
            },
            {
                children: null,
                content: "",
                type: "paragraph_close",
            },
        ]);
    });
    test("links", () => {
        const md = MarkdownIt();
        md.use(kbd_plugin);
        const result = md.parse("[foo][bar]\n[bar]: https://google.com", {});
        expect(reduce(result)).to.deep.equal([
            {
                children: null,
                content: "",
                type: "paragraph_open",
            },
            {
                children: [
                    {
                        children: null,
                        content: "[foo][bar]",
                        type: "text",
                    },
                    {
                        children: null,
                        content: "",
                        type: "softbreak",
                    },
                    {
                        children: null,
                        content: "[bar]: https://google.com",
                        type: "text",
                    },
                ],
                content: "[foo][bar]\n[bar]: https://google.com",
                type: "inline",
            },
            {
                children: null,
                content: "",
                type: "paragraph_close",
            },
        ]);
        const result2 = md.parse("[foo][k:Enter:]\n[k:Enter:]: https://google.com", {});
        expect(reduce(result2)).to.deep.equal([
            {
                children: null,
                content: "",
                type: "paragraph_open",
            },
            {
                children: [
                    {
                        children: null,
                        content: "[foo]",
                        type: "text",
                    },
                    {
                        children: null,
                        content: "Enter",
                        type: "kbd",
                    },
                    {
                        children: null,
                        content: "",
                        type: "softbreak",
                    },
                    {
                        children: null,
                        content: "Enter",
                        type: "kbd",
                    },
                    {
                        children: null,
                        content: ": https://google.com",
                        type: "text",
                    },
                ],
                content: "[foo][k:Enter:]\n[k:Enter:]: https://google.com",
                type: "inline",
            },
            {
                children: null,
                content: "",
                type: "paragraph_close",
            },
        ]);
        const result3 = md.parse("[k:Enter:](https://google.com)", {});
        expect(reduce(result3)).to.deep.equal([
            {
                children: null,
                content: "",
                type: "paragraph_open",
            },
            {
                children: [
                    {
                        children: null,
                        content: "",
                        type: "link_open",
                    },
                    {
                        children: null,
                        content: "k:Enter:",
                        type: "text",
                    },
                    {
                        children: null,
                        content: "",
                        type: "link_close",
                    },
                ],
                content: "[k:Enter:](https://google.com)",
                type: "inline",
            },
            {
                children: null,
                content: "",
                type: "paragraph_close",
            },
        ]);
    });
});
