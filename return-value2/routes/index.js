var express = require('express');
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', urlencodedParser,function(req, res, next){
  if (req.body.ikas >= 18){
    res.render('result', {result:'Käyttäjä on täysi-ikäinen.', user_input:req.body.ikas});
  }
  else if(req.body.ikas < 18 && req.body.ikas > -1){
    res.render('result', {result:'Käyttäjä ei ole vielä täysi-ikäinen.', user_input:req.body.ikas});
  }
  else{
    res.render('result', {result:'Virheellinen syöte!', user_input:req.body.ikas});

  }
 

});

module.exports = router;


