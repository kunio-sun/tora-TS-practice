// // webpack.config.js の resolve.extensionsでファイルを
// // 宣言してるから拡張子が必要なくなる
// import World from './world'

// const root = document.getElementById('root')

// const world = new World('hello world!')
// world.sayHello(root)

// 03. 基本の型定義 プリミティブ型(primitive)
import { primitiveSample, notExistSample, anySample, unknownSample } from './basic/index'
primitiveSample()
notExistSample()
anySample()
unknownSample()
