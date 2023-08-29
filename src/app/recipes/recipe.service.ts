import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.mode';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'samosa',
      'aloo samosa',
      'https://banner2.cleanpng.com/20180603/lbt/kisspng-samosa-indian-cuisine-fast-food-dahi-vada-pakora-indian-restaurant-5b13eea41718b4.7198930515280329320946.jpg'
    ),
    new Recipe(
      'Jalebi',
      'aloo samosa',
      'https://banner2.cleanpng.com/20180603/lbt/kisspng-samosa-indian-cuisine-fast-food-dahi-vada-pakora-indian-restaurant-5b13eea41718b4.7198930515280329320946.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
