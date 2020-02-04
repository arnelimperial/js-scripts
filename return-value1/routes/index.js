var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let list = [10, 20, 30];
  let constant = 1990;

  let highest_num = Math.max(...list);

  let sum = highest_num + constant

  res.render('index', { highest:sum, arr:list, highest_num:highest_num, constant:constant});
});

module.exports = router;
