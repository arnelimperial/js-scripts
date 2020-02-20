
// Bind, Call & Apply

var jaycob = {
    name: 'Jaycob',
    age: 10,
    job: 'student',
    presentation: function(style, timeOfDay){
        if(style === 'casual'){
            console.log('Good ' + timeOfDay + '. I\'m ' + this.name + '. I\'m a ' + this.job + ' and I\'m '+ this.age + ' years old.');
        }else if(style === 'adventurous'){
            console.log('Hey, what\'s up ' + 'I\'m ' + this.name + '. I\'m ' + this.job + ' and I\'m '+ this.age + ' years old.' + ' Have a nice ' + timeOfDay + '.');
    }

    }
};

var arnel = {
    name: 'Arnel',
    age: 40,
    job: 'programmer'

};

jaycob.presentation('adventurous', 'morning');

//Call (All this object of jaycob will be replace with arnel object)
//Method Borrowing
jaycob.presentation.call(arnel, 'adventurous', 'morning');

//Apply
jaycob.presentation.apply(arnel, ['casual', 'evening']);


//Bind (Return a function. Advisable to store in a variable)
//pass the first argument in the variable
var jaycobAdventurous = jaycob.presentation.bind(jaycob, 'adventurous');
jaycobAdventurous('afternoon');
jaycobAdventurous('morning');

var arnelAdventurous = jaycob.presentation.bind(arnel, 'adventurous');
arnelAdventurous('afternoon');

/*######################################################################*/

//Example of Bind

//Return current date and time
var presentTime = new Date();
// Return the month
var month = presentTime.getMonth() + 1;
//Return date of the month
var day = presentTime.getDate();
//Return the year
var currentYear = presentTime.getFullYear();


var years = [1917, 1980, 2001, 1964, 2011, 1942, 1935, 1976, 2013];

function arrCalc(arr, func){
    var arrResult = [];

    for(var i=0; i < arr.length;++i){
        arrResult.push(func(arr[i]));
    }
    return arrResult;

}

//Callback Function (1)
function calculateAge(el){
    return currentYear - el;
}
//Passing function to another function as argument
var ages = arrCalc(years, calculateAge);

console.log(ages);

//Callback function (2)
function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrCalc(years, calculateAge);

fullJapan = arrCalc(ages, isFullAge.bind(this, 20));

console.log(fullJapan);
