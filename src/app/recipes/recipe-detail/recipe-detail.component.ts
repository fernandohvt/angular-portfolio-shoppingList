import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shoppinglist/shoppinglist.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private _shoppinListService: ShoppingListService,private _router: Router,
              private _route: ActivatedRoute, private _recipeService: RecipeService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) =>{
      this.id = +params['id'];
      this.recipe = this._recipeService.getRecipeById(this.id);
    })
  }
  onAddToShoppingList(){
   
      this._shoppinListService.addIngredients(this.recipe.ingredients);
   
  }
  onEditRecipe(){
   this._router.navigate(['edit'],{relativeTo:this._route});
    //this._router.navigate(['../',this.id,'edit'],{relativeTo:this._route});
  }
}
