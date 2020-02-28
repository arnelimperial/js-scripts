import axios from 'axios';
//import {path} from '../config' 

export default class Recipe{
    constructor(id){
        this.id = id;
    }


    async getRecipe(){
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;

        }catch(err){
            alert(err);
        }
    }

    calcTime(){
        //15 mins/ 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings(){
        this.servings = 4;
    }

    parseIngredients(){
        const unitsLong = ['tablespoon', 'tablespoons', 'ounces', 'ounce', 'teaspoon', 'teaspoons', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const units = [...unitsLong, 'kg', 'g'];
        const newIngredients = this.ingredients.map(el => {
            //1. Uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            //2. Remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");


            //3. Parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

            let objIng;
            if(unitIndex > -1){
                //There is a unit
                const arrCount = arrIng.slice(0, unitIndex);
                let count;
                if(arrCount === 1){
                    count = eval(arrIng[0].replace('-', '+'));
                }else{
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }

                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')

                };
            }else if(parseInt(arrIng[0], 10)){
                //No unit but first element is a number 
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }

            }else if(unitIndex === -1){
                //No unit or number in a first position

                objIng = {
                    count: 1,
                    unit: '',
                    ingredient: ingredient

                };
            }
            return objIng;

        });

        this.ingredients = newIngredients;
    }

    updateServing(type){
        //Serving
        const newServings = type === 'dec' ? this.servinhs -1 : this.servings + 1;

        //Ingredients
        this.ingredients.forEach(ing => {
            ing.count = ing.count * (newServings / this.servings);
        });

        this.servings = newServings;
    }

}