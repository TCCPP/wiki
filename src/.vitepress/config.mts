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
					{ text: "Introduction", link: "/resources/introduction"},
					{
						text: "C", items: [
							{ text: "Beginner", 
								items:[
									{ text: "Getting Started with C++", link: "/resources/c/beginner/getting-started" },
								], 
								collapsed: true,
							},
							{ text: "Intermediate", 
								items:[
									{ text: "Blank", link: "/resources/c/intermediate/blank" },
								],
								collapsed: true,
							},
							{ text: "Proficient", 
								items:[
									{ text: "Blank", link: "/resources/c/proficient/blank" },
								],
								collapsed: true,
							},
							{ text: "Advanced", 
								items:[
									{ text: "Blank", link: "/resources/c/advanced/blank" },
								],
								collapsed: true,
							},
							{ text: "Expert", 
								items:[
									{ text: "Blank", link: "/resources/c/expert/blank" },
								],
								collapsed: true,
							},
						],
						collapsed: true,
					},
					{
						text: "C++", items: [
							{ text: "Beginner", 
								items:[
									{ text: "Getting Started with C++", link: "/resources/cpp/beginner/getting-started" },
								], 
								collapsed: true,
							},
							{ text: "Intermediate", 
								items:[
									{ text: "Blank", link: "/resources/cpp/intermediate/blank" },
								],
								collapsed: true,
							},
							{ text: "Proficient", 
								items:[
									{ text: "Blank", link: "/resources/cpp/proficient/blank" },
								],
								collapsed: true,
							},
							{ text: "Advanced", 
								items:[
									{ text: "Blank", link: "/resources/cpp/advanced/blank" },
								],
								collapsed: true,
							},
							{ text: "Expert", 
								items:[
									{ text: "Blank", link: "/resources/cpp/expert/blank" },
								],
								collapsed: true,
							},

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
