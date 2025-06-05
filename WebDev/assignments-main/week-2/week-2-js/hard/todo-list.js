/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.todos = [];
  }
}
// class Todo {
//   constructor(){
//     this.todo = []
//   }
//   add(todo){
//     this.todo.push(todo)
//     return this;
//   }
//   remove(index){
//     if (index < 0 && index >= this.todo.length) {
//       throw new Error("Invalid Index");
//     }
//     this.todo.splice(index,1)
//     return this;
//   }
//   update(index,updatedTodo){
//     if (index < 0 && index >= this.todo.length) {
//       throw new Error("Invalid Index");
//     }
//     this.todo[index] = updatedTodo
//     return this;
//   }
//   getAll(){
//     return this.todo;
//   }
//   get(index){
//     if (index < 0 && index >= this.todo.length) {
//       throw new Error("Invalid Index");
//     }
//     return this.todo[index]
//   }
//   clear(){
//     this.todo = []
//     return this;
//   }
// }

module.exports = Todo;
