import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { environment } from '../../../environments/environment';
import * as AuthActions from './auth.actions';

export interface AuthResponseData {
  kind: string;
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
      return this.http
        .post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
            environment.firebaseAPIKey,
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true
          }
        )
        .pipe(map(responseData => {
            const expirationDate = new Date(
              new Date().getTime() + +responseData.expiresIn * 1000
              ); // convert time from milliseconds to seconds
            return new AuthActions.Login({
              email: responseData.email,
              userId: responseData.localId,
              token: responseData.idToken,
              expirationDate
            });
          }), catchError(errorResponse => {
            let errorMessage = 'An unknown error has occurred!';
            if (!errorResponse.error || !errorResponse.error.error) {
              return of(new AuthActions.LoginFail(errorMessage));
            }
            switch (errorResponse.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This email address has already been taken!';
                break;
              case 'EMAIL_NOT_FOUND':
                errorMessage = 'Please check your email address';
                break;
              case 'INVALID_PASSWORD':
                errorMessage = 'Please check your password!';
            }
            return of(new AuthActions.LoginFail(errorMessage));
          })
        );
    })
  );

  @Effect({ dispatch: false })
  authSuccess = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
