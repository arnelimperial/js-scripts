//https://forkify-api.herokuapp.com/api/search
import axios from 'axios';
async function getResult(query){
    try{
        const result = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        const recipes = result.data.recipes;
        console.log(recipes);

    }
    catch(err){
        alert(err);
    }
    
}

getResult('pasta');
