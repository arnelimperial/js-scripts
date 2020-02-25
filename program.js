//Callback hell sample

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

getRecipe();