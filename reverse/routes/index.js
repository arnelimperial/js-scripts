var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var counter = 10;
  while(counter > 0) {
  counter--;
  if (counter % 2 > 0){
    var a = counter--
    console.log(counter--);
  }
  
}

 
});

module.exports = router;
