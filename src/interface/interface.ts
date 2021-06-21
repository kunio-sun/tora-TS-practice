interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

// 型エイリアスで表現
// interfaceと違いマージする時は交差型(union)を使う
type MaboDofu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice //交差型(union)
const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 300,
}

// インタフェースの継承extends
interface Book {
  page: number
  title: string
}
interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}
const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
}

//タイプエイリアスを拡張したインタフェース
type BookType = {
  page: number
  title: string
}
interface Handbook extends BookType {
  theme: string
}
//HandBookをアノテーション
const cotrip: Handbook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
}

// implementsを使ってclassに型を定義する
class Comic implements Book {
  page: number
  title: string
  constructor(page: number, title: string, private publicYear: string) {
    this.page = page
    this.title = title
  }

  getPublishYear() {
    return this.title + 'が発売されたのは' + this.publicYear + '年です'
  }
}
const popularComic = new Comic(200, '決めつ', '2016')
console.log(popularComic.getPublishYear())
console.log(francePan, maboDon, cotrip, jump)
