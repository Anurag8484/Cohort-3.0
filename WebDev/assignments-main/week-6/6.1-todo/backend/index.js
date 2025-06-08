import express from 'express';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { getAllTodo, createTodo, updateTodo, deleteTodoById, searchTodo, auth, signin,signup } from './routes/todo.js';
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const frontendPath = path.resolve(__dirname, "../frontend");
app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

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