import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.mode';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input()
  public recipe: Recipe;
  @Output()
  public recipeSelected = new EventEmitter<void>();

  onRecipeSelected() {
    this.recipeSelected.emit();
  }
}
