// npm初期モジュールのpathを呼ぶ
const path = require('path');

//webpack設定の宣言
module.exports = {

  entry: {
    // webpackのバンドルの起点になるファイル
    bandle: './src/index.ts'
  },
  // 出力先の設定値
  output: {
    // __dirname はこのプロジェクトのルートのパスを表示
    path: path.join(__dirname, 'dist'),
    //[name]はentory.bandleのファイル名を指定
    filename: 'bundle.js'
  },
  resolve: {
    // 名前解決の時ファイルの拡張子を書かなくて良くなる
    extensions: ['.ts', '.js']
  },
  // webPackDevServerが参照するフォルダ
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // ローカルwebサーバ起動時,勝手にブラウザを起動
    open: true
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        // 対象ファイルは.tsで終わる物、正規表現→/で囲む
        // \→エスケープ(次文字を文字列として認識)
        test: /\.ts$/
      }
    ]
  }

}