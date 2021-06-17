export default function primitiveSample(): void {
  const name = 'kunio'
  // typeof その変数の型を表示
  console.log('primitive sample 1: ', typeof name, name)

  const age = 12
  console.log('primitive sample 2: ', typeof age, age)

  const isSingle = true
  console.log('primitive sample 3: ', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log('primitive sample 4: ', typeof isOver20, isOver20)
}
