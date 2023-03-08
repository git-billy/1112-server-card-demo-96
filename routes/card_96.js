var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("card_96/index", { name: "Billy", id: "210410196" });
});

module.exports = router;
