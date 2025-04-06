import assert from "assert";
import MarkdownIt from "markdown-it";
import { Token } from "markdown-it/index.js";
import StateCore from "markdown-it/lib/rules_core/state_core.mjs";

// based on markdown-it-emoji

const ICONS = {
    cpp: "c++.svg",
    c: "c.svg",
    vs: "vs.webp",
    vscode: "vs-code.webp",
};

const ICON_PATH = "assets/icons";

function regex_escape(str: string) {
    return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}

export const icon_re = new RegExp(
    Object.keys(ICONS)
        .map(name => `:${name}:`)
        .map(regex_escape)
        .join("|"),
);
export const icon_re_global = new RegExp(icon_re.source, "g");

function split_text_token(text: string, level: number, Token: StateCore["Token"]) {
    let last_pos = 0;
    const nodes: Token[] = [];

    for (const { 0: match, index } of text.matchAll(icon_re_global)) {
        let icon_name = match.slice(1, -1);
        // Add new tokens to pending list
        if (index > last_pos) {
            const token = new Token("text", "", 0);
            token.content = text.slice(last_pos, index);
            nodes.push(token);
        }

        const token = new Token("wiki_icon", "", 0);
        token.markup = icon_name;
        token.meta = {
            path: `/${ICON_PATH}/${ICONS[icon_name]}`,
            alt: icon_name,
        };
        nodes.push(token);

        last_pos = index + match.length;
    }

    if (last_pos < text.length) {
        const token = new Token("text", "", 0);
        token.content = text.slice(last_pos);
        nodes.push(token);
    }

    return nodes;
}

export const wiki_icons_plugin = (md: MarkdownIt) => {
    md.renderer.rules.wiki_icon = function (tokens, idx /*, options, env */) {
        return `<InlineIcon src="${tokens[idx].meta.path}" alt="${tokens[idx].meta.alt}" />`;
    };
    md.core.ruler.after("linkify", "wiki_icon", function (state) {
        const blockTokens = state.tokens;
        let auto_link_level = 0;
        for (let j = 0, l = blockTokens.length; j < l; j++) {
            if (blockTokens[j].type !== "inline") {
                continue;
            }
            let tokens = blockTokens[j].children;
            assert(tokens);
            // scan from end to keep position when tokens are added
            for (let i = tokens.length - 1; i >= 0; i--) {
                const token: Token = tokens[i];
                if ((token.type === "link_open" || token.type === "link_close") && token.info === "auto") {
                    auto_link_level += token.nesting;
                }
                if (token.type === "text" && auto_link_level === 0 && icon_re.test(token.content)) {
                    // replace current node
                    blockTokens[j].children = tokens = md.utils.arrayReplaceAt(
                        tokens,
                        i,
                        split_text_token(token.content, token.level, state.Token),
                    );
                }
            }
        }
    });
};
