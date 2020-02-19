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
function isFullAge(el){
    return el >= 18;
}

var fullAges = arrCalc(ages, isFullAge);

console.log(fullAges);

//Callback function (3)
function targetHeartRate(el){
    var thr = Math.round((220 - el) * (67.5/100));
    return thr;
}

//Determine Target Heart Rate (Target Heart Rate Zone 67.5%)
var tHRate = arrCalc(ages, targetHeartRate);
console.log(tHRate);