/* eslint-env node */
module.exports = {
  plugins: [
    "import",
    "unused-imports",
  ],
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "next",
  ],
  reportUnusedDisableDirectives: true,
  rules: {},
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ["*.js"],
      extends: ["eslint:recommended"],
      parserOptions: {
        project: null,
      },
    },
    {
      files: ["**/*.ts?(x)"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
      ],
      rules: {
        "@typescript-eslint/prefer-optional-chain": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/strict-boolean-expressions": [
          "error",
          {
            allowString: false,
            allowNumber: false,
            allowNullableObject: true,
          },
        ],
        "@typescript-eslint/ban-ts-comment": [
          "error",
          {
            "ts-expect-error": "allow-with-description",
            minimumDescriptionLength: 10,
          },
        ],
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/no-misused-promises": 0,
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          {
            allowNumber: true,
            allowBoolean: true,
          },
        ],
        "no-console": ["error", { allow: ["debug", "info", "warn", "error"] }],
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
        curly: ["error", "all"],
        "max-lines": ["error", 200],
        eqeqeq: ["error", "smart"],
        complexity: ["error", 8],
        "max-depth": ["error", 3],
        "max-params": ["error", 4],
        "prefer-const": "error",
        "import/order": [
          "error",
          {
            pathGroups: [
              {
                pattern: "src/**",
                group: "internal",
              },
              {
                pattern: "public/**",
                group: "internal",
              },
              {
                pattern: "messages/**",
                group: "internal",
              },
            ],
            groups: [
              ["external", "builtin"],
              "unknown",
              "internal",
              ["parent", "sibling", "index"],
            ],
            alphabetize: {
              order: "asc",
              caseInsensitive: false,
            },
            "newlines-between": "always",
            pathGroupsExcludedImportTypes: ["builtin"],
          },
        ],
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,
        "import/no-duplicates": "error",
        "import/namespace": "off",
        "sort-imports": [
          "error",
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          },
        ],
        "padding-line-between-statements": [
          "error",
          {
            blankLine: "always",
            prev: "*",
            next: "return",
          },
        ],
      },
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react", "plugin:jest/recommended"],
      plugins: ["jest"],
      rules: {
        "@typescript-eslint/unbound-method": "off",
        "jest/unbound-method": "error",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
};
