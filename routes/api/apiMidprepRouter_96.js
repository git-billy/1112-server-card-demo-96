var express = require('express');
var router = express.Router();

const db = require('../../utils/database');

router.get('/overview2_96', async function (req, res, next) {
  try {
    const results1 = await db.query(
      `select * from product_96 where cat_id='4'`
    );
    const results2 = await db.query(
      `select * from product_96 where cat_id='1'`
    );
    res.json({ data1: results1.rows, data2: results2.rows });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
