
const db = require('./database');

const testDB = async () => {
    try {
      let results1 = await db.query(`select * from product_96`);
      console.log('product_96: ', JSON.stringify(results1.rows));
    } catch (error) {
      console.log(error);
    }
  };

testDB();

module.exports = testDB;
