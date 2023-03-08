var express = require("express");
var router = express.Router();

const db = require("../../utils/database");

/* GET home page. */
router.get("/", async function (req, res, next) {
  let RESULTS;

  try {
    RESULTS = await db.query("SELECT * FROM card_96", []);
  } catch (error) {
    console.log(error);
  }

  res.json(RESULTS.rows);
});

module.exports = router;
