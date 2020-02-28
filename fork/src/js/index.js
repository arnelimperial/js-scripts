import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';


import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';


import {elements, renderLoader, clearLoader} from './views/base';

/*
* GLOBAL state of the app
- Search Object
- Current recipe object
- Shopping list object
- Liked recipes
*/

const state = {};

/* SEARCH CONTROLLER */
const controlSearch = async () => {
    //1. Get query from the view
    const query = searchView.getInput();
    //console.log(query);

    if (query){
        //2. New search object and add to state
        state.search = new Search(query);
        
        //3. Prepare UI for result
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try{
            //4. Search for recipes
            await state.search.getResults();//return a promise

            //5. Render results on UI
            //console.log(state.search.dataResult);
            clearLoader();
            searchView.renderResults(state.search.dataResult);

        }catch(err){
            alert(err);
            clearLoader();
        }
       
    }


};

elements.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
    const button = e.target.closest('.btn-inline');
    if(button){
        const goToPage = parseInt(button.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.dataResult, goToPage);
       
    }
});

//const search = new Search('pizza');
//console.log(search);
//search.getResults();


/* RECIPE CONTROLLER */

//const r = new Recipe(38124);
//r.getRecipe();
// console.log(r);

const controlRecipe = async() => {
    //Get ID from the URL
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if(id){
        //Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //Highlight selected search
        if(state.search) searchView.highlightSelected(id);


        //Create new Recipe object
        state.recipe = new Recipe(id);
       
        try{
            //Get recipe data & parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
            //console.log(state.recipe.ingredient);
            //Calculate serving and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            //Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
            //console.log(state.recipe);

        }catch(err){
            alert(err);
        }
       
    }

};

window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);

//['haschange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/* LIST CONTROLLER */

const controlList = () => {

    //Create new list if there is none yet

    if(!state.list) state.list = new List();

    //Add each ingredients to the list
    state.recipe.ingredients.forEach(el => {
       const item = state.list.addItem(el.count, el.unit, el.ingredient);
       listView.renderItem(item);
    });

};


//Handle delete and update LIST item events

elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    //Handle delete btn
    if(e.target.matches('.shopping__delete', '.shopping__delete *' )){

        //Delete from state
        state.list.deleteItem(id);

        //Delete from UI
        listView.deleteItem(id);

    }

});


//Handling recipe btn click
elements.recipe.addEventListener('click', e => {
    if(e.target.matches('.btn-decrease', '.btn-decrease *')){
      
        if(state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingIngredients(state.recipe);
        }
    }else if(e.target.matches('.btn-increase', '.btn-increase *')){
        state.recipe.updateServings('inc');
        recipeView.updateServingIngredients(state.recipe);
    }else if(e.target.matches('.recipe__btn--add', '.recipe__btn--add *')){
        controlList();
    }
});


window.l = new List();