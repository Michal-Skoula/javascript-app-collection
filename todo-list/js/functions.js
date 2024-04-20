/**
 * Updates local storage 
 */
function updateLocalStorage() {
  window.localStorage.setItem('todos', JSON.stringify(todosArray));
}
/**
 * 
 * Is called when the new todo form is submitted
 * @returns key value array with all information about the todo
 * 
 */
function createNewTask() {
  const task = document.getElementById('task').value;
  const desc = document.getElementById('desc').value;
  const date = document.getElementById('date').value;
  const tag = document.getElementById('tag').value;

  return newTodoItem = {
    'title': task,
    'description': desc,
    'done': false,
    'tags': tag,
    'date': date || '3200-01-01' // means no date set
  }
}
/**
 * 
 * Takes the todosArray and creates HTML based on what is stored in it
 * 
 * @returns HTML code for how it should be displayed
 * 
 */
function displayTodos() {
  
  let display = [];
  let index = 0;


  todosArray.forEach(function(todo) {
    display += `<div class="todo-item" todoid="${index}"><div class="todo-info">`
    display += `<h2>${todo['title']}</h2>`
    if(todo.description) {
      display += `<p>${todo['description']}</p>`;
    }
    if(todo.tags) {
      display += `<small>${todo['tags']}</small>`;
    }
    if(todo.date != '3200-01-01') {
      display += `<p>${todo['date']}</p>`;
    }
    display += `</div><div class="todo-checkbox">`;
    if(!todo.done) {
      display += `<input todoid="${index}" type=checkbox class=confirm></input>`
    } else {
      display += `<input todoid="${index}" type=checkbox checked class=confirm></input>`
    }
    display += `</div></div>`

    index++;
  });
  document.getElementById('todos').innerHTML = display;
}

/**
 * 
 * Sets up an event listener for each isDone checkbox and toggles states on press, also updates and sorts the array accordingly
 * @returns 
 */
function setupCheckBtns() {
  const checkBtn = document.querySelectorAll('.confirm');

  checkBtn.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {

      const id = e.target.getAttribute('todoid'); 
      todosArray[id].done = !todosArray[id].done; // flips the state of bool done
      
      sortByDate();
      sortByDone();
      displayTodos();
      updateLocalStorage();
      setupCheckBtns(); // Updates event listeners
    });
  });
}
// How the e.target thing works
// https://chat.openai.com/c/d0e22666-7315-4476-9a06-0800bc1e3187
// https://chat.openai.com/share/14104b7e-2223-4d02-871c-936b2b2edcbc
