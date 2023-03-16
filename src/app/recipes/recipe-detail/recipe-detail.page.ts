import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private activatesRoute: ActivatedRoute,
    private recipeService: RecipesService
  ) {}

  ngOnInit() {
    this.activatesRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        //redirect
        return;
      }
      const recipeId: string = paramMap.get('recipeId')!;
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }
}
