export default function notExistSample(): void {
  let name = null
  console.log('notExitsSample sample 1: ', typeof name, name)

  name = 'trahack'

  if (name) {
    console.log('notExitsSample sample 3: ', '名前は', name)
  } else {
    console.log('notExitsSample sample 2: ', '名前はまだ', name)
  }

  let age = undefined
  console.log('notExitsSample sample 4:', typeof age, age)

  age = 44
  if (age) {
    console.log('notExitsSample sample 6: ', '年齢は', age)
  } else {
    console.log('notExitsSample sample 5: ', '年齢は秘密です')
  }
}
