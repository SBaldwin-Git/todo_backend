//Postrgres connection
import pg from 'pg';

// Saves the connection string from the .env file into a const
const connectionString = process.env.DB_CONNECTION_STRING;

// Creates a new pool using the connection string and exports it for use in our application
export const pool = new pg.Pool({ connectionString });