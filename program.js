
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
            const recipe1 = {title: 'Gyros', cookedBy: 'Noah'};
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

/*
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
});*/


//async function returns promises

async function getRecipesAW(){
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Jayrod');
    console.log(related);
    //Async function always return a promise so we can use then and catch method.
    return recipe;
}

getRecipesAW().then(result => console.log(`${result} is the best ever.`));


