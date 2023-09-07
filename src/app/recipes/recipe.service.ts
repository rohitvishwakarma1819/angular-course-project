import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.mode';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shpping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      '1',
      'samosa',
      'aloo samosa',
      'https://banner2.cleanpng.com/20180603/lbt/kisspng-samosa-indian-cuisine-fast-food-dahi-vada-pakora-indian-restaurant-5b13eea41718b4.7198930515280329320946.jpg',
      [
        new Ingredient('Maida', 2),
        new Ingredient('Aloo', 2),
        new Ingredient('Tomato', 3),
      ]
    ),
    new Recipe(
      '2',
      'Jalebi',
      'aloo samosa',
      'https://banner2.cleanpng.com/20180603/lbt/kisspng-samosa-indian-cuisine-fast-food-dahi-vada-pakora-indian-restaurant-5b13eea41718b4.7198930515280329320946.jpg',
      [
        new Ingredient('Khowa', 5),
        new Ingredient('sugar', 2),
        new Ingredient('milk', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: string) {
    return this.recipes.find((recipe) => recipe.id === id);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
