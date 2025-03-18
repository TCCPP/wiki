module.exports = {
    trailingComma: "all",
    printWidth: 120,
    singleQuote: false,
    arrowParens: "avoid",
    tabWidth: 4,
    proseWrap: "always",
    overrides: [
        {
            files: "*.{yml,yaml,md}",
            options: {
                tabWidth: 2,
            },
        },
    ],
};
