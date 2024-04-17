let storage = {
  // todoItemArray
  // tagsList
}
let todosArray = [];

if(window.localStorage.getItem('todos')) {
  todosArray = JSON.parse(window.localStorage.getItem('todos'));
} 
displayTodos(todosArray);


const submitBtn = document.getElementById('submit'); 
submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevents the page from refreshing (submits to itself)
  todoItem = createNewTask();
  todosArray.push(todoItem);
  displayTodos(todosArray);
  setLocalStorage();
});

function setLocalStorage() {
  window.localStorage.setItem('todos', JSON.stringify(todosArray));
}
function createNewTask() {
  const task = document.getElementById('task').value;
  const desc = document.getElementById('desc').value;
  const date = document.getElementById('date').value;
  const tag = document.getElementById('tag').value;

  return todoItem = {
    'title': task,
    'description': desc,
    'done': false,
    'tags': tag,
    'date': date || -1 // -1 means no date set
  }

}
function displayTodos(todoList) {
  let display = [];
  todosArray.forEach(function(todo) {
    display += `
    <div class="todo-item">
      <h2>${todo['title']}</h2>
      <p>${todo['description']}</p>
      <small>${todo['tags']}</small>
      <p>${todo['date']}</p>
    </div>`
  });
  document.getElementById('todos').innerHTML = display;
}