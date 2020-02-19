//Closure

//Return current date and time
var presentTime = new Date();
// Return the month
var month = presentTime.getMonth() + 1;
//Return date of the month
var day = presentTime.getDate();
//Return the year
var year = presentTime.getFullYear();

function retirement(retirementAge){
    var a = ' year left until retirement.';

    return function(yearOfBirth){
        var age = year - yearOfBirth;
        console.log(retirementAge - age + a);
    }
    
}

var retirementCanada = retirement(60); 
var retirementFinland = retirement(65); 
var retirementSouthKorea = retirement(73); 
//retirement(65)(1980);

retirementCanada(1991);
retirementFinland(1991);
retirementSouthKorea(1991);


/*#################################################################*/


function interviewQuestion(job){
    if(job === 'designer'){
        //retun Anon function
        return function(name){
            console.log(name + ', can you please explain what UX design is.');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello! ' + name + ', what is your job?');
        }
    }
}

interviewQuestion('teacher')('Jude');
interviewQuestion('designer')('Felix');
interviewQuestion('Custodian')('Troy');
