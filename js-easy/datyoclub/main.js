let cntPerson = 0;

const cntUp = function() {
  cntPerson += 1;
};

const cntDown = function() {
  cntPerson -= 1;
  if(cntPerson < 0) {
    alert('もう誰もいない、、、');
    cntPerson = 0;
  }
}

const reply = function() {
  const str = 'どうぞどうぞ';
  const action = str.repeat(cntPerson);
  alert(action);
  cntPerson = 0;
}

let douzo = 0;

const cntUp2 = function() {
  douzo += 1;
  console.log(douzo);
}

const reply2 = function() {
  const action = Array(1 * douzo + 1).join('どうぞどうぞ');
  alert(action);
  cntPerson = 0;
}
