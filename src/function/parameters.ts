//オプションパラメータを持つ関数 username?: string
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'abc') {
    console.log('function parameters sample 1: user is signed in! Username is', username)
    return true
  } else {
    console.log('function parameters sample 2 user is not signed in.')
    return false
  }
}

// デフォルトパラメータを持つ関数 username = "no name"
export const isUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'abc') {
    console.log('function parameters sample 3: user is signed in! Username is', username)
    return true
  } else {
    console.log('function parameters sample 4 user is not signed in.')
    return false
  }
}

// レストパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice
  }, 0) /* 0はprevTotalの初期値 */
}
