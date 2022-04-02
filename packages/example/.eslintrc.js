const { resolve } = require("path");
module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,
  globals: {
    ga: "readonly", // Google Analytics
    cordova: "readonly",
    __statics: "readonly",
    process: "readonly",
    Capacitor: "readonly",
    chrome: "readonly",
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      files: ["**/*.{vue,ts,tsx}"],
      // https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
      // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
      // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
      parserOptions: {
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
        // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint
        // Needed to make the parser take into account 'vue' files
        extraFileExtensions: [".vue"],
        parser: "@typescript-eslint/parser",
        project: resolve(__dirname, "./tsconfig.json"),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
          jsx: true,
        },
      },
      // Rules order is important, please avoid shuffling them
      extends: [
        // Base ESLint recommended rules
        // 'eslint:recommended',

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
        // ESLint typescript rules
        "plugin:@typescript-eslint/recommended",
        // consider disabling this class of rules if linting takes too long
        "plugin:@typescript-eslint/recommended-requiring-type-checking",

        // Uncomment any of the lines below to choose desired strictness,
        // but leave only one uncommented!
        // See https://eslint.vuejs.org/rules/#available-rules
        // "plugin:vue/vue3-essential", // Priority A: Essential (Error Prevention)
        // "plugin:vue/vue3-strongly-recommended", // Priority B: Strongly Recommended (Improving Readability)
        "plugin:vue/vue3-recommended", // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

        // https://github.com/prettier/eslint-config-prettier#installation
        // usage with Prettier, provided by 'eslint-config-prettier'.
        // "prettier",
        "plugin:prettier/recommended",
      ],
      plugins: [
        // required to apply rules which need type information
        // "@typescript-eslint",
        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
        // required to lint *.vue files
        // "vue",
        // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
        // Prettier has not been included as plugin to avoid performance impact
        // add it as an extension for your IDE
      ],
      // add your custom rules here
      rules: {
        "prefer-promise-reject-errors": "off",

        // TypeScript
        // quotes: ['warn', 'single', { avoidEscape: true }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",

        // allow debugger during development only
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "vue/no-v-html": "off",
      },
    },
  ],
};
