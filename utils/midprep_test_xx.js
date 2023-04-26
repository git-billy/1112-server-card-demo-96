const db = require('./database');

const testDB = async () => {
  try {
    let results1 = await db.query(`select * from product_xx where cat_id = 4`);
    console.log('Overview womens: ', JSON.stringify(results1.rows));
    let results2 = await db.query(`select * from product_xx where cat_id = 1`);
    console.log('Overview hats: ', JSON.stringify(results2.rows));
  } catch (error) {
    console.log(error);
  }
};

// testDB();

module.exports = testDB;
