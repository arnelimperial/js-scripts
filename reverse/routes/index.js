var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let counter = 10;
  let list = [];
  while(counter > 0) {
  counter--;
  if (counter % 2 > 0){
    //console.log(counter--);
    list += (counter--);
   
    
  }
  
}

let i;
let item = '';
for (i = 0; i< list.length;i++){
  item += list[i] + ' ';
  console.log(item);

}
res.render('index', {title: 'While loop', item:item});

 
});

module.exports = router;
