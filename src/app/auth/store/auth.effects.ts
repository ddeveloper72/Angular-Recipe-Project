import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import * as AuthActions from './auth.actions';
import { of } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
    @Effect()
    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {
            return this.http.post<AuthResponseData>(
              'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
                environment.firebaseAPIKey,
              {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true
              }
            )
            .pipe(
                map(responseData => {
                const expirationDate = new Date(
                    new Date()
                    .getTime() + +responseData.expiresIn
                    * 1000); // convert time from milliseconds to seconds
                return of(
                    new AuthActions.Login({
                    email: responseData.email,
                    userID: responseData.localId,
                    token: responseData.idToken,
                    expirationDate: expirationDate
                })
                );
            }),
                catchError(error => {
                /// ...
                return of();
            }),
            );
        }),
    );

    constructor(private actions$: Actions, private http: HttpClient) {}
}
