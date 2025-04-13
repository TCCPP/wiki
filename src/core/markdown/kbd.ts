import assert from "assert";
import MarkdownIt from "markdown-it";
import { Token } from "markdown-it/index.js";
import StateCore from "markdown-it/lib/rules_core/state_core.mjs";

export const kdb_re = /\[k:(.+?):\]/;
export const kdb_re_global = new RegExp(kdb_re.source, "g");

function split_text_token(text: string, level: number, Token: StateCore["Token"]) {
    let last_pos = 0;
    const nodes: Token[] = [];

    for (const { 0: match, 1: content, index } of text.matchAll(kdb_re_global)) {
        // Add new tokens to pending list
        if (index > last_pos) {
            const token = new Token("text", "", 0);
            token.content = text.slice(last_pos, index);
            nodes.push(token);
        }

        const token = new Token("kbd", "", 0);
        token.markup = match;
        token.content = content;
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

export function kbd_plugin(md: MarkdownIt) {
    md.renderer.rules.kbd = function (tokens, idx /*, options, env */) {
        return tokens[idx].content
            .split("+")
            .map(part => `<kbd>${part.trim()}</kbd>`)
            .join(" + ");
    };
    md.core.ruler.after("linkify", "kbd", function (state) {
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
                if (token.type === "text" && auto_link_level === 0 && kdb_re.test(token.content)) {
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
}
