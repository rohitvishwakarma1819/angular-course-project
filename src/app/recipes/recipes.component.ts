import { Component, Input } from '@angular/core';
import { Recipe } from './recipe-list/recipe.mode';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
