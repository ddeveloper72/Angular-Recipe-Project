import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ADD_INGREDIENTS } from './shopping-list.actions';
export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;
    constructor(public payload: Ingredient[]) { }
}
