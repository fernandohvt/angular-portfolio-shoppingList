
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    
    onIngridientAddChanged = new Subject<Ingredient[]>();
    private _ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Tomatos',10)
    ];

    getIngredientList(){
        return this._ingredients;
    }

    addIngredient(ingredient: Ingredient){
        this._ingredients.push(ingredient);
        this.onIngridientAddChanged.next(this._ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]){  
            this._ingredients.push(...ingredients);
            this.onIngridientAddChanged.next(this._ingredients.slice());    
       
    }

}