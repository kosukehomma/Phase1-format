let timeout1;
let timeout2;
let timeout3;
let timeout4;
let timeout5;
let timeout6;
let timeout7;
let timeout8;
let timeout9;

const nowTime1 = document.getElementById('nowTime');
const nowTime2 = document.getElementById('nowTime2');
const nowTime3 = document.getElementById('nowTime3');
const nowTime4 = document.getElementById('nowTime4');
const nowTime5 = document.getElementById('nowTime5');
const nowTime6 = document.getElementById('nowTime6');
const nowTime7 = document.getElementById('nowTime7');
const nowTime8 = document.getElementById('nowTime8');
const nowTime9 = document.getElementById('nowTime9');

let count1 = 0;
let count2 = 0;
let count3 = 0;

let slotLength = 3;

nowTime1.textContent = count1;
nowTime2.textContent = count2;
nowTime3.textContent = count3;
nowTime4.textContent = 9;
nowTime5.textContent = 9;
nowTime6.textContent = 9;
nowTime7.textContent = 1;
nowTime8.textContent = 1;
nowTime9.textContent = 1;

const stopBtn1 = document.getElementById('setTime1');
const stopBtn2 = document.getElementById('setTime2');
const stopBtn3 = document.getElementById('setTime3');
stopBtn1.disabled = true;
stopBtn2.disabled = true;
stopBtn3.disabled = true;

const startBtn = document.getElementById('startTimer');

startBtn.addEventListener('click', () => {
  stopBtn1.disabled = false;
  stopBtn2.disabled = false;
  stopBtn3.disabled = false;
  clearInterval(timeout1);
  clearInterval(timeout2);
  clearInterval(timeout3);
  displayCount();
});

const displayCount = () => {
  timeout1 = setInterval(() => {
    if(count1 === 0) {
      count1 = 0;
      nowTime1.textContent = count1;
      nowTime4.textContent = 9;
      nowTime7.textContent = 1;
      count1++;
    } else if(count1 === 9) {
      nowTime1.textContent = count1;
      nowTime4.textContent = count1 - 1;
      nowTime7.textContent = 0;
      count1 = 0;
    } else {
      nowTime1.textContent = count1;
      nowTime4.textContent = count1 - 1;
      nowTime7.textContent = count1 + 1;
      count1++;
    }
  }, 500);

  timeout2 = setInterval(() => {
    if(count2 === 0) {
      count2 = 0;
      nowTime2.textContent = count2;
      nowTime5.textContent = 9;
      nowTime8.textContent = 1;
      count2++;
    } else if(count2 === 9) {
      nowTime2.textContent = count2;
      nowTime5.textContent = count2 - 1;
      nowTime8.textContent = 0;
      count2 = 0;
    } else {
      nowTime2.textContent = count2;
      nowTime5.textContent = count2 - 1;
      nowTime8.textContent = count2 + 1;
      count2++;
    }
  }, 500);

  timeout3 = setInterval(() => {
    if(count3 === 0) {
      count3 = 0;
      nowTime3.textContent = count3;
      nowTime6.textContent = 9;
      nowTime9.textContent = 1;
      count3++;
    } else if(count3 === 9) {
      nowTime3.textContent = count3;
      nowTime6.textContent = count3 - 1;
      nowTime9.textContent = 0;
      count3 = 0;
    } else {
      nowTime3.textContent = count3;
      nowTime6.textContent = count3 - 1;
      nowTime9.textContent = count3 + 1;
      count3++;
    }
  }, 500);
};


stopBtn1.addEventListener('click', ()=> {
  stopBtn1.setAttribute('disabled', 'true');
  clearInterval(timeout1);
  slotLength -= 1;
  stopTime();
});
stopBtn2.addEventListener('click', ()=> {
  stopBtn2.setAttribute('disabled', 'true');
  clearInterval(timeout2);
  slotLength -= 1;
  stopTime();
});
stopBtn3.addEventListener('click', ()=> {
  stopBtn3.setAttribute('disabled', 'true');
  clearInterval(timeout3);
  slotLength -= 1;
  stopTime();
});

const stopTime = () => {
  if(slotLength === 0) {
    slotLength = 3;
    if(nowTime1.textContent === nowTime2.textContent && nowTime1.textContent === nowTime3.textContent) {
      alert('大成功！');
    } else {
      alert('再挑戦');
    }
  }
};
