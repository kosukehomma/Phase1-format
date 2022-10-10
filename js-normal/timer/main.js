// 何秒からカウンドダウンするか数値を入力する
// 入力した数値をセットする
// カウントダウンをスタートする
// カウントが0になったら終了アラートを出す
// カウントダウンは途中止めることができる

let timer;
let sec = 10;

const nowTime = document.getElementById('nowTime');
const inputTime = document.getElementById('inputTime');
const setTime = document.getElementById('setTime');
const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');

let leftHour;
let leftMin;
let leftSec;

setTime.addEventListener('click', () => {
  sec = inputTime.value;
  leftSec = sec % 60
  leftMin = Math.floor((sec % 3600) / 60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒：セット完了です`;
});

startTimer.addEventListener('click', () => {
  clearInterval(timer);
  timer = setInterval(countDown, 1000);
});

const countDown = () => {
  sec -= 1;
  leftSec = sec % 60
  leftMin = Math.floor((sec % 3600) / 60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒`;
  if (sec === 0) {
    alert('終了');
    clearInterval(timer);
  }
};

stopTimer.addEventListener('click', () => {
  clearInterval(timer);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒：ストップしました`;
});