
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

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Astrid');

var designerQuestion = interviewQuestion('designer');
designerQuestion('James');

interviewQuestion('doctor')('Mark');
interviewQuestion('designer')('April');

var otherQuestion = interviewQuestion('Technician');
otherQuestion('Jeff');

