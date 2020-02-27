import SearchModel from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

/*
* GLOBAL state of the app
- Search Object
- Current recipe object
- Shopping list object
- Liked recipes
*/

const state = {};

const controlSearch = async () => {
    //1. Get query from the view
    const query = searchView.getInput();
    //console.log(query);

    if (query){
        //2. New search object and add to state
        state.search = new SearchModel(query);
        
        //3. Prepare UI for result
        searchView.clearInput();
        searchView.clearResults();


        //4. Search for recipes
        await state.search.getResults();//return a promise

        //5. Render results on UI
        //console.log(state.search.dataResult);
        searchView.renderResults(state.search.dataResult);
    }


};

elements.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});

const search = new SearchModel('pizza');
//console.log(search);
search.getResults();