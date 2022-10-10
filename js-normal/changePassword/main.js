// 現在のパスワードとして初期の値を用意
// 現在のパスワードを冒頭に取得して表示させる
// 一つめのテキストボックスに現在のパスワードを入力
// もう一つのテキストボックスに新しいパスワードを入力
// 入力した現在のパスワードと新しいパスワードを取得
// 冒頭で取得した現在のパスワードと入力した現在のパスワードは一致するか、一致しなかった場合は「現在のパスワードが違います」とアラート
// 入力した現在のパスワードと新しいパスワードは異なるか。同じだった場合「同じパスワードは使えません」とアラート
// 変更ボタンを押下で新しいパスワードは〜〜〜とアラートを出す
// 初期の値から新しいパスワードに冒頭の表示が変わる
// 一つめに入力する現在のパスワードも変更となる
// 全角半角は問わない

let currentPass = 'aaaaa';
const nowPassword = document.getElementById('nowPassword');
const setPassword = document.getElementById('setPassword');

nowPassword.textContent = `現在のパスワードは ${currentPass} です。`;

setPassword.addEventListener('click', ()=> {
  const confirmPassword = document.getElementById('confirmPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  if(currentPass === confirmPassword) {
    let result = newPassword.match(/^\d{3}-?\d{4}$/);
    if(!result) {
      alert('xxx-yyyyの形式で入力してください')
    } else {
      currentPass = newPassword;
      nowPassword.textContent = `現在のパスワードは ${currentPass} です。`;
      alert(`新しいパスワードは ${currentPass} です。`);
    }
  } else {
    alert('古いパスワードが間違っています！');
  }
});
