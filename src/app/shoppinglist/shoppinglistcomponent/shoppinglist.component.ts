
import {Component, Input,OnDestroy,OnInit} from '@angular/core'
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
    selector:'app-shoppinglist',
    templateUrl:'./shoppinglist.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private idChangeSub: Subscription;
    constructor(private _shoppinListService: ShoppingListService){}
    
    ngOnInit(){
      this.ingredients = this._shoppinListService.getIngredientList();
     this.idChangeSub = this._shoppinListService.onIngridientAddChanged.subscribe(( ingredients: Ingredient[] ) => {
        this.ingredients = ingredients;
      })
    }
   ngOnDestroy(): void {
     this.idChangeSub.unsubscribe();
   }
}