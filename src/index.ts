// // webpack.config.js の resolve.extensionsでファイルを
// // 宣言してるから拡張子が必要なくなる
// import World from './world'

// const root = document.getElementById('root')

// const world = new World('hello world!')
// world.sayHello(root)

// 03. 基本の型定義 プリミティブ型(primitive)
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic/index'
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 04. 関数の型定義
// import { logMessage /* alwaysTHrowError */ } from './function/basic'
// import { /* isUserSignedIn,  */ isUserSignedIn2, sumProductsPrice } from './function/parameters'

// logMessage('こんにちはtypescript')
// // alwaysTHrowError(" いつもエラー");
// isUserSignedIn2('abc')
// isUserSignedIn2('faildSigndIn', 'kuni')
// const sum = sumProductsPrice(100, 120, 300)
// console.log('function parameters sample 5: ', sum)

// 05. オブジェクトの型
// import objectSample from './object/object'
// import typeAliasSample from './object/alias'
// objectSample()
// typeAliasSample()

// 06. 配列の型
// import arraySample from './array/array'
// import tupleSample from './array/tuple'
// arraySample()
// tupleSample()

// 08. ジェネリック(汎用,総称)型とポリモーフィズム(多様性)
import genericsSample from './generics/basic'
import genericsAdvancedSample from './generics/advanced'
genericsSample()
genericsAdvancedSample()
