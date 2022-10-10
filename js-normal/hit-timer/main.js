// スタートボタンを押す
// 目に見えないストップウォッチが走る
// 確認ボタンを押す
// 20秒ジャストなら成功のアラート表示
// 20秒未満または21秒以上で残念のアラート表示

let timer;
let count = 0;

const confirmTime = document.getElementById('confirmTime');
const startTimer = document.getElementById('startTimer');

confirmTime.addEventListener('click', () => {
  if(count === 20) {
    alert('ジャスト20秒！');
  } else if(count < 20) {
    alert(`まだ${count}秒、足りません。。`);
  } else {
    alert(`${count}秒。。オーバーしちゃったね。`);
  }
  clearInterval(timer);
  count = 0;
})

startTimer.addEventListener('click', () => {
  timer = setInterval('countUp()', 1000);
});

const countUp = () => {
  count++;
  console.log(count);
  if (count === 40) {
    alert('強制終了です。やり直し！');
    count = 0;
  }
};
/* ------------------------------------- */
let runTimer;

const confirmTime2 = document.getElementById('confirmTime2');
const startTimer2 = document.getElementById('startTimer2');

let startTime;  //開始した時刻
let nowTime;  //現在の時刻
let diffTime; //開始した時刻と現時刻との差分

confirmTime2.addEventListener('click', () => {
  if(startTime === undefined) {
    return;
  }
  if(diffTime === 20) {
    alert('ジャスト20秒！');
  } else if (diffTime < 20) {
    alert(`まだ${diffTime}秒。足りなかったね。`);
  } else {
    alert(`${diffTime}秒。過ぎちゃったね。やり直し。`);
  }
  clearInterval(runTimer);
})

startTimer2.addEventListener('click', () => {
  startTime = new Date();
  runTimer = setInterval(countUp2, 1000);
});

const countUp2 = () => {
  nowTime = new Date();
  diffTime = Math.floor((nowTime.getTime() - startTime.getTime()) / 1000);
  console.log(nowTime, diffTime);
  if (diffTime === 40) {
    alert('強制終了。やり直し！');
    clearInterval(runTimer);
  }
};
