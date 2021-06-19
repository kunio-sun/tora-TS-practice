export default function tupleSample(): void {
  //一般的なタプルの型定義
  const response: [number, string] = [200, 'OK']
  // response = [400, 'Bad Request', "email parameter is missing"]←error
  // response = ['400', 'Bad Request']←error
  console.log('Array tuple sample1:', response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlfriends.push('Mise')
  console.log('Array tuple sample2:', girlfriends)
}
