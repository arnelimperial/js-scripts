var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var arr = [], item = '';
  for (var x = 2; x <= 60; x++) {

    var isPrime = true;
    for (var i = 2; i <= x; i++) {
        if (x % i === 0 && i !== x || x === 0 || x ===1) {
            isPrime = false;
        }
      
    }
    if (isPrime === true) {
      arr.push(x);
      console.log(x);
    }
}
for (var i = 0; i< arr.length;i++){
  item += arr[i] + ',' + ' ';
  console.log(item);

}
 
 res.render('index', { title: 'Prime Numbers(1 - 60)', data: item });
});

module.exports = router;
