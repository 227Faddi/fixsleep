module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
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
