// グーかチョキかパーをセレクトボックスで選択し取得する
// 決定ボタン押下で相手の手の乱数をとる
// 乱数の結果によって相手の手を画面に表示
// 自身の選択した手を比較して勝敗を表示する


const cpHand = document.getElementById('cpHand');
cpHand.textContent = `相手の手：`
const log = document.getElementById('log');
log.textContent = `結果：`

const gameStart = document.getElementById('gameStart');

gameStart.addEventListener('click', ()=> {
  const myHand = document.getElementById('myHand').value;
  const handValue = Math.floor(Math.random() * 3);

  if(handValue === 0) {
    cpHand.textContent = `相手の手：グー`;
  } else if(handValue === 1) {
    cpHand.textContent = `相手の手：チョキ`;
  } else {
    cpHand.textContent = `相手の手：パー`;
  }
  
  switch(myHand) {
    case '0': {
      if (handValue === 0) {
        log.textContent = `結果：引き分け`;
      } else if(handValue === 1) {
        log.textContent = `結果：勝ち`;
      } else if(handValue === 2) {
        log.textContent = `結果：負け`;
      }
      break;
    }
    case '1': {
      if (handValue === 0) {
        log.textContent = `結果：負け`;
      } else if(handValue === 1) {
        log.textContent = `結果：引き分け`;
      } else if(handValue === 2) {
        log.textContent = `結果：勝ち`;
      }
      break;
    }
    case '2': {
      if (handValue === 0) {
        log.textContent = `結果：勝ち`;
      } else if(handValue === 1) {
        log.textContent = `結果：負け`;
      } else if(handValue === 2) {
        log.textContent = `結果：引き分け`;
      }
      break;
    }
  }
});
/* --------------------------- */

const setHand = document.getElementById('setHand');
const nowTurn = document.getElementById('player');
const player1Hand = document.getElementById('player1Hand');
const player2Hand = document.getElementById('player2Hand');

let turn = 0;
let player1Num;
let player2Num;

setHand.addEventListener('click', () => {
  if(turn === 0) {
    player1Num = document.getElementById('playerHand').value;
    console.log(player1Num);
    console.log(1);
    player1Hand.textContent = 'player1：セット完了';
    nowTurn.textContent = "player2";
  } else {
    player2Num = document.getElementById('playerHand').value;
    player2Hand.textContent = 'player2：セット完了';
    nowTurn.textContent = '両者セット完了';
  }
  turn += 1;
});

const fight = document.getElementById('fight');
const resultLog = document.getElementById('resultLog');
resultLog.textContent = '結果：';

fight.addEventListener('click', () => {
  // if(turn === 0 || turn === 1) {
  //   alert('各playerの決め手を選択してください。');
  //   return;
  // } else if(turn !== 2) {
  //   alert('2回以上押さないでください。');
  //   return;
  // }
  switch(turn) {
    case 0: {
      alert('player1の決め手を選択してください');
      console.log(turn);
      break;
    }
    case 1: {
      alert('player2の決め手を選択してください');
      break;
    }
    case 2: {
      break;
    }
    default: {
      alert('2回以上押さないでください');
      break;
    }
  }
  // if(turn !== 2) {
  //   alert('2回以上押さないでください');
  //   return;
  // }

  switch(player1Num) {
    case '0': {
      if(player2Num === '0') {
        resultLog.textContent = '結果：引き分け';
      } else if(player2Num === '1') {
        resultLog.textContent = '結果：player1の勝ち';
      } else if(player2Num === '2') {
        resultLog.textContent = '結果：player2の勝ち';
      }
      break;
    }
    case '1': {
      if(player2Num === '0') {
        resultLog.textContent = '結果：player2の勝ち';
      } else if(player2Num === '1') {
        resultLog.textContent = '結果：引き分け';
      } else if(player2Num === '2') {
        resultLog.textContent = '結果：player1の勝ち';
      }
      break;
    }
    case '2': {
      if(player2Num === '0') {
        resultLog.textContent = '結果：player1の勝ち';
      } else if(player2Num === '1') {
        resultLog.textContent = '結果：player2の勝ち';
      } else if(player2Num === '2') {
        resultLog.textContent = '結果：引き分け';
      }
      break;
    }
  }
  turn = 0;
  nowTurn.textContent = 'player1';
  player1Hand.textContent = 'player1';
  player2Hand.textContent = 'player2';
});