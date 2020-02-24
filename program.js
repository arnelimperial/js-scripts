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