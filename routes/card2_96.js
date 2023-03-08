var express = require("express");
var router = express.Router();

const db = require("../utils/database");

/* GET home page. */
router.get("/", async function (req, res, next) {
  let RESULTS;

  try {
    RESULTS = await db.query("SELECT * FROM card_96", []);
  } catch (error) {
    console.log(error);
  }

  res.render("card2_96/index", {
    data: RESULTS.rows,
    name: "Billy",
    id: "210410196",
  });
});

module.exports = router;
