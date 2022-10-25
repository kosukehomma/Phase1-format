const cards = [];
let flgFirst = true;
let cardFirst;
let count = 0;

let setTimer;

window.onload = function load() {
  let arr = [];

  for(let i = 1; i < 5; i++) {
    arr.push[i];
    arr.push[i];
  }

  console.log(arr);
  cardShuffle(arr);
  const cardDeck = document.getElementById('panel');

  for(let i = 0; i < 8; i++) {
    const div = document.createElement('div');
    div.classList.add('card', 'back');
    div.index = i;
    div.number = arr[i];
    div.textContent = '';
    // div.onclick = turn;
    cardDeck.appendChild(div);
    cards.push(div);
  }
};

const cardShuffle = arr => {
  for(let i = arr.length - 1; 0 < i; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

let div;

const turn = e => {
  div = e.target;

  if(div.textContent === ''){
    div.classList.remove('back');
    div.textContent = div.number;
  } else {
    return;
  }

  if(flgFirst) {
    cardFirst = div;
    flgFirst = false;
  } else {
    cardDeck.classList.add('eventNone');
    if(cardFirst.number === div.number) {
      count++;
      //check(playerTurn);
      setTimer = setInterval('cardClear(div)', 500);
      if(count === 4) {
        setTimeout(() => {
          alert('終了です');
          document.location.reload();
        }, 500);
      }
    } else {
      //check(playerTurn);
      setTimer = setInterval('cardBack(div)', 500);
    }
    flgFirst = true;
  }
};

const cardBack = div => {
  div.classList.add('card', 'back');
  div.textContent = '';
  cardFirst.classList.add('card', 'back');
  cardFirst.textContent = '';
  cardFirst = null;
  backTimer = NaN;
  cardDeck.classList.remove('eventNone');
  clearInterval(setTimer);
};

const cardClear = div => {
  div.classList.add('card', 'finish');
  cardFirst.classList.add('card', 'finish');
  cardDeck.classList.remove('eventNone');
  clearInterval(setTimer);
}


let playerTurn = 1;

let nextPlayer = document.getElementById('nextPlayer');
nextPlayer.textContent = '次はPlayer1の番です。';

let player1Point = document.getElementById('player1Point');
let player2Point = document.getElementById('player2Point');

let player1PointNum = 0;
let player2PointNum = 0;

player1Point.textContent = `player1:${player1PointNum}`;
player2Point.textContent = `player2:${player2PointNum}`;

const check = () => {
  if(cardFirst.number === div.number) {
    if(playerTurn === 1) {
      player1PointNum += 1;
      player1Point.textContent = `player1:${player1PointNum}`;
    } else {
      player2PointNum += 1;
      player2Point.textContent = `player1:${player2PointNum}`;
    }
  } else {
    if(playerTurn === 1) {
      nextPlayer.textContent = '次はplayer2の番です';
    } else {
      nextPlayer.textContent = '次はplayer1の番です';
    }
    playerTurn = playerTurn * -1;
  }
};
