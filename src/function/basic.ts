// アロー関数
export const logMessage = (message: string): void => {
  console.log('function basic sample 1', message)
}

// 名前付き関数
export function logMessage2(message: string): void {
  console.log('function basic sample 2', message)
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log('function basic sample 3', message)
}

// アロー関数省略記法
export const logMessage4 = (message: string): void => console.log('function basic sample 4', message)

export const alwaysTHrowError = (message: string): never => {
  throw new Error(message)
}

// 呼び出しシグネチャ（省略) 関数の型定義
type LogMessage = (message: string) => void
export const logMessage6: LogMessage = (message) => {
  console.log('function basic sample 6', message)
}
// react onclick で子コンポーネントに関数をプロップスで渡す際よく使用する
// また毎回毎回個別に関数にアノテーション指定(:string)をする必要がなくなる
// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}
export const logMessage7: FullLogMessage = (message) => {
  console.log('function basic sample 7', message)
}
