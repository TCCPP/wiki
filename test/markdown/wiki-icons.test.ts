import { describe, expect, test } from "vitest";
import MarkdownIt from "markdown-it";
import { wiki_icons_plugin } from "../../src/core/markdown/wiki-icons";
import { reduce } from "./utils";

describe("nobr tests", () => {
    test("nothing", () => {
        const md = MarkdownIt();
        md.use(wiki_icons_plugin);
        const result = md.parse("test c++ test", {});
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
                        content: "test c++ test",
                        type: "text",
                    },
                ],
                content: "test c++ test",
                type: "inline",
            },
            {
                children: null,
                content: "",
                type: "paragraph_close",
            },
        ]);
    });
    test("basic", () => {
        const md = MarkdownIt();
        md.use(wiki_icons_plugin);
        const result = md.parse("test :cpp: :c: test", {});
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
                        content: "test ",
                        type: "text",
                    },
                    {
                        children: null,
                        content: "",
                        meta: {
                            alt: "cpp",
                            path: "/assets/icons/c++.svg",
                        },
                        type: "wiki_icon",
                    },
                    {
                        children: null,
                        content: " ",
                        type: "text",
                    },
                    {
                        children: null,
                        content: "",
                        meta: {
                            alt: "c",
                            path: "/assets/icons/c.svg",
                        },
                        type: "wiki_icon",
                    },
                    {
                        children: null,
                        content: " test",
                        type: "text",
                    },
                ],
                content: "test :cpp: :c: test",
                type: "inline",
            },
            {
                children: null,
                content: "",
                type: "paragraph_close",
            },
        ]);
    });
    test("more elaborate", () => {
        const md = MarkdownIt();
        md.use(wiki_icons_plugin);
        const result = md.parse("Test :cpp: test test:cpp: :cpp:test", {});
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
                        content: "Test ",
                        type: "text",
                    },
                    {
                        children: null,
                        content: "",
                        meta: {
                            alt: "cpp",
                            path: "/assets/icons/c++.svg",
                        },
                        type: "wiki_icon",
                    },
                    {
                        children: null,
                        content: " test test",
                        type: "text",
                    },
                    {
                        children: null,
                        content: "",
                        meta: {
                            alt: "cpp",
                            path: "/assets/icons/c++.svg",
                        },
                        type: "wiki_icon",
                    },
                    {
                        children: null,
                        content: " ",
                        type: "text",
                    },
                    {
                        children: null,
                        content: "",
                        meta: {
                            alt: "cpp",
                            path: "/assets/icons/c++.svg",
                        },
                        type: "wiki_icon",
                    },
                    {
                        children: null,
                        content: "test",
                        type: "text",
                    },
                ],
                content: "Test :cpp: test test:cpp: :cpp:test",
                type: "inline",
            },
            {
                children: null,
                content: "",
                type: "paragraph_close",
            },
        ]);
    });
    test("autolinks", () => {
        const md = MarkdownIt({ linkify: true });
        md.use(wiki_icons_plugin);
        const result = md.parse("https://google.com/:cpp:/foo", {});
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
                        content: "",
                        type: "link_open",
                    },
                    {
                        children: null,
                        content: "https://google.com/:cpp:/foo",
                        type: "text",
                    },
                    {
                        children: null,
                        content: "",
                        type: "link_close",
                    },
                ],
                content: "https://google.com/:cpp:/foo",
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
