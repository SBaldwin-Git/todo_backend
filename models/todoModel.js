import { pool } from "../db/db.js";

// Function to get all todos from the database
export async function getTodos(){
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

console.log(await getTodos());

// Function to add a new todo to the database

export async function addTodo(description) {
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
