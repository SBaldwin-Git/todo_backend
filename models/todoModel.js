import { pool } from "../db/db.js";

// Function to get all todos from the database
export const getTodos = async () => {
  // Uses the pool from db.js to query the database
  // and return the results
  // Try and catch block to handle errors
  try {
    // Query the database
    const result = await pool.query("SELECT * FROM todos");
    // Return the rows from the query
    return result.rows;
  } catch (err) {
    // Catch block to handle errors
    console.error(err.message);
  }
};

// Function to add a new todo to the database

export const addTodo = async (description) => {
  // Try and catch block to handle errors
  try {
    // Query the database
    const result = await pool.query(
      "INSERT INTO todos (description) VALUES ($1) RETURNING *",
      [description]
    );
    // Return the rows from the query
    return result.rows;
  } catch (err) {
    // Catch block to handle error
    console.error(err.message);
  }
};
