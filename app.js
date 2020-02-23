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
        //When something is not defined use -1
        this.percentage = -1;
    };

    //Prototype method of Expenses constructor
    Expense.prototype.calcPercentage = function(totalIncome){
        
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) *100);
        }else{
            this.percentage = -1
        }

    };

    //Return the percentage
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type){
        var sum = 0;

        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        });

        data.totals[type] = sum;

    };

    //Data Structure
    var data = {
        allItems:{
            inc: [],
            exp: []
        },
        totals:{
            inc: 0,
            exp:0
        },
        budget: 0,
        percentage: -1


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

        calculateBudget: function(){
            // Calculate total income and expenses
            calculateTotal('inc');
            calculateTotal('exp');

            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;


            //Calculate the % income from expenses
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);

            }else{
                data.percentage = -1;
            }
         
        },

        calculatePercentages: function(){
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            });

        },

        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();

            });
            return allPerc;

        }, 

        getBudget: function(){
            return{
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage

            };

        },

        deleteBudget: function(type, id){
            var ids, index;
            
            ids = data.allItems[type].map(function(current){
                return current.id;
            });
            
            index = ids.indexOf(id);
            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }
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
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',

    };

    //Public
    return{
        getinput: function(){
            //returning all user input
            return{
                type: document.querySelector(DOMStrings.inputType).value, //Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)

            };
           
        },
        addListItem: function(obj, type){
            var html, newHtml, element;
            //Create HTML string with placeholder text

            if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if(type === 'exp'){
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //Replace placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);


            //Insert HTML to the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },
        //Clear input field in the UI
        clearField: function(){
            var fields, fieldsArr;

            //querySelectorAll converts this into list not an array so need to use Array method slice later
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

            //Built-in Array prototype method + slice + call(list) to convert into array
            
            fieldsArr = Array.prototype.slice.call(fields);
            //Loop over using foreach
            fieldsArr.forEach(function(current, index, array){
                current.value = "";

            });

            fieldsArr[0].focus();
        },

        displayBudget: function(obj){
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;
           
            
            if(obj.percentage > 0 ){
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }

        },
        deleteListItem: function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },

        displayPercentages: function(percentages){
            var fields;
            //Return node list
            fields = document.querySelectorAll(DOMStrings.expensesPercLabel);

            var nodeListForEach = function(nodeList, callback){
                for(var i = 0; i < nodeList.length; ++i){
                    callback(nodeList[i], i);
                }

            };

            nodeListForEach(fields, function(current, index){
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';

                }else{
                    current.textContent = '---';  
                }
             

            });

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

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    };



    var updateBudget = function(){
         
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        
        // 3. Display the Budget to the UI
        UICtrl.displayBudget(budget);


    };

    var updatePercentages = function(){
        
        // 1. Calculate the percentages
        budgetCtrl.calculatePercentages();

        // 2. Read percentages from budget controller
        var percentages = budgetCtrl.getPercentages();

        // 3. Update UI with new percentages
       UICtrl.displayPercentages(percentages);

    };

    var ctrlAddItem = function(){
        var input, newItem;
    
        //1. Add Event Listener
        input = UICtrl.getinput();

        
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            // 2. Get input value
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      
        
            //3. Add new item to to UI
            UICtrl.addListItem(newItem, input.type);
    
            //4. Clear the fields
            UICtrl.clearField();
    
            // 5. Calculate and update budget
            updateBudget();

            // 6. Calculate and update the percentages
            updatePercentages();

        }
       
       
    };

    var ctrlDeleteItem = function(event){
        var itemID, splitID, ID, type;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. Delete the item from the data structure
            budgetCtrl.deleteBudget(type, ID);

            // 2. Delete the item from the UI
            UICtrl.deleteListItem(itemID);

            // 3. Update and show new budget
            updateBudget();
        }

    };

    return{
        init: function(){
            console.log('Application has initialized');
            setupEventListeners();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1

            });
        }
    };

    

})(budgetController, UIController);


//Call init function from Global app controller
controller.init();