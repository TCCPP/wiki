const sidebar = [
    {
        text: "Resources",
        items: [
            { text: "Home", link: "/resources/" },
            { text: "Getting Started", link: "/resources/getting-started" },
            {
                text: "Build Systems",
                items: [
                    {
                        text: "CMake",
                        link: "/resources/build-systems/cmake",
                    },
                ],
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
            {
                text: "C++ Resources",
                items: [
                    {
                        text: "C++ Learning Material",
                        link: "/resources/cpp/learning",
                    },
                    {
                        text: "C++ Libraries",
                        link: "/resources/cpp/libraries",
                    },
                ],
                collapsed: true,
            },
            {
                text: "General Resources",
                items: [
                    { text: "Address Sanitizer", link: "/resources/general/asan" },
                    { text: "Standards", link: "/resources/general/standards" },
                    { text: "Project Ideas", link: "/resources/general/project-ideas" },
                    { text: "Floating Point Numbers", link: "/resources/general/floating-point" },
                ],
                collapsed: true,
            },
            {
                text: "Advanced Resources",
                items: [
                    { text: "Performance Analysis", link: "/resources/advanced/performance-analysis" },
                    { text: "Compiler Development", link: "/resources/advanced/compiler-development" },
                ],
                collapsed: true,
            },
            {
                text: "FAQ",
                items: [
                    { text: "Scanf Whitespace", link: "/resources/general/scanf-whitespace" },
                    {
                        text: "Overloading Stream Operators",
                        link: "/resources/cpp/stream-operators",
                    },
                    {
                        text: "std::endl, Buffers, and Flushing",
                        link: "/resources/cpp/endl",
                    },
                ],
                collapsed: true,
            },
        ],
    },
];

export default sidebar;
