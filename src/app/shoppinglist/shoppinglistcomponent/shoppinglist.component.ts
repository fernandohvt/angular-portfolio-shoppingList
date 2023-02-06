
import {Component, Input,OnInit} from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
    selector:'app-shoppinglist',
    templateUrl:'./shoppinglist.component.html'
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];
    constructor(private _shoppinListService: ShoppingListService){}
    
    ngOnInit(){
      this.ingredients = this._shoppinListService.getIngredientList();
      this._shoppinListService.onIngridientAddChanged.subscribe(( ingredients: Ingredient[] ) => {
        this.ingredients = ingredients;
      })
    }
   
}