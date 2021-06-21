// コールバックで繋げていくのはあまり良い例ではない
export default function callbackSample(): void {
  const url = 'https://api.github.com/users/kunio-sun'

  //コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        // レスポンスのbodyをJSONで読み取った結果を返す
        res
          .json()
          .then((json) => {
            console.log('Asynchronous Callback Sample1:', json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log('Asynchronous Callback Sample2:', profile)
  // コンソールの順番が意図しなくなっているのが確認できる
}
