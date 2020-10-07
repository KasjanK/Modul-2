const addTodoForm = document.querySelector("#addTodoForm");
const addTodoInputField = document.querySelector("#addTodoInputField");
const todoList = document.querySelector("#todoList");

// set focus on text input
addTodoInputField.focus();

// add event listener for submitting form
addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(addTodoInputField.value);
});

function addTodo(todoText) {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${todoText}<button onclick="deleteTodo(this)">Delete</button></li>`
  );
  addTodoForm.reset();
}

function deleteTodo(element) {
  element.parentElement.remove();
  addTodoInputField.focus();
}
