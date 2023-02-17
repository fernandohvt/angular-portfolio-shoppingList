import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
 recipes: Recipe[] = [];
  
 constructor(private _recipeService: RecipeService, private _router: Router, private _route: ActivatedRoute) { 
 
 }

  ngOnInit(): void {
    this.recipes = this._recipeService.getRecipeList();
  }
  onNewRecipe(){
    this._router.navigate(['new'],{relativeTo:this._route});
  }

} 
