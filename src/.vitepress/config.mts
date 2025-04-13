import { defineConfig } from "vitepress";
import footnote from "markdown-it-footnote";
import { wiki_icons_plugin } from "../core/markdown/wiki-icons";
import { kbd_plugin } from "../core/markdown/kbd";

import c_tutorial_sidebar from "../c-tutorial/sidebar";
import cpp_tutorial_sidebar from "../cpp-tutorial/sidebar";
import resources_sidebar from "../resources/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Together C & C++",
    description: "The Together C & C++ Community",
    outDir: "../dist",
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
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
    },
    markdown: {
        math: true,
        config: md => {
            md.use(footnote);
            md.use(wiki_icons_plugin);
            md.use(kbd_plugin);
        },
    },
    cleanUrls: true,
});
