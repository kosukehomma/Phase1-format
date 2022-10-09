// 定義と実行に分かれる
// 関数(処理をまとめて名前をつけるもの)の定義
// function cook(food1, food2) {
//   console.log(`${food1}が出来上がりました。`);
//   console.log(`${food2}が出来上がりました。`)
// }

// 関数宣言
// function applyTax(price) {
//   // TODO: 消費税込みの金額を出力する
//   return price * 1.1  //! return文を使用することで任意の値を「戻り値」として指定できる！
// }

// // 関数式
// const applyTax = function(price) {
//   return price * 1.1
// }

// アロー関数
// const applyTax = (price) => {
// const applyTax = price => { //引数が一つの場合、()を省略できる
//   return price * 1.1;
// }
const applyTax = price => price * 1.1;  //処理が1行のみの場合ブロック({})とreturnを省略できる

/* function 関数名(仮引数) {
    処理
    return 戻り値
  }
*/

// 実行(呼び出し)
// 関数を実行する際は、関数名に()を付ける
const result1 = applyTax(1000);
const result2 = applyTax(580);
// TODO: 上の結果を合計したい
console.log(result1 + result2);

/*
関数を使うと。。。
- 好きな時に何度でも呼び出せる
- 引数を用いて、実行時に任意の値を渡せる
*/
