import { defineConfig } from "vitepress";
import footnote from "markdown-it-footnote";
import { wiki_icons_plugin } from "../components/markdown/wiki-icons";
import { kbd_plugin } from "../components/markdown/kbd";

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
            "/c-tutorial/": [
                {
                    text: "C Introduction",
                    items: [{}],
                },
            ],
            "/cpp-tutorial/": [
                {
                    text: "C++ Introduction",
                    items: [
                        { text: "What is C++", link: "/cpp-tutorial/what-is-cpp" },
                        {
                            text: "Language Basics",
                            link: "/cpp-tutorial/language-basics",
                            items: [
                                {
                                    text: "Program Structure",
                                    link: "/cpp-tutorial/language-basics#program-structure",
                                },
                                { text: "Comments", link: "/cpp-tutorial/language-basics#comments" },
                                {
                                    text: "Statements",
                                    link: "/cpp-tutorial/language-basics#statements",
                                },
                                {
                                    text: "Identifiers",
                                    link: "/cpp-tutorial/language-basics#identifiers",
                                },
                                { text: "Keywords", link: "/cpp-tutorial/language-basics#keywords" },
                                {
                                    text: "Initialization vs Assignment",
                                    link: "/cpp-tutorial/language-basics#initialization-versus-assignment",
                                },
                                {
                                    text: "Fundamental Data Types and Literals",
                                    link: "/cpp-tutorial/language-basics#fundamental-data-types-and-literals",
                                },
                                { text: "Basic Operators", link: "/cpp-tutorial/language-basics#basic-operators" },
                            ],
                            collapsed: true,
                        },
                        {
                            text: "Debugging",
                            link: "/cpp-tutorial/debugging",
                            items: [
                                {
                                    text: "What is a Debugger?",
                                    link: "/cpp-tutorial/debugging#what-is-a-debugger",
                                },
                                {
                                    text: "Debugger Fundamentals",
                                    link: "/cpp-tutorial/debugging#debugger-fundamentals",
                                },
                            ],
                            collapsed: true,
                        },
                        {
                            text: "Operators",
                            link: "/cpp-tutorial/operators",
                            items: [
                                {
                                    text: "What is an Operator?",
                                    link: "/cpp-tutorial/operators#what-is-an-operator",
                                },
                                {
                                    text: "Mathematic Operators",
                                    link: "/cpp-tutorial/operators#mathematic-operators",
                                },
                                {
                                    text: "Logical Operators",
                                    link: "/cpp-tutorial/operators#logical-operators",
                                },
                                { text: "Bitwise Operators", link: "/cpp-tutorial/operators#bitwise-operators" },
                                { text: "Other Operators", link: "/cpp-tutorial/operators#other-operators" },
                            ],
                            collapsed: true,
                        },
                        {
                            text: "Control Flow",
                            link: "/cpp-tutorial/control-flow",
                            items: [
                                {
                                    text: "What is Control Flow?",
                                    link: "/cpp-tutorial/control-flow#what-is-control-flow",
                                },
                                { text: "Branches", link: "/cpp-tutorial/control-flow#branches" },
                                { text: "Looping", link: "/cpp-tutorial/control-flow#looping" },
                                { text: "Switches", link: "/cpp-tutorial/control-flow#switches" },
                                {
                                    text: "Conditional Operator",
                                    link: "/cpp-tutorial/control-flow#conditional-operator",
                                },
                            ],
                            collapsed: true,
                        },
                        {
                            text: "Functions",
                            link: "/cpp-tutorial/functions",
                            items: [
                                {
                                    text: "What is a Function?",
                                    link: "/cpp-tutorial/functions#what-is-a-function",
                                },
                                {
                                    text: "Structure of Functions",
                                    link: "/cpp-tutorial/functions#structure-of-functions",
                                },
                                {
                                    text: "Parameters, Arguments, and Return Values",
                                    link: "/cpp-tutorial/functions#parameters-arguments-and-return-values",
                                },
                                { text: "Scope", link: "/cpp-tutorial/functions#scope" },
                                {
                                    text: "An Introduction to References and Pointers",
                                    link: "/cpp-tutorial/functions#an-introduction-to-references-and-pointers",
                                },
                            ],
                            collapsed: true,
                        },
                        {
                            text: "Error Detection and Handling",
                            link: "/cpp-tutorial/error-detection-and-handling",
                            items: [
                                {
                                    text: "What is Error Handling?",
                                    link: "/cpp-tutorial/error-detection-and-handling#what-is-error-handling",
                                },
                                {
                                    text: "Try, Catch, and Throw",
                                    link: "/cpp-tutorial/error-detection-and-handling#try-catch-and-throw",
                                },
                                {
                                    text: "Results and Optional Types",
                                    link: "/cpp-tutorial/error-detection-and-handling#results-and-optional-types",
                                },
                            ],
                            collapsed: true,
                        },
                        { text: "File Input and Output", link: "/cpp-tutorial/file-io" },
                        {
                            text: "User Defined Types",
                            link: "/cpp-tutorial/user-defined-types",
                            items: [
                                {
                                    text: "What is a User Defined Type?",
                                    link: "/cpp-tutorial/user-defined-types#what-is-a-user-defined-type",
                                },
                                {
                                    text: "Structs and Classes",
                                    link: "/cpp-tutorial/user-defined-types#structs-and-classes",
                                },
                                { text: "Enumerations", link: "/cpp-tutorial/user-defined-types#enumerations" },
                                { text: "Type Aliases", link: "/cpp-tutorial/user-defined-types#type-aliases" },
                            ],
                            collapsed: true,
                        },
                        {
                            text: "Containers",
                            link: "/cpp-tutorial/containers",
                            items: [
                                {
                                    text: "What is a Container?",
                                    link: "/cpp-tutorial/containers#what-is-a-container",
                                },
                                { text: "Arrays", link: "/cpp-tutorial/containers#arrays" },
                                {
                                    text: "Range Based For Loops",
                                    link: "/cpp-tutorial/containers#range-based-for-loops",
                                },
                                { text: "Vectors", link: "/cpp-tutorial/containers#vectors" },
                                { text: "Strings", link: "/cpp-tutorial/containers#strings" },
                                { text: "Unordered Maps", link: "/cpp-tutorial/containers#unordered-maps" },
                            ],
                            collapsed: true,
                        },
                    ],
                },
            ],
            "/resources/": [
                {
                    text: "Resources",
                    items: [
                        { text: "Getting Started", link: "/resources/getting-started" },
                        {
                            text: "Build Systems",
                            link: "/resources/build-systems",
                            items: [],
                            collapsed: true,
                        },
                        {
                            text: "Development Environments",
                            items: [
                                {
                                    text: "Visual Studio Community",
                                    link: "/resources/dev-envs/visual-studio-community",
                                },
                                {
                                    text: "Visual Studio Code - MinGW",
                                    link: "/resources/dev-envs/visual-studio-code-mingw",
                                },
                                { text: "CLion", link: "/resources/dev-envs/clion" },
                            ],
                            collapsed: true,
                        },
                        { text: "Standards", link: "/resources/general/standards" },
                        { text: "Project Ideas", link: "/resources/general/project-ideas" },
                        {
                            text: "Advanced Resources",
                            items: [
                                { text: "Compiler Development", link: "/resources/general/compiler-development" },
                                { text: "Performance Analysis", link: "/resources/general/performance-analysis" },
                            ],
                            collapsed: true,
                        },
                    ],
                },
            ],
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
