require("dotenv").config(); // Load environment variables from .env file
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use the DATABASE_URL environment variable
  
});

module.exports = pool;
