const setBtn = () => {
  const hoge = Math.random() * 10;
  hoge < 5 ? alert('ぺっぺぺー') : alert('斎藤さんだぞ');
}

const word1 = "斎藤さんだぞぉぉぉ";
const word2 = "ペッペッペー";

const setBtn2 = () => {
  const foo = Math.random() * 10;
  if (foo < 5) {
    const result = confirm(word1);
    if(result) {
      alert(word1);
    } else {
      alert(word2);
    }
  } else {
    const result = confirm(word2);
    if (result) {
      alert(word2);
    } else {
      alert(word1);
    }
  }
}