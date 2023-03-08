const { Pool } = require("pg");

const PORT = 6543;

let pool;
require("dotenv").config();
if (process.env.DATABASE === "SUPABASE") {
  pool = new Pool({
    user: "postgres",
    host: process.env.SUPABASE_HOST,
    port: PORT,
    database: "postgres",
    password: process.env.SUPABASE_PASSWORD,
  });
  console.log(
    `Connect SUPABASE PostgreSQL database ${pool.options.database} on port ${pool.options.port}`
  );
} else {
  pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: PORT,
    database: "wp2_demo_xx",
    password: "0000",
  });

  console.log(
    `Connect localhost PostgreSQL database ${pool.options.database} on port ${pool.options.port}`
  );
}

// pool.query("SELECT * FROM cart_96", [], (error, results) => {
//   console.log(results.rows);
// });

module.exports = pool;
