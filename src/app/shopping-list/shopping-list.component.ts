import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  Store
} from '@ngrx/store';

import {
  Ingredient
} from '../shared/ingredient.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('items', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            transform: 'translateY(-15px)'
          }),
          stagger(
            '50ms',
            animate(
              '550ms ease-out',
              style({
                opacity: 1,
                transform: 'translateY(0px)'
              })
            )
          )
        ])
      ])
    ]),
    trigger('item', [
      transition('* => void', [
        animate(
          1000,
          keyframes([
            style({
              transform: 'translateY(0px)',
              opacity: 1,
              offset: 0,
              backgroundColor: 'red',
              zIndex: 10
            }),
            style({
              transform: 'translateY(20px)',
              opacity: 0.8,
              offset: 0.3,
              backgroundColor: 'red',
              zIndex: 10
            }),
            style({
              transform: 'translateY(50px)',
              opacity: 0.5,
              offset: 0.8,
              backgroundColor: 'red',
              zIndex: 10
            }),
            style({
              transform: 'translateY(100px) rotate(360deg) scale(0)',
              opacity: 0,
              offset: 1,
              backgroundColor: 'red',
              zIndex: 10
            })
          ])
        )
      ])
    ])
  ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{
    ingredients: Ingredient[];
  }>;
  itemsLength: number;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy() {
    // this.igChangeSubscription.unsubscribe();
  }
}
