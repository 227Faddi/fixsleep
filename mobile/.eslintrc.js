module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "unused-imports"],
  rules: {
    "prettier/prettier": "warn",
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    "import/resolver": {
      alias: {
        extensions: [".ts", ".tsx"],
        map: [["@", "."]],
      },
    },
  },
};
