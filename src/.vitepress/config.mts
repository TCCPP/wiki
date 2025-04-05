import { defineConfig } from "vitepress";
import footnote from "markdown-it-footnote";
import { wiki_icons_plugin } from "../components/markdown/wiki-icons";

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
            { text: "Resources", link: "/resources" },
        ],
        sidebar: [
            {
                text: "Resources",
                items: [
                    { text: "Getting Started", link: "/resources/getting-started" },
                    {
                        text: "C Introduction",
                        items: [{}],
                        collapsed: true,
                    },
                    {
                        text: "C++ Introduction",
                        items: [
                            { text: "What is C++", link: "/resources/cpp/what-is-cpp" },
                            {
                                text: "Language Basics",
                                link: "/resources/cpp/language-basics",
                                items: [
                                    {
                                        text: "Program Structure",
                                        link: "/resources/cpp/language-basics#program-structure",
                                    },
                                    { text: "Comments", link: "/resources/cpp/language-basics#comments" },
                                    {
                                        text: "Statements",
                                        link: "/resources/cpp/language-basics#statements",
                                    },
                                    {
                                        text: "Identifiers",
                                        link: "/resources/cpp/language-basics#identifiers",
                                    },
                                    { text: "Keywords", link: "/resources/cpp/language-basics#keywords" },
                                    {
                                        text: "Initialization vs Assignment",
                                        link: "/resources/cpp/language-basics#initialization-versus-assignment",
                                    },
                                    {
                                        text: "Fundamental Data Types and Literals",
                                        link: "/resources/cpp/language-basics#fundamental-data-types-and-literals",
                                    },
                                    { text: "Basic Operators", link: "/resources/cpp/language-basics#basic-operators" },
                                ],
                                collapsed: true,
                            },
                            {
                                text: "Debugging",
                                link: "/resources/cpp/debugging",
                                items: [
                                    {
                                        text: "What is a Debugger?",
                                        link: "/resources/cpp/debugging#what-is-a-debugger",
                                    },
                                    {
                                        text: "Debugger Fundamentals",
                                        link: "/resources/cpp/debugging#debugger-fundamentals",
                                    },
                                ],
                                collapsed: true,
                            },
                            {
                                text: "Operators",
                                link: "/resources/cpp/operators",
                                items: [
                                    {
                                        text: "What is an Operator?",
                                        link: "/resources/cpp/operators#what-is-an-operator",
                                    },
                                    {
                                        text: "Mathematic Operators",
                                        link: "/resources/cpp/operators#mathematic-operators",
                                    },
                                    {
                                        text: "Logical Operators",
                                        link: "/resources/cpp/operators#assignment-operators",
                                    },
                                    { text: "Bitwise Operators", link: "/resources/cpp/operators#bitwise-operators" },
                                    { text: "Other Operators", link: "/resources/cpp/operators#other-operators" },
                                ],
                                collapsed: true,
                            },
                            {
                                text: "Control Flow",
                                link: "/resources/cpp/control-flow",
                                items: [
                                    {
                                        text: "What is Control Flow?",
                                        link: "/resources/cpp/control-flow#what-is-control-flow",
                                    },
                                    { text: "Branches", link: "/resources/cpp/control-flow#branches" },
                                    { text: "Looping", link: "/resources/cpp/control-flow#looping" },
                                    { text: "Switches", link: "/resources/cpp/control-flow#switches" },
                                    {
                                        text: "Conditional Operator",
                                        link: "/resources/cpp/control-flow#conditional-operator",
                                    },
                                ],
                                collapsed: true,
                            },
                            {
                                text: "Functions",
                                link: "/resources/cpp/functions",
                                items: [
                                    {
                                        text: "What is a Function?",
                                        link: "/resources/cpp/functions#what-is-a-function",
                                    },
                                    {
                                        text: "Structure of Function",
                                        link: "/resources/cpp/functions#structure-of-function",
                                    },
                                    {
                                        text: "Parameters, Arguments, and Return Values",
                                        link: "/resources/cpp/functions#parameters-arguments-and-return-values",
                                    },
                                    { text: "Scope", link: "/resources/cpp/functions#scope" },
                                    {
                                        text: "An Introduction to References and Pointers",
                                        link: "/resources/cpp/functions#an-introduction-to-references-and-pointers",
                                    },
                                ],
                                collapsed: true,
                            },
                            {
                                text: "Error Detection and Handling",
                                link: "/resources/cpp/error-detection-and-handling",
                                items: [
                                    {
                                        text: "What is Error Handling?",
                                        link: "/resources/cpp/error-detection-and-handling#what-is-error-handling",
                                    },
                                    {
                                        text: "Try, Catch, and Throw",
                                        link: "/resources/cpp/error-detection-and-handling#try-catch-and-throw",
                                    },
                                    {
                                        text: "Results and Optional Types",
                                        link: "/resources/cpp/error-detection-and-handling#results-and-optional-types",
                                    },
                                ],
                                collapsed: true,
                            },
                            { text: "File Input and Output", link: "/resources/cpp/file-io" },
                            {
                                text: "User Defined Types",
                                link: "/resources/cpp/user-defined-types",
                                items: [
                                    {
                                        text: "What is a User Defined Type?",
                                        link: "/resources/cpp/user-defined-types#what-is-a-user-defined-type",
                                    },
                                    {
                                        text: "Structs and Classes",
                                        link: "/resources/cpp/user-defined-types#structs-and-classes",
                                    },
                                    { text: "Enumerations", link: "/resources/cpp/user-defined-types#enumerations" },
                                    { text: "Type Aliases", link: "/resources/cpp/user-defined-types#type-aliases" },
                                ],
                                collapsed: true,
                            },
                            {
                                text: "Containers",
                                link: "/resources/cpp/containers",
                                items: [
                                    {
                                        text: "What is a Container?",
                                        link: "/resources/cpp/containers#what-is-a-container",
                                    },
                                    { text: "Arrays", link: "/resources/cpp/containers#arrays" },
                                    {
                                        text: "Range Based For Loops",
                                        link: "/resources/cpp/containers#range-based-for-loops",
                                    },
                                    { text: "Vectors", link: "/resources/cpp/containers#vectors" },
                                    { text: "Strings", link: "/resources/cpp/containers#strings" },
                                    { text: "Unordered Maps", link: "/resources/cpp/containers#unordered-maps" },
                                ],
                            },
                        ],
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
                            { text: "CLion", link: "/resources/dev-envs/clion" },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "General Resources",
                        items: [
                            { text: "Standards", link: "/resources/general/standards" },
                            { text: "Compiler Development", link: "/resources/general/compiler-development" },
                        ],
                        collapsed: true,
                    },
                ],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/TCCPP/wiki" },
            { icon: "discord", link: "https://discord.gg/tccpp" },
        ],
    },
    markdown: {
        lineNumbers: true,
        math: true,
        config: md => {
            md.use(footnote);
            md.use(wiki_icons_plugin);
        },
    },
    cleanUrls: true,
});
