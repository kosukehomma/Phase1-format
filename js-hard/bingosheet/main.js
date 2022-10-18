const bingoSheet = document.getElementById('bingoSheet');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const trHead = document.createElement('tr');

bingoSheet.appendChild(thead);
bingoSheet.appendChild(tbody);
thead.setAttribute('id', 'bingoHead');
tbody.setAttribute('id', 'bingoBody');
thead.append(trHead);

const trGroup = document.createDocumentFragment();
const thGroup = document.createDocumentFragment();
const tdGroup = document.createDocumentFragment();

for (let i = 0; i < 5; i++) {
  const trBody = document.createElement('tr');
  const th = document.createElement('th');
  th.setAttribute('class', 'bingoTitle');
  trGroup.appendChild(trBody);
  thGroup.appendChild(th);

  for (let j = 0; j < 5; j++) {
    const td = document.createElement('td');
    td.setAttribute('class', 'bingoNum');
    tdGroup.appendChild(td);
  };
  trBody.appendChild(tdGroup);
};

trHead.appendChild(thGroup);
tbody.appendChild(trGroup);

const bingoTitle = document.getElementsByClassName('bingoTitle');
const [B, I, N, G, O] = bingoTitle;
B.textContent = 'B';
I.textContent = 'I';
N.textContent = 'N';
G.textContent = 'G';
O.textContent = 'O';

const colArea = document.getElementsByClassName('bingoNum');
const [
  bCol1, iCol1, nCol1, gCol1, oCol1,
  bCol2, iCol2, nCol2, gCol2, oCol2,
  bCol3, iCol3, nCol3, gCol3, oCol3,
  bCol4, iCol4, nCol4, gCol4, oCol4,
  bCol5, iCol5, nCol5, gCol5, oCol5,
] = colArea;

const bColRandomNum = () => {
  let arr = [];
  numArr = [];
  for(let i = 0; i < 15; i++) {
    arr[i] = i + 1;
  }
  for(let j = 0, len = arr.length; j < 5; j++, len--) {
    let rndNum = Math.floor(Math.random() * len);
    numArr.push(arr[rndNum]);
    arr[rndNum] = arr[len -1];
  }
  bCol1.textContent = numArr[0];
  bCol2.textContent = numArr[1];
  bCol3.textContent = numArr[2];
  bCol4.textContent = numArr[3];
  bCol5.textContent = numArr[4];
};

const iColRandomNum = () => {
  let arr = [];
  numArr = [];
  for(let i = 15; i < 30; i++) {
    arr[i] = i + 1;
  }
  console.log(arr);
  for(let j = 0, len = arr.length; j < 5; j++, len--) {
    let rndNum = Math.floor(Math.random() * (30 - 15) + 15);
    numArr.push(arr[rndNum]);
    arr[rndNum] = arr[len - 1];
  }
  console.log(numArr);
  iCol1.textContent = numArr[0];
  iCol2.textContent = numArr[1];
  iCol3.textContent = numArr[2];
  iCol4.textContent = numArr[3];
  iCol5.textContent = numArr[4];
};

const nColRandomNum = () => {
  let arr = [];
  numArr = [];
  for(let i = 30; i < 45; i++) {
    arr[i] = i + 1;
  }
  console.log(arr);
  for(let j = 0, len = arr.length; j < 4; j++, len--) {
    let rndNum = Math.floor(Math.random() * (45 - 30) + 30);
    numArr.push(arr[rndNum]);
    arr[rndNum] = arr[len - 1];
  }
  console.log(numArr);
  nCol1.textContent = numArr[0];
  nCol2.textContent = numArr[1];
  nCol3.textContent = 'FREE';
  nCol4.textContent = numArr[2];
  nCol5.textContent = numArr[3];
};

const gColRandomNum = () => {
  let arr = [];
  numArr = [];
  for(let i = 45; i < 60; i++) {
    arr[i] = i + 1;
  }
  console.log(arr);
  for(let j = 0, len = arr.length; j < 5; j++, len--) {
    let rndNum = Math.floor(Math.random() * (60 - 45) + 45);
    numArr.push(arr[rndNum]);
    arr[rndNum] = arr[len - 1];
  }
  console.log(numArr);
  gCol1.textContent = numArr[0];
  gCol2.textContent = numArr[1];
  gCol3.textContent = numArr[2];
  gCol4.textContent = numArr[3];
  gCol5.textContent = numArr[4];
};

const oColRandomNum = () => {
  let arr = [];
  numArr = [];
  for(let i = 60; i < 75; i++) {
    arr[i] = i + 1;
  }
  console.log(arr);
  for(let j = 0, len = arr.length; j < 5; j++, len--) {
    let rndNum = Math.floor(Math.random() * (75 - 60) + 60);
    numArr.push(arr[rndNum]);
    arr[rndNum] = arr[len - 1];
  }
  console.log(numArr);
  oCol1.textContent = numArr[0];
  oCol2.textContent = numArr[1];
  oCol3.textContent = numArr[2];
  oCol4.textContent = numArr[3];
  oCol5.textContent = numArr[4];
};

bColRandomNum();
iColRandomNum();
nColRandomNum();
gColRandomNum();
oColRandomNum();

const setBtn = document.getElementById('hitNum');
setBtn.addEventListener('click', () => {
  bColRandomNum();
  iColRandomNum();
  nColRandomNum();
  gColRandomNum();
  oColRandomNum();
});
