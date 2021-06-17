export default function anySample(): void {
  let name: any = 'torahack' // string代入
  console.log('any sample 1:', typeof name, name)
  // typeScriptでこれは最悪のパターン ← any型はなんのデータも
  // 代入できてしまう為絶対に使用しない
  name = 123
  console.log('any sample 2:', typeof name, name)
}
