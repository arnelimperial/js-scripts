var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  class Text{
    constructor(text){
        this.text = text;
    }

    retrieveText(){
        return (`Hello ${this.text}!`)
    }

}
const msg = new Text('World');

res.render('index', { title: msg.retrieveText() });
});

module.exports = router;
