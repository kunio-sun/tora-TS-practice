export default async function asyncAwaitSample(): Promise<void> {
  const url = 'https://api.github.com/users/kunio-sun'
  type Profile = {
    login: string
    id: number
  }
  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.error(error)
        return null
      })
    // errorなら全体でnullを返す
    if (!response) {
      return null
    }

    const json = await response
      .json()
      .then((json: Profile) => {
        console.log('Asynchronous async/await Sample1:', json)
        return json
      })
      .catch((error) => {
        console.error(error)
        return null
      })
    // errorならnullを返す
    if (!json) {
      return null
    }

    // 成功時はjsonデータにした取得データを返す
    return json
  }

  const profile = await fetchProfile()
  if (profile) {
    console.log('Asynchronous async/await Sample2:', profile)
  }
}
