const db = require("./database");

const testDB = async () => {
  try {
    db.query("SELECT * FROM cart_96 ORDER BY id ASC", [], (error, results) => {
      // console.log(results.rows);
      console.log(JSON.stringify(results.rows))
    });
    // const results = db.query(`SELECT * FROM cart_96`);
    // console.log("json data", results.rows);
  } catch (error) {
    console.log(error);
  }
};

testDB();

module.exports = testDB;
