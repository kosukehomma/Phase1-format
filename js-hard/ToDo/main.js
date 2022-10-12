const addArea = document.getElementById('add-area');
const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', ()=> {
  const lists = document.querySelector('ul');
  const todo = document.createElement('li');
  lists.appendChild(todo);
  todo.textContent = addArea.value;
  if(addArea.value === "") {
    alert('todoが入力されていません。');
    return;
  }
  addArea.value = "";

  const compBtn = document.createElement('button');
  todo.appendChild(compBtn);
  compBtn.textContent = '完了';
  compBtn.classList.add('remove');

  compBtn.addEventListener('click', ()=> {
    todo.parentNode.removeChild(todo);
  })
});
