let storage = {
  // todoItemArray
  // tagsList
}
let todosArray = [];
const submitBtn = document.getElementById('submit'); 



if(window.localStorage.getItem('todos')) {
  todosArray = JSON.parse(window.localStorage.getItem('todos'));
} 
displayTodos(todosArray);


submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevents the page from refreshing (submits to itself)

  newTodoItem = createNewTask();
  todosArray.push(newTodoItem);
  setupCheckBtns();
  sortByDate();
  sortByDone();
  displayTodos();
  updateLocalStorage();
});

setupCheckBtns();



    


