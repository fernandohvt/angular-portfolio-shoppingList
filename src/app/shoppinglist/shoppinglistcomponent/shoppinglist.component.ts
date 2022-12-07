
import {Component} from '@angular/core'
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
    selector:'app-shoppinglist',
    templateUrl:'./shoppinglist.component.html'
})
export class ShoppingListComponent {
    ingredients: Ingridient[] = [
        new Ingridient('Apples',5),
        new Ingridient('Tomatos',10)
    ];
    constructor(){}
}