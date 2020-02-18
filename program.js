//Return current date and time
var presentTime = new Date();
// Return the month
var month = presentTime.getMonth() + 1;
//Return date of the month
var day = presentTime.getDate();
//Return the year
var year = presentTime.getFullYear();

//object.create
var personProto = {
    calculateAge: function(){
        console.log(year - this.yearOfBirth);
    }
};

var arnel = Object.create(personProto);
arnel.name = 'Arnel';
arnel.yearOfBirth = 1997;
arnel.job = 'Food Technician';

var uriel = Object.create(personProto, 
    {
        name: { value: 'Uriel'},
        yearOfBirth: { value: 1917},
        job: { value: 'Soldier'}

});

console.log(uriel.job);