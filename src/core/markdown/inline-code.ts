import MarkdownIt from "markdown-it";

const LONG_CODE_THRESHOLD = 20;

export function inline_code_plugin(md: MarkdownIt) {
    const original = md.renderer.rules.code_inline;
    md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const content = token.content;
        const escaped = md.utils.escapeHtml(content);
        if (content.length >= LONG_CODE_THRESHOLD) {
            return `<code class="long">${escaped}</code>`;
        } else {
            return `<code>${escaped}</code>`;
        }
    };
}
