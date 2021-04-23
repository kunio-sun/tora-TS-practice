// webpack.config.js の resolve.extensionsでファイルを
// 宣言してるから拡張子が必要なくなる
import World from './world';

const root = document.getElementById('root');

const world = new World('world!');
world.sayHello(root)
