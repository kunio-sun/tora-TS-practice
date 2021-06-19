export default function genericsAdvancedSample(): void {
  // map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  // 文字列を数値に
  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }

    return result
  }

  const numbers = mapStringsToNumbers(['12', '4'], (item) => Number(item))
  console.log('generics advanced sample1:', numbers)

  // 数字を文字列に
  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }

    return result
  }

  const strings = mapNumbersToStrings([12, 4], (item) => String(item))
  console.log('generics advanced sample2:', strings)
}
