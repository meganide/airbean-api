module.exports = {
  env: {
    browser: true,  
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["error"],
    "linebreak-style": "off",
    "no-console": "off",
    "import/extensions": "off",
    endOfLine: "auto",
  },
};
