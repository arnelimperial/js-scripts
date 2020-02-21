/* 1. Add Event Listener
   2. Get input values
   3. Add new item to data structure
   4. Add new item to to UI
   5. Calculate the budget
   6. Update UI
*/

//Implement the Module Pattern and Separation, encapsulation, private and public data
//Keep codes that are related to one another inside separate independent unit
//Setup event listener for keypress event and using event object

//Budget controller

var budgetController = (function(){
  

})();


//UI Controller
var UIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    //Public
    return{
        getinput: function(){
            //returning all user input
            return{
                type: document.querySelector(DOMStrings.inputType).value, //Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value

            };
           
        },
        getDOMStrings: function(){
            return DOMStrings;
        }

    };


})();



// Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    var DOM = UICtrl.getDOMStrings();

    var ctrlAddItem = function(){
        //1. Add Event Listener
        var input = UICtrl.getinput();
        console.log(input);

        // 2. Get input value
        
        // 3. Add new item to data structure
        
        //4. Add new item to to UI
        
        // 5. Calculate the budget
        
        //6. Update UI

     

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    //Key press event
    document.addEventListener('keypress', function(event){
       if(event.keyCode === 13 || event.which === 13){

        ctrlAddItem();
       }
    });

})(budgetController, UIController);