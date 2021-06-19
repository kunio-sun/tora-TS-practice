export default function objectSample(): void {
  // こうするとオブジェクトのnameプロパティはobjectだよ
  // ってエラーが出る
  // const a: object = {
  //   name: 'kuni',
  //   age: 22
  // }
  // a.name

  // オブジェクトリテラル記法でこれを回避
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('object object sample 1:', country)

  country = {
    language: 'English',
    name: 'USA',
  }
  console.log('object object sample 2:', country)

  //オプショナルとreadonly
  const kuni: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 21,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }

  kuni.gender = 'male'
  kuni.lastName = 'kamado'
  // 再代入できないエラーが出る← readonlyのため
  // kuni.firstName = 'tanjiro'
  console.log('object object sample 3:', kuni)

  // インデックスシグネチャ
  const capitals: {
    //何回もこのパターンとvalueが入るオブジェクトであることを示す事ができる
    [countryName: string]: string
  } = {
    japan: 'Tokyo',
    korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  console.log('object object sample 4:', capitals)

  //型エイリアス
} // end function
