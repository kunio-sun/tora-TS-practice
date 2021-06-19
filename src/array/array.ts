export default function arraySample(): void {
  // シンプルな配列の方定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123) ← error
  console.log('Array array sample 1:', colors)

  const even: Array<number> = [2, 4]
  even.push(8)
  // even.push('10') ← error
  console.log('Array array sample 2:', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('def')
  ids.push(345)
  console.log('Array array sample 3:', ids)

  //配列の型推論
  const generagteSomeArray = () /* : (string | number)[] */ => {
    const _someArray = [] //any[]
    _someArray.push(123) // number[]
    _someArray.push('abc') //(string|number)[]
    return _someArray
  }
  const someArray = generagteSomeArray()
  someArray.push(458)
  // someArray.push(true); ← error
  console.log('Array array sample 4:', someArray)

  // イミュータブル(変更不可)な配列を作る
  const commands: readonly string[] = ['git add', 'git commit']
  // commands.push("git fetch") ← error
  // commands[2] = 'git pull' ← error
  console.log('Array array sample 5:', commands)
}
