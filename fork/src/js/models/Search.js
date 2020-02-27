//Search Model
import axios from 'axios';

export default class SearchModel{
    constructor(query){
        this.query = query;
    }

    async getResults(){
        try{
            const response = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.dataResult = response.data.recipes;
            //console.log(this.dataResult);
    
        }
        catch(err){
            alert(err);
        }
        
    }
}