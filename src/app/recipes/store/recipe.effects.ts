import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as RecipesActions from './recipe.actions';
import { switchMap } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
export class RecipeEffects {
    @Effect()
    fetchRecipes = this.actions$.pipe(
        ofType(RecipesActions.FETCH_RECIPES),
        switchMap(() => {
            return this.http.get<Recipe[]>(
              'https://angular-recipe-project-b2193.firebaseio.com/recipes.json'
            );
        })
        );
    constructor(
        private actions$: Actions,
        private http: HttpClient
        ) {}
}
