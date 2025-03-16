import { defineConfig } from "vitepress";
import footnote from "markdown-it-footnote";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Together C & C++",
    description: "The Together C & C++ Community",
    outDir: "../dist",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Resources", link: "/resources" },
        ],
        sidebar: [
            {
                text: "Resources",
                items: [
                    {
                        text: "C", items: [
                            { text: "Getting Started with C", link: "/resources/c/getting-started" },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "C++", items: [
                            { text: "Getting Started with C++", link: "/resources/cpp/getting-started" },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Build Systems", link: "/resources/build-systems", items: [

                        ],
                        collapsed: true,
                    },
                    { text: "Markdown Examples", link: "/resources/markdown-examples" },
                    { text: "Runtime API Examples", link: "/resources/api-examples" },
                ],
            },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/TCCPP/wiki" }],
    },
    markdown: {
        lineNumbers: true,
        math: true,
        config: md => {
            md.use(footnote);
        },
    },
    cleanUrls: true,
});
