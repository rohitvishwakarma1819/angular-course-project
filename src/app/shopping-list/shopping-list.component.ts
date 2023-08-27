import { Component, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  public ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Mango', 2),
  ];

  onIngredientAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
