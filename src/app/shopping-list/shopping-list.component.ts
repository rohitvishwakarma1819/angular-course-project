import { Component, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shpping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  public ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsUpdated.subscribe(
      (ingredientsArr: Ingredient[]) => (this.ingredients = ingredientsArr)
    );
  }
}
