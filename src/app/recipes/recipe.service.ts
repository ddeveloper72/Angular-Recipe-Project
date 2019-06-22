import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test',
    'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg'),
    new Recipe('Mediterranean tagliatelle', 'This is a test',
    'https://img.taste.com.au/UKtWC_k5/w643-h428-cfill-q90/taste/2016/11/mediterranean-tagliatelle-20864-1.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
