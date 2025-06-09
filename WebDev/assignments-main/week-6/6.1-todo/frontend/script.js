const API_URL = 'http://localhost:3001/todos';

async function fetchTodos() {
  const response = await axios.get("http://localhost:3001/todos", {
    headers: {
      token: `${localStorage.getItem("token")}`,
    },
  });
  document.getElementById("task-main").innerHTML = ''
  for (let i = 0; i < response.data.todos.length; i++) {
    document.getElementById("task-main").innerHTML += `<div id="task-list">
      <div id="task-container">
        <div id="task-text">${response.data.todos[i].task}</div>
        <div id="btns">
          <button id="task-dlt" class="task-btns" onclick="deleteTodo(${response.data.todos[i].id})">Delete</button>
        </div>
      </div>
    </div>`;
  }
  //  write here
}

async function signin(){
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;
    const response = await axios.post("http://localhost:3001/signin",{
        username:username,
        password:password
    });
    localStorage.setItem("token",response.data.Token);
    alert("You are Successfully Logged In")
    fetchTodos();
}



// Fetch existing todos when the page loads
// document.addEventListener('DOMContentLoaded', () => {
//   // fetch todos
// });

// Fetch todos from backend


// Add a new todo to the DOM
async function addTodo() {
    //  write here
    const todo = document.getElementById("task").value;
    const response = await axios.post("http://localhost:3001/todos",{
        task: todo
    },{
        headers:{
            token:localStorage.getItem("token")}
    })

    if (response.status != 200){
        alert("Error adding the task, Try Again!")
    }
    // await location.reload()
    fetchTodos();

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
async function deleteTodo(id) {
    // write here  
    try{
        const response = await axios.delete(`http://localhost:3001/todos/${id}`,{
            headers:{
                token: `${localStorage.getItem("token")}`
            }
        }); 
    }catch (error){
        console.log(error)
        return;
    }
    fetchTodos();


}