import { defineConfig } from "vitepress";
import footnote from "markdown-it-footnote";
import { wiki_icons_plugin } from "../core/markdown/wiki-icons";
import { kbd_plugin } from "../core/markdown/kbd";
import { inline_code_plugin } from "../core/markdown/inline-code";

import c_tutorial_sidebar from "../../wiki/c-tutorial/sidebar";
import cpp_tutorial_sidebar from "../../wiki/cpp-tutorial/sidebar";
import resources_sidebar from "../../wiki/resources/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Together C & C++",
    description: "The Together C & C++ Community",
    outDir: "../dist",
    srcDir: "../wiki",
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["meta", { name: "viewport", content: "width=device-width; initial-scale=1.0;" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:locale", content: "en" }],
        ["meta", { property: "og:image", content: "https://tccpp.wiki/assets/tccpp.png" }],
        ["meta", { property: "og:url", content: "https://tccpp.wiki/" }],
        ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-8Q82QMJDK0" }],
        [
            "script",
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8Q82QMJDK0');`,
        ],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/assets/tccpp.png",
        nav: [
            { text: "Home", link: "/" },
            { text: "C tutorial", link: "/c-tutorial" },
            { text: "C++ tutorial", link: "/cpp-tutorial" },
            { text: "Resources", link: "/resources" },
        ],
        sidebar: {
            "/c-tutorial/": c_tutorial_sidebar,
            "/cpp-tutorial/": cpp_tutorial_sidebar,
            "/resources/": resources_sidebar,
        },
        socialLinks: [
            { icon: "discord", link: "https://discord.gg/tccpp" },
            { icon: "github", link: "https://github.com/TCCPP/wiki" },
        ],
        editLink: {
            pattern: ({ filePath }) => {
                return `https://github.com/TCCPP/wiki/tree/main/wiki/${filePath}`;
            },
            text: "Contribute to this page on GitHub",
        },
    },
    markdown: {
        math: true,
        config: md => {
            md.use(footnote);
            md.use(wiki_icons_plugin);
            md.use(kbd_plugin);
            md.use(inline_code_plugin);
            // modify page frontmatter
            const original_render = md.render;
            md.render = function (src, env) {
                const result = original_render.call(this, src, env);
                if (env.relativePath.startsWith("resources/")) {
                    env.frontmatter ??= {};
                    env.frontmatter.prev = false;
                    env.frontmatter.next = false;
                }
                return result;
            };
        },
    },
    cleanUrls: true,
});
