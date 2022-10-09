// 値

// 数値
// console.log(100);
// console.log(1.5);

// 文字列
// console.log("Hello");

// 配列
// console.log([1, 2, 3, 4, 5]);

// 真偽値
// console.log(true);
// console.log(false);

// オブジェクト
// console.log({ one: 1, two: 2 });


// 変数

const myName = 'Beppu';
// const 名前 = 値;

// console.log(myName);

// 変数myNameに値'Beppu'を代入する

const number = 100;
const isValid = true;
const userIds = [1, 3, 10];

// console.log(number);
// console.log(isValid);
// console.log(userIds);

//! constは変数を必ず初期化する必要がある
//! letは初期化しなくともOK
let learning; 

//! constは再代入できない
//! letは再代入できる
learning = 'Ruby';

// console.log(learning);

// 文字列処理
"I'm Homma Kosuke."
'I\'m Homma Kosuke.'

// 文字列の結合
const breakfast = "トースト";

// console.log("今日の朝ごはんは" + breakfast + "でした。");

// テンプレート文字列
// console.log(`今日の朝ごはんは${breakfast}でした。`);

// 配列 ※複数のデータをひとまとめにしたいときに使う
const days = ['日', '月', '火', '水', '木', '金', '土'];

// console.log(days[3]); // => []の中にインデックスを指定して配列の要素を取得  ※配列のデータに振られている番号をインデックスと呼ぶ

// console.log(days.length);

// 配列の操作
const nengou = ['明治', '大正', '昭和', '平成'];
// console.log(nengou);

// 要素の追加
nengou.push('令和');

// console.log(nengou);  // ["明治", "大正", "昭和", "平成", "令和"]

nengou.splice(3, 1);  // 配列.splice(削除したい要素のインデックス, 削除したい要素の個数)

// console.log(nengou);
// => ["明治", "大正", "昭和", "令和"] ※平成が削除される

nengou[2] = 'showa';

// console.log(nengou);
// => ["明治", "大正", "showa", "令和"] ※昭和がアルフファベットに

// 条件分岐
const num = Math.random() // Math.random() => ランダムな数値を返してくれるプログラム

// if (num >= 0.5) { // numが0.5以上である場合
//   console.log('大きめ');
// } else {
//   console.log('小さめ');
// }

// console.log(`数値：${num}`);

// 真偽値(if文のより厳密な挙動)

// 原則、if文は、条件式がtrueの場合に実行される
// if (num >= 0.5) {
//   console.log('条件はtrueです！');
// } else {
//   console.log('条件はfalseです！');
// }

// if(100) {
//   console.log('このプログラムは実行される')
// }

// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (初期化処理; 継続条件; 更新処理) {
//   繰り返したい処理
// }

// 1. 変数iに0を代入（初期化処理の実行）
// 2. i < 10 は満たしているか？(継続条件を評価)満たしていない場合は終了
// 3. ブロック内の処理を実行（繰り返し処理）
// 4. iに1を加算( i === 1)
// 5. 2.に戻る

// while文
// while (継続条件) {
//   繰り返したい処理
// }
// let i = 0
// while (i < 10) {
//   console.log(i);
//   i++;
// }
