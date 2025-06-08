import express from 'express';
import cors from 'cors';


import { getAllTodo, createTodo, updateTodo, deleteTodoById, searchTodo, auth, signin,signup } from './routes/todo.js';
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/',function(req,res){
  res.sendFile(__dirname + "../../frontend/index.html")
})

app.post('/signin', signin )

app.post('/signup', signup )

app.use(auth)

// Get all todos
app.get('/todos', getAllTodo);

// Add a new todo
app.post('/todos', createTodo);

// Update a todo
app.put('/todos/:id', updateTodo);

// Delete a todo
app.delete('/todos/:id', deleteTodoById);

// Search todos
app.post('/todos/search', searchTodo); // search route

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});