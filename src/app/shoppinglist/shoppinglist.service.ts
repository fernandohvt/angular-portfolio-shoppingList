import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    
    onIngridientAddChanged = new EventEmitter<Ingredient[]>();
    private _ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Tomatos',10)
    ];

    getIngredientList(){
        return this._ingredients;
    }

    addIngredient(ingredient: Ingredient){
        this._ingredients.push(ingredient);
        this.onIngridientAddChanged.emit(this._ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]){  
            this._ingredients.push(...ingredients);
            this.onIngridientAddChanged.emit(this._ingredients.slice());    
       
    }

}