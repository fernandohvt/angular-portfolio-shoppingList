import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
 recipes: Recipe[] = [
  new Recipe('A test Recipe','This is simply a test','https://thebrilliantkitchen.com/wp-content/uploads/2022/08/General-Tsos-chicken.jpg.webp'),
  new Recipe('Fernando Recipe','Recipe created by the chef Fernando','https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg')
 ];
  
 constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipeSelected: Recipe){
    console.log('recipe seleted: ',recipeSelected);
    this.recipeWasSelected.emit(recipeSelected);
  }

}
