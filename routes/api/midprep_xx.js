var express = require('express');
var router = express.Router();

let db = require('../utils/database');

router.get('/overview_xx', function (req, res, next) {
  res.render('midprep_xx/overview_xx', {
    name: 'Hsingtai Chung',
    ID: '123456789',
  });
});

module.exports = router;
