//Return current date and time
var presentTime = new Date();
// Return the month
var month = presentTime.getMonth() + 1;
//Return date of the month
var day = presentTime.getDate();
//Return the year
var year = presentTime.getFullYear();

//Function constructor
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//Prototype property of function constructor
Person.prototype.calculateAge = function(){
    console.log(year - this.yearOfBirth);
}

//Usage in property
Person.prototype.account = 'Members';

//Instantitation

var john = new Person('John', 1990, 'Teacher');

var arnel = new Person('Arnel', 1980, 'Programmer');

var jane = new Person('Mark', 2000, 'Student');


john.calculateAge();
console.log(arnel.name);
arnel.calculateAge();
jane.calculateAge();

console.log(john.account);
console.log(arnel.account);
console.log(jane.account);



