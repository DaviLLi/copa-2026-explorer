import js from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**", "coverage/**"],
  },

  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
    },
  },

  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        jest: "readonly",
      },
    },
  },
];
