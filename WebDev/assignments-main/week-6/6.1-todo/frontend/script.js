import axios from 'axios'
const API_URL = 'http://localhost:3001/todos';

function signup(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const response = axios.post("http://localhost:3001/signup",{
        username:username,
        password:password
    });
    alert("You are Successfully Registered")
}



// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // fetch todos
});

// Fetch todos from backend
function fetchTodos() {
    //  write here
}

// Add a new todo to the DOM
function addTodoToDOM(todo) {
    //  write here
}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', () => {
    //  write here
});

// Toggle todo completion
function toggleTodo(id, completed) {
//    write here
}

// Delete a todo
function deleteTodo(id) {
    // write here  
}