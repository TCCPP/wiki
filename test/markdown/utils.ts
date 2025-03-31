import { Token } from "markdown-it/index.js";

export function reduce(tokens: Token[] | null) {
    if (tokens === null) {
        return null;
    }
    return tokens.map(({ type, content, meta, children }) =>
        meta ? { type, content, meta, children: reduce(children) } : { type, content, children: reduce(children) },
    );
}
