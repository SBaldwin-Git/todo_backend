import * as todosModel from "../models/todoModel.js";

// Function to get all todos from the database
export const getTodos = async (req, res) => {
    // Try and catch block to handle errors
    try {
        // Call the getTodos function from todoModel.js
        const todos = await todosModel.getTodos();
        // Send the todos as a response
        res.json({ success: true, payload: todos });
    } catch (err) {
        // Catch block to handle errors
        console.error(err.message);
    }
}
    