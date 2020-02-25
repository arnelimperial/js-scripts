/*Promise is an object that keeps track if certain events has happened already or not
and determine what happens after the events happened;
Use new keyword

*/
//Callback hell sample

/*
function getRecipe(){
    setTimeout(() => {
        const recipeID = [500, 273, 898, 101, 477];
        console.log(recipeID);

        setTimeout((id) =>{
            const recipe1 = {title: 'gyros', cookedBy: 'Noah'};
            console.log(`${id}: ${recipe1.title}`);

            setTimeout((cookedBy) => {
                const recipe2 = {title:'pasta', cookedBy: 'Jayrod'};
                console.log(recipe2);
            //call from the second timeout
            },2000, recipe1.cookedBy);

        //call from first timeout
        }, 1000, recipeID[4]);

    }, 1500);
}

getRecipe();*/

//2 methods of promise object is 'then' and 'catch' 

//Execution function

const getIDs = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        //reject([500, 273, 898, 101, 477]);
        resolve([500, 273, 898, 101, 477]);


    }, 1500);

});

const getRecipe = recipeID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe1 = {title: 'gyros', cookedBy: 'Noah'};
            resolve(`${ID}: ${recipe1.title}`);

        }, 2000, recipeID);
        
    });

}

const getRelated = cook => {
    return new Promise((resolve, reject) => {
        setTimeout(cooked => {
            const recipe2 = {title:'Vegetarian Pasta', cookedBy: 'Jayrod'};
            resolve(`${cooked}: ${recipe2.title}`);

        }, 2000, cook);
    });
}
//Consume promises
getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Jayrod');
})
.then(recipe => {
    console.log(recipe);
})
.catch(error =>{
    console.log('There is a error');
});


