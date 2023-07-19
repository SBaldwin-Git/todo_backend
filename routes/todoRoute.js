import express from "express";

import * as todoController from "../controllers/todoController.js";
export const router = express.Router();

// GET route for getting all todos
router.get("/", todoController.getTodos);
router.post("/", todoController.addTodo);