export default class World {
  // 変数（プロパティ）
  message: string

  // 初期化
  constructor(message: string) {
    this.message = message
  }

  // method
  public sayHello(elem: HTMLElement | null): void {
    if (elem) {
      elem.innerText = this.message
    }
  }
}
