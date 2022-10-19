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

const numArr = [];

const colRandomNum = () => {
  let arrB = [];
  let arrI = [];
  let arrN = [];
  let arrG = [];
  let arrO = [];
  for(let i = 0; i < 15; i++) {
    arrB[i] = i + 1;
    arrI[i] = (i + 15) + 1;
    arrN[i] = (i + 30) + 1;
    arrG[i] = (i + 45) + 1;
    arrO[i] = (i + 60) + 1;
  }

  for(let b = 0, lenB = arrB.length; b < 5; b++, lenB--) {
    let rndNum = Math.floor(Math.random() * lenB);
    numArr.push(arrB[rndNum]);
    arrB[rndNum] = arrB[lenB -1];
  }
  for(let i = 0, lenI = arrI.length; i < 5; i++, lenI--) {
    let rndNum = Math.floor(Math.random() * lenI);
    numArr.push(arrI[rndNum]);
    arrI[rndNum] = arrI[lenI - 1];
  }
  for(let n = 0, lenN = arrN.length; n < 4; n++, lenN--) {
    let rndNum = Math.floor(Math.random() * lenN);
    numArr.push(arrN[rndNum]);
    arrN[rndNum] = arrN[lenN - 1];
  }
  for(let g = 0, lenG = arrG.length; g < 5; g++, lenG--) {
    let rndNum = Math.floor(Math.random() * lenG);
    numArr.push(arrG[rndNum]);
    arrG[rndNum] = arrG[lenG - 1];
  }
  for(let o = 0, lenO = arrO.length; o < 5; o++, lenO--) {
    let rndNum = Math.floor(Math.random() * lenO);
    numArr.push(arrO[rndNum]);
    arrO[rndNum] = arrO[lenO - 1];
  }

  bCol1.textContent = numArr[0];
  bCol2.textContent = numArr[1];
  bCol3.textContent = numArr[2];
  bCol4.textContent = numArr[3];
  bCol5.textContent = numArr[4];
  
  iCol1.textContent = numArr[5];
  iCol2.textContent = numArr[6];
  iCol3.textContent = numArr[7];
  iCol4.textContent = numArr[8];
  iCol5.textContent = numArr[9];
  
  nCol1.textContent = numArr[10];
  nCol2.textContent = numArr[11];
  nCol3.textContent = 'FREE';
  nCol3.classList.add('hitNum')
  nCol4.textContent = numArr[12];
  nCol5.textContent = numArr[13];

  gCol1.textContent = numArr[14];
  gCol2.textContent = numArr[15];
  gCol3.textContent = numArr[16];
  gCol4.textContent = numArr[17];
  gCol5.textContent = numArr[18];
  
  oCol1.textContent = numArr[19];
  oCol2.textContent = numArr[20];
  oCol3.textContent = numArr[21];
  oCol4.textContent = numArr[22];
  oCol5.textContent = numArr[23];
};

colRandomNum();
console.log(numArr);

const setBtn = document.getElementById('hitNum');
setBtn.addEventListener('click', () => {
  const callNum = Math.floor(Math.random() * 75 + 1);

  const bingoNum = numArr.indexOf(callNum);
  console.log('alertの番号があるか',bingoNum);
  console.log('取り出した数値',numArr[bingoNum]);
  
  alert(`次の番号は${callNum}番です。`);

  console.log(callNum === numArr[bingoNum]);
  if(callNum === numArr[bingoNum]) {
    colArea[bingoNum].classList.add('hitNum');
    // numArr.splice(bingoNum, 1);
    // delete numArr[bingoNum];
    // console.log(numArr);
  } else {
    return;
  }
});
