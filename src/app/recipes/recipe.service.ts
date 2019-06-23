import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Oven-Baked Onion-Cheese Frittata',
      'Quick Italian Recipes at Home',
    'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg',
    [
      new Ingredient('tablespoons olive oil', 2),
      new Ingredient('small onion; minced ', 1),
      new Ingredient('cup Parmesan cheese ', 0.5),
      new Ingredient('eggs', 6),
    ]),
    new Recipe(
      'Mediterranean tagliatelle',
      'Quick and easy tagliatelle with olives and sundried tomatoes will transport you to the Mediterranean.',
    'https://img.taste.com.au/UKtWC_k5/w643-h428-cfill-q90/taste/2016/11/mediterranean-tagliatelle-20864-1.jpeg',
    [
      new Ingredient('dried tagliatelle pasta', 250),
      new Ingredient('pine nuts', 250),
      new Ingredient('tablespoon olive oil', 1),
      new Ingredient('garlic clove, chopped', 1),
      new Ingredient('marinated artichoke pieces, drained', 250)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
