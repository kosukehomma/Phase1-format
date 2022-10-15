const doraemon = document.createElement('p');
const body = document.querySelector('body');
body.prepend(doraemon);

let timer;

const doraemonBirthDay = moment("2112-09-03 12:00");

const count = () => {
  const date = moment();
  const years = doraemonBirthDay.diff(date, 'year');
  const month = doraemonBirthDay.diff(date, 'month') % 12;
  const days = doraemonBirthDay.diff(date, 'days') % Math.floor(365 / 12);
  const hours = doraemonBirthDay.diff(date, 'hour') % 24;
  const minutes = doraemonBirthDay.diff(date, 'minute') % 60;
  const seconds = doraemonBirthDay.diff(date, 'second') % 60;
  
  doraemon.textContent = `ドラえもんが生まれるまであと${years}年${month}ヶ月${days}日${hours}時間${minutes}分${seconds}秒です。`;
};

count();

timer = setInterval('count()', 1000);
//
//
const dateSearch = document.getElementById('dateSearch');
const diffTime = document.getElementById('diffTime');
console.log(diffTime.parentNode);

let countTimer;

dateSearch.addEventListener('click', () => {
  countTimer = setInterval('countNow()', 1000);
});

const countNow = () => {
  const nowTime = moment();
  const setDate = document.getElementById('dateSet').value;
  const time = moment(setDate);
  const days = time.diff(nowTime, 'days') % Math.floor(365 / 12);
  const hours = time.diff(nowTime, 'hour') % 24;
  const minutes = time.diff(nowTime, 'minute') % 60;
  const seconds = time.diff(nowTime, 'second') % 60;
  diffTime.textContent = `${setDate}まであと${days}日${hours}時間${minutes}分${seconds}秒です。`;
};
