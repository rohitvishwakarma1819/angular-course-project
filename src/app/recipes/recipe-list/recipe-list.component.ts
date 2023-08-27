import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.mode';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
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

  @Output()
  public recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
