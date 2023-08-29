import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.mode';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[];

  @Output()
  public recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
