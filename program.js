//Classes are not hoisted and can be added methods to classes but not properties
class Person{
    constructor(name, birthYear, job){
        this.name = name;
        this.birthYear = birthYear;
        this.job = job;
    }
    calcAge(){
        let date = new Date();
        let year = date.getFullYear();
        let age = year - this.birthYear;
        return age;
    }

    //static method - cannot be inherited by class instances
    static greeting(){
        return 'Hello World!'
    }
}

const jaycob = new Person('Jaycob', '2010', 'Programmer');

console.log(jaycob);
console.log(jaycob.calcAge());

//Usage of static method
console.log(Person.greeting());

/*############################################################*/
//Class with subclass in ES^

class Person6{
    constructor(name, birthYear, job){
        this.name = name;
        this.birthYear = birthYear;
        this.job = job;
    }
    calcAge6(){
        let date = new Date();
        let year = date.getFullYear();
        let age = year - this.birthYear;
        return age;
    }

    
}


//subclass
class Athlete extends Person6{
    constructor(name, birthYear, job, olympicGames, medals){
        //call the super class(Person) of the same parameter
        super(name, birthYear, job);
        this.olympicGames = olympicGames;
        this.medals = medals;

    }

    wonMedal(){
        this.medals++;
        return this.medals;
    }
}

const gamer = new Athlete('Jaycob', '2010', 'Soccer Player', 10, 50);

console.log(gamer.wonMedal());
console.log(gamer.calcAge6());


