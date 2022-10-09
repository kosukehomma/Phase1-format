// アラート表示
//window.alert('これはwindow.alert()で表示したアラートです');

// window. に限り、省略することができる。
//alert('これはalert()で表示したアラートです');

// documentのプロパティにアクセスする例
console.log(document.doctype);  //=> <!doctype html>
console.log(document.title);  //=> DOM API


// <p id="intro">...</p>要素を取得
const intro = document.getElementById('intro');
console.log(intro.textContent); //=> これは紹介文です。

// <ul class="list">...</ul>要素を取得
const list = document.querySelector('.list');
console.log(list.children.length);  //=> 3

// <ul class="list">...</ul>の中にある<li>要素を取得
const items = document.querySelectorAll('.list li');
// itemsは配列(のようなもの)なので、forEachで繰り返しができる
items.forEach((item) => {
  console.log(item.textContent);  //=> アイテム1、アイテム2、アイテム3 が順番に表示されす。
});

const elem = document.querySelector('.list');

console.log(elem.textContent); //=> アイテム1 アイテム2 アイテム3
console.log(elem.innerHTML);
for(let i = 0; i < elem.children.length; i++) {
  console.log(elem.children[i]);
}
console.log(elem.firstElementChild);
console.log(elem.lastElementChild);
console.log(elem.parentElement);

const elem2 = document.querySelector('img');

console.log(elem2.getAttribute('src'));
elem2.setAttribute('src', 'https://placehold.it/400x200')

const newItem = document.createElement('li');
newItem.textContent = '新しいアイテム';

list.appendChild(newItem);
list.removeChild(list.firstElementChild);

const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');

addButton.addEventListener('click', (event) => {
  // <button id="add">がクリックされたとき..
  const newItem = document.createElement('li');
  newItem.textContent = '新しいアイテム';
  list.appendChild(newItem);
})

removeButton.addEventListener('click', (event) => {
  // <button id="remove">がクリックされたとき
  list.removeChild(list.lastElementChild);
})