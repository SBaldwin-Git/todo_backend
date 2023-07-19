import * as todosModel from "../models/todoModel.js";

// Function to get all todos from the database
export async function getTodos(req, res) {
  const todos = await todosModel.getTodos();
  res.json({ success: true, payload: todos });
}

// Function to add a new todo to the database
export async function addTodo(req, res) {
  const newTodo = await todosModel.addTodo(req.body.description);
  res.json({ success: true, payload: newTodo });
}