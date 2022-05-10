module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2019,
        project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint", // disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // display prettier errors as ESLint errors. Make sure this is always the last configuration!
    ],
    env: {
        node: true,
    },
    rules: {
        // type is enforced by callers, not entirely, but it's good enough
        "func-style": ["error", "declaration", { allowArrowFunctions: true }], // enforce arrow functions only is afaik not possible - this helps
        "lines-between-class-members": "off", // this is fine
        "no-nested-ternary": "off", // they are fine sometimes
        "no-shadow": "off", // shadowing is a nice language feature
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-interface": "off",
    },
}
