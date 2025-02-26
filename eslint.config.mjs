import reactPlugin from "eslint-plugin-react";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import typescriptRecommended from "@typescript-eslint/eslint-plugin/dist/configs/recommended";

export default [
  {
    ignores: [".vscode-test", "out"],
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        browser: true,
        node: true,
        es6: true,
      },
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactRecommended,
  typescriptRecommended,
];
