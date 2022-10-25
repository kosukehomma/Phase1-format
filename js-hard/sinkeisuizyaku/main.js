const cards = [];
let backTimer;
let flgFirst = true;
let cardFirst;
let countUnit = 0;

window.onload = () => {
  const arr = [];

  for(let i = 0; i < 4; i++) {
    arr.push(i);
    arr.push(i);
  }

  cardShuffle(arr);

  const cardDeck = document.getElementById('panel');

  for (let i = 0; i < 8; i++) {
    const div = document.createElement('div');
    div.classList.add('card', 'back');
    div.index = i;
    div.number = arr[i];
    div.textContent = '';
    div.onclick = turn;
    cardDeck.appendChild(div);
    cards.push(div);
  }
};

const cardShuffle = (arr) => {
  let n = arr.length;
  let temp, i;

  for (let i = n - 1; 0 < i ; i--) {
    temp = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[temp]] = [arr[temp], arr[i]];
  }
};

const turn = (e) => {

  const div = e.target;

  if(backTimer) return;

  if(div.textContent === '') {
    div.classList.remove('back');
    div.textContent = div.number;
  } else {
    return;
  }

  if(flgFirst) {
    cardFirst = div;
    flgFirst = false;
  } else {
    cardDeck.classList.add('eventNote');
    if(cardFirst.number === div.number) {
      countUnit++;
      backTimer = setTimeout(() => {
        div.classList.add('finish');
        cardFirst.classList.add('finish');
        backTimer = NaN;
      }, 500);
    } else {
      backTimer = setTimeout(() => {
        div.classList.add('back');
        div.textContent = '';
        cardFirst.classList.add('back');
        cardFirst.textContent = '';
        cardFirst = null;
        backTimer = NaN;
      }, 500);
    }

    flgFirst = true;
    if(countUnit === 4) {
      const end = setTimeout(() => {
        alert('終了です。');
        location.reload();
      }, 100);
    }
  }
}

let playerChange;
const nextPlayer = document.getElementById('nextPlayer');
const player1 = document.getElementById('player1Point');
const player2 = document.getElementById('player2Point');

