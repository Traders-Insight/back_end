/**
 * ESLint configuration for the project.
 *
 * See https://eslint.style and https://typescript-eslint.io for additional linting options.
 */
// @ts-check

export default [
  {
    ignores: [".vscode-test", "out"],
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
