var express = require("express");
var router = express.Router();

const db = require("../utils/database");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const results = await db.query("SELECT * FROM card_96", []);
    res.render("card2_96/index", {
      data: results.rows,
      name: "Billy",
      id: "210410196",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
