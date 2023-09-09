import { Component } from '@angular/core';
import { Recipe } from './recipe.mode';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit() {}

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
