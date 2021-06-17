export default function unknownSample(): void {
  // unknown型は何が入るか分からないが、入ってから型変更不可に
  // unknown型はAPIでなんの値が返ってくるか分からない時活用する
  const maybeNumber: unknown = 10
  console.log('unknown sample 1:', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('unknown sample 2:', typeof isFoo, isFoo)

  // unknown型で宣言した変数は今入ってる値が設定した型か
  // if文で確認してあげる事で使用できる
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3:', typeof sum, sum)
  }
}
