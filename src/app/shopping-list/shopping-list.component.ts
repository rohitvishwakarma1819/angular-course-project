import { Component } from '@angular/core';
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
}
