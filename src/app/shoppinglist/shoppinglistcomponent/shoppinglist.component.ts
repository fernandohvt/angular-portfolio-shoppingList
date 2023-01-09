
import {Component} from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector:'app-shoppinglist',
    templateUrl:'./shoppinglist.component.html'
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatos',10)
    ];
    constructor(){}

    onIngredientAdded(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }
}