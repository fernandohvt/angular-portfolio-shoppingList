import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private _recipes: Recipe[] = [
        new Recipe('A test Recipe',
        'This is simply a test',
        'https://thebrilliantkitchen.com/wp-content/uploads/2022/08/General-Tsos-chicken.jpg.webp',
        [new Ingredient('Meat',1),
        new Ingredient('French Fries',1)]),
        new Recipe('Fernando Recipe',
        'Recipe created by the chef Fernando',
        'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
        [new Ingredient('Meat',2),
        new Ingredient('Buns',2)])
       ];

     getRecipeList(){
        return this._recipes.slice();
    }
    getRecipeById(index:number){
        return this._recipes[index];
    }

}