module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended", //esリントのおすすめ初期設定が反映
    "plugin:@typescript-eslint/recommended", // TypeScriptでチェックされる項目をLintから除外する設定
    "prettier", // prettierのextendsは他のextendsより後に記述する
    // "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "sourceType": "module",
    "project": "./tsconfig.json" // TypeScriptのLint時に参照するconfigファイルを指定
  },
  root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
  rules: {
    '@typescript-eslint/no-var-requires': 0
  }// TSでチェックしない様にしたい物を記載
}