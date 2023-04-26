var express = require('express');
var router = express.Router();

const db = require('../../utils/database');

router.get('/menu_96', async function (req, res, next) {
  try {
    const results = await db.query(`select * from menu_96`);
    // const results = await db.query(`select * from menu_96`);
    res.json(results.rows);
  } catch (error) {
    console.log(error);
  }
});

router.get('/menu_96/:category', async function (req, res, next) {
  try {
    let results = await db.query(`select * from menu_96 where category = $1`, [
      req.params.category,
    ]);
    console.log('cat_id data', JSON.stringify(results.rows));
    res.json(results.rows);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
