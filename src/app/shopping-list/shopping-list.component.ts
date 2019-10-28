import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';
import {
  trigger,
  style,
  state,
  animate,
  transition,
  keyframes,
  group
} from '@angular/animations';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('items', [
      transition('void => *', [
        group([
          animate(
            1000,
            keyframes([
              style({
                transform: 'translateX(-100px)',
                opacity: 0,
                offset: 0
              }),
              style({
                transform: 'translateX(-50px)',
                opacity: 0.5,
                offset: 0.3
              }),
              style({
                transform: 'translateX(-20px)',
                opacity: 1,
                offset: 0.8
              }),
              style({
                transform: 'translateX(0px)',
                opacity: 1,
                offset: 1
              })
            ])
          )
        ])
      ]),
      transition('* => void', [
        group([
          animate(
            1000,
            keyframes([
              style({
                transform: 'translateX(0px)',
                opacity: 1,
                offset: 0,
                backgroundColor: 'red'
              }),
              style({
                transform: 'translateX(20px)',
                opacity: 0.8,
                offset: 0.3,
                backgroundColor: 'red'
              }),
              style({
                transform: 'translateX(50px)',
                opacity: 0.5,
                offset: 0.8,
                backgroundColor: 'red'
              }),
              style({
                transform: 'translateX(100px)',
                opacity: 0,
                offset: 1,
                backgroundColor: 'red'
              })
            ])
          )
        ])
      ])
    ])
  ]
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;


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
