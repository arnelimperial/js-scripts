/*Rest operator is use in function declaration to 
accept arbitrary numbers of parameters 
while Spread operator is use in function call
*/

function isFullAge(...years){
    years.forEach(cur => console.log((2020 - cur) >= 18));
}

isFullAge(2006, 2001, 1980, 1917);

//With additional parameter === 17 is the limit
function isFullAge1(limit, ...years){
    years.forEach(cur => console.log((2020 - cur) >= limit));
}

isFullAge1(18, 2009, 2000, 1980, 2019);

//########################################################################//

//Default Parameter

//Function constructor
function Person(fname='Lucia', lname='Salinas', birthYear=2018, nationality='American'){
    this.fname = fname;
    this.lname = lname;
    this.birthYear = birthYear;
    this.nationality = nationality;

}

var jaycob = new Person('Jaycob', 'Imperial', 2010, 'Filipino');

console.log(jaycob);