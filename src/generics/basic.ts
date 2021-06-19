export default function genericsSample(): void {
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 1: ', stringReduce(['May ', 'the', 'fource'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 2: ', numberReduce([4, 3, 2], 2))

  // ジェネリック型を使わないエイリアス(type)の場合
  // type Reduce = {
  //   (array: string[], initialValue: string): string
  //   (array: number[], initialValue: number): number
  // }
  //↑これでも成り立つが例えばboolean型でも利用したい場合コードが冗長になる

  // ジェネリック型で型のエイリアス(type)を作る
  // ジェネリック型パラメータをTで今回は作成
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }
  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 3: ', genericStringReduce(['これは', 'genericStringReduce()'], ''))

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 4: ', genericNumberReduce([4, 3], 5))

  // いろいろなジェネリック型の定義
  // 完全な呼び出しシグネチェ(ここのシグネチャにジェネリック型を割り当てる)
  // 最初のTはパラメータ
  // type GenericReduce2 = {
  //   <T>(array: T[], initialValue: T): T
  //   <U>(array: U[], initialValue: U): U
  // }

  //呼び出しシグネチャの省略記法雨
  // type GenericReduce3<T> = (array: T[], initialValue: T) => T
  // type GenericReduce4 = <T>(array: T[], initialValue: T) => T
} // end genericSample();
