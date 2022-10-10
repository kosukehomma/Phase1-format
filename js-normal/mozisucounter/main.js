// テキストエリアに文字を複数入力する
// 400が入力に応じてカウントダウンされていく
// 文字を消せばカウントアップされていく
// リセットボタンで入力された文字全てを消去することができる

const input = document.getElementById('sampleForm');
const countNum = document.getElementById('textCounter');
const reset = document.getElementById('resetBtn');
const goalNum = 400;
let textarea;

countNum.textContent = `残り${goalNum - input.value.length}文字`;

input.addEventListener('keyup', ()=> {
  countNum.textContent = `残り${goalNum - input.value.length}文字`;
  textarea = input.value;
});

reset.addEventListener('click', () => {
  countNum.textContent = `残り${goalNum}`;
  textarea = "";
});

const iniDel = document.getElementById('iniDel');
const endDel = document.getElementById('endDel');

iniDel.addEventListener('click', function() {
  textarea = textarea.slice(1);
  input.value = textarea;
  countNum.textContent = `残り${goalNum - input.value.length}文字`;
});

endDel.addEventListener('click', () => {
  textarea = textarea.slice(0, -1);
  input.value = textarea;
  countNum.textContent = `残り${goalNum - input.value.length}文字`;
});
