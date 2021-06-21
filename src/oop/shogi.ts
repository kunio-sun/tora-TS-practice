// 型エイリアス(type)の宣言
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

// コマの位置を表すPositionクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  // パラメータに渡された位置と現在の位置を比較するメソッド
  distanceFrom(position: Position, player: Player) {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)),
      }
    }
  } // end distanceFrom()
}

// コマを表すクラス
abstract class Piece {
  // クラスを型として使用できる！
  // protected← Pieceクラスとサブクラスでアクセス可能に
  protected position: Position
  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    // this = Pieceクラスの中の
    this.position = new Position(suji, dan)
  }

  // メソッドの定義
  // コマの移動用メソッド
  moveTo(position: Position) {
    this.position = position
  }
  // 移動できるかどうかを判定するメソッド
  abstract canMovaTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
  // 王将のcanMoveToメソッドを具体的に実装
  canMovaTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    // true or false return
    return distance.suji < 2 && distance.dan < 2
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [new Osho('first', 5, '1'), new Osho('second', 5, '9')]
  }
}
new Game()
