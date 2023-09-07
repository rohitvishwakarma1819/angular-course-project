import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.mode';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'] as string;
    this.recipe = this.recipeService.getRecipeById(id);

    this.route.params.subscribe((params) => {
      const id = params['id'] as string;
      this.recipe = this.recipeService.getRecipeById(id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
