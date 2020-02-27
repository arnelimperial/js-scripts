import SearchModel from './models/Search';
import RecipeModel from './models/Recipe';

import * as searchView from './views/searchView';
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
    //const query = 'pizza';

    //console.log(query);

    if (query){
        //2. New search object and add to state
        state.search = new SearchModel(query);
        
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

const search = new SearchModel('pizza');
//console.log(search);
search.getResults();


/* RECIPE CONTROLLER */

// const r = new RecipeModel(38124);
// r.getRecipe();
// console.log(r);

const controlRecipe = async() => {
    //Get ID from the URL
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if(id){
        //Prepare UI for changes

        //Create new Recipe object
        state.recipe = new RecipeModel(id);
        try{
            //Get recipe data
            await state.recipe.getRecipe();
            //Calculate serving and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            //Render recipe
            console.log(state.recipe);

        }catch(error){
            alert(err);
        }
       
    }

};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);

['haschange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
