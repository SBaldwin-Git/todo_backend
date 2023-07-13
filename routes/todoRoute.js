import express from "express";

import * as todoController from "../controllers/todoController";
export const todoRouter = express.Router();

// GET route for getting all todos
todoRouter.get("/", todoController.getTodos);
todoRouter.post("/", todoController.addTodo);