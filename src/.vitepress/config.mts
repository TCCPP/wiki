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
                    { text: "Getting Started", link: "/resources/getting-started" },
                    {
                        text: "C",
                        items: [{}],
                        collapsed: true,
                    },
                    {
                        text: "C++",
                        items: [{ text: "What is C++", link: "/resources/cpp/what-is-cpp" }],
                        collapsed: true,
                    },
                    {
                        text: "Build Systems",
                        link: "/resources/build-systems",
                        items: [],
                        collapsed: true,
                    },
                    {
                        text: "Development Environments",
                        items: [
                            { text: "Visual Studio Community", link: "/resources/dev-envs/visual-studio-community" },
                        ],
                        collapsed: true,
                    },
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
