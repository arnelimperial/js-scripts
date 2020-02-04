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

var math = new Arithmetic(17, 3)
console.log(math.getvars());
console.log(math.addition());
console.log(math.difference());
console.log(math.multiply());
console.log(math.divide());
console.log(math.remainder());
