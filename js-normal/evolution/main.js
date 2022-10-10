// 進化するボタンを押下
// 0〜9の乱数を生成
// 写真を入れる親要素の中身を削除
// 画像1を入れる
// もし乱数が4以上だったら画像2を入れる
// もし乱数が7以上だったら画像3を入れる
// もし乱数が9以上だったら画像を入れる

const setBtn = document.getElementById('setBtn');
const showImg = document.getElementById('showImg');
const reset = document.getElementById('resetBtn');

setBtn.addEventListener('click', () => {
  showImg.innerHTML = "";
  const checkNum = Math.floor(Math.random() * 10);

  const first = document.createElement('div');
  first.innerHTML = "<img src='./img/evolution1.png' alt='原人' />";
  showImg.appendChild(first);
  const firstWord = document.createElement('p');
  firstWord.innerHTML = '原人';
  first.appendChild(firstWord);

  if(checkNum >= 4) {
    const second = document.createElement('div');
    second.innerHTML = "<img src='./img/evolution2.png' alt='旧人' />";
    showImg.appendChild(second);

    const secondWord = document.createElement('p');
    secondWord.innerHTML = '旧人';
    second.appendChild(secondWord);
  }
  if(checkNum >= 7) {
    const third = document.createElement('div');
    third.innerHTML = '<img src="./img/evolution3.png" alt="新人" />';
    showImg.appendChild(third);

    const thirdWord = document.createElement('p');
    thirdWord.innerHTML = '新人';
    third.appendChild(thirdWord);
  }
  if(checkNum >= 9) {
    const fourth = document.createElement('div');
    fourth.innerHTML = '<img src="./img/evolution4.png" alt="現代人" />';
    showImg.appendChild(fourth);

    const fourthWord = document.createElement('p');
    fourthWord.innerHTML = '現代人';
    fourth.appendChild(fourthWord);
  }
});

reset.addEventListener('click', ()=> {
  showImg.innerHTML = "";
});
