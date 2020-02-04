var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  class Arithmetic{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
       
    }
    getvars(){
        return(`Luvut ovat ${this.num1} ja ${this.num2}`)
    }
    addition(){
        let add = this.num1 + this.num2;
        return(`Summa on ${add}`)
    }
    difference(){
        let diff = this.num1 - this.num2;

        return(`Erotus on ${diff}`)
    }
    multiply(){
        let product = this.num1 * this.num2;

        return(`Tulo on ${product}`)
    }
    divide(){
        let quotient = this.num1 / this.num2;

        return(`Osamäärä on ${quotient}`)
    }

    remainder(){
        let modulo = this.num1 % this.num2;

        return(`Jakojäännös on ${modulo}`)
    }
   
}
  const math = new Arithmetic(17, 3)
  console.log(math.getvars());
  console.log(math.addition());
  console.log(math.difference());
  console.log(math.multiply());
  console.log(math.divide());
  console.log(math.remainder());

  res.render('index', { variables: math.getvars(), sum: math.addition(), sub: math.difference(), prod: math.multiply(), div: math.divide(), mod: math.remainder()});

});

module.exports = router;
