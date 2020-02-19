//IIFE

(function (){
    //Can't access the variable outside the scope; Data privacy
    var score = Math.random() *10;
    console.log(score >= 5);
}) ();

//IIFE with argument
(function (el){
    //Can't access the variable outside the scope; Data privacy
    var score = Math.random() *10;
    console.log(score >= 7 - el);

}) (5);

