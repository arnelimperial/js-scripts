import SearchModel from './models/Search';

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
    const query = 'pizza';//TODO

    if (query){
        //2. New search object and add to state
        state.search = new SearchModel(query);
        
        //3. Prepare UI for result

        //4. Search for recipes
        await state.search.getResults();//return a promise

        //5. Render results on UI
        console.log(state.search.dataResult);
    }


}

document.querySelector('.search').addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});

const search = new SearchModel('pizza');
//console.log(search);
search.getResults();