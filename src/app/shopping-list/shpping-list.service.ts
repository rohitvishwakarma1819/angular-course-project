import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Mango', 2),
  ];
  public ingredientsUpdated = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredientsArr: Ingredient[]) {
    this.ingredients.push(...ingredientsArr);
    this.ingredientsUpdated.emit(this.getIngredients());
  }
}
