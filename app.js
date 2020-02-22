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
    //Create Function constructor for Income and Expenses
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var data = {
        allItems:{
            inc: [],
            exp: []
        },
        totals:{
            inc: 0,
            exp:0
        }


    }

    //Public
    return{
        addItem: function(type, des, val){
            var newItem, ID;
            //Create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            }else{
                ID = 0;
            }
          
            //Create new item based on 'inc' or 'exp' type
            if(type === 'inc'){
                newItem = new Income(ID, des, val);
            }else if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }

            //Push to the data structure
            data.allItems[type].push(newItem);

            //Return the new element
            return newItem;

        },

        testing: function(){
            console.log(data);
        }
    };
  

})();


//UI Controller
var UIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',

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
        addListItem: function(obj, type){
            var html, newHtml, element;
            //Create HTML string with placeholder text

            if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if(type === 'exp'){
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //Replace placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);


            //Insert HTML to the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },
        getDOMStrings: function(){
            return DOMStrings;
        }

    };


})();



// Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    //Initialization
    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        //Key press event
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });

    }

    var ctrlAddItem = function(){
        var input, newItem;

        //1. Add Event Listener
        input = UICtrl.getinput();

        // 2. Get input value
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add new item to data structure
        
        //4. Add new item to to UI
        UICtrl.addListItem(newItem, input.type);
        
        // 5. Calculate the budget
        
        //6. Update UI

    };

    return{
        init: function(){
            console.log('Application has initialized');
            setupEventListeners();
        }
    };

    

})(budgetController, UIController);


//Call init function from Global app controller
controller.init();