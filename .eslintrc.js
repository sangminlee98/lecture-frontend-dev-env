module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true,
  },
  extends: ["eslint:recommended", "plugin:prettier//recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // TODO: 프리티어 설정을 추가하세요.
  rules: {},
};
