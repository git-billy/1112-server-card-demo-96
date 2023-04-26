const db = require("./database");

const testDB = async () => {
  try {
    let results1 = await db.query(`select * from menu_96`);
    console.log("menu_96: ", JSON.stringify(results1.rows));
    let results2 = await db.query(
      `select * from menu_96 where category='breakfast'`
    );
    console.log("category_96: ", JSON.stringify(results2.rows));
  } catch (error) {
    console.log(error);
  }
};

testDB();

module.exports = testDB;
