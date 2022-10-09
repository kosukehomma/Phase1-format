// for(let i = 1; i <21 ; i++) {
//   const fizz = i % 3;
//   const buzz = i % 5;
//   if(fizz === 0 && buzz === 0) {
//     console.log('fizzbuzz');
//   } else if(fizz === 0) {
//     console.log('fizz');
//   } else if(buzz === 0) {
//     console.log('buzz');
//   } else {
//     console.log(i);
//   }
// }

let v = 0;
const rewriteNum = document.getElementById('rewriteNum');
rewriteNum.innerHTML =v;

const rewriteCntUp = () => {
  v += 1;
  if(v % 3 ===0 && v % 5 === 0) {
    rewriteNum.innerHTML = 'fizzbuzz!!';
  } else if(v % 3 === 0) {
    rewriteNum.innerHTML = 'fizz!';
  } else if(v % 5 === 0) {
    rewriteNum.innerHTML = 'buzz!';
  } else {
    rewriteNum.innerHTML = v;
  }
}

let num = 0;
const showNum = document.getElementById('showNum');
showNum.innerHTML = num;

const fizzBtn = () => {
  num += 1;
  if(num % 3 === 0) {
    showNum.innerHTML = 'fizz';
  } else {
    alert('ぶっぶーですわ。');
    location.reload();
  }
}

const buzzBtn = () => {
  num += 1;
  if (num % 5 === 0) {
    showNum.innerHTML = 'buzz';
  } else {
    alert('ぶっぶーですわ。');
    location.reload();
  }
}

const fizzbuzzBtn = () => {
  num += 1;
  if ((num % 3 === 0) & (num % 5 === 0)) {
    showNum.innerHTML = 'fizzbuzz!!';
  } else {
    alert('ブッブーですわ。');
    location.reload();
  }
}

const numBtn = () => {
  num += 1;
  showNum.innerHTML = num;
  if(num % 3 === 0 || num % 5 === 0) {
    alert('ぶっぶーですわ');
    location.reload();
  }
  showNum.innerHTML = num;
}