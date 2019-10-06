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

const handleAuthentication = (
  expiresIn: number,
  email: string,
  userId: string,
  token: string
  ) => {
    const expirationDate = new Date(
      new Date().getTime() + +expiresIn * 1000); // convert time from milliseconds to seconds
    return new AuthActions.AuthenticateSuccess({
      email,
      userId,
      token,
      expirationDate
    });
};

const handleError = (errorResponse: any) => {
  let errorMessage = 'An unknown error has occurred!';
  if (!errorResponse.error || !errorResponse.error.error) {
    return of(new AuthActions.AuthenticateFail(errorMessage));
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
  return of(new AuthActions.AuthenticateFail(errorMessage));
};

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$.pipe(
    ofType(AuthActions.SIGNUP_START),
    switchMap((signupAction: AuthActions.SignupStart) => {
      return this.http
        .post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
            environment.firebaseAPIKey,
          {
            email: signupAction.payload.email,
            password: signupAction.payload.password,
            returnSecureToken: true
          }
        )
        .pipe(map(responseData => {
          return handleAuthentication(
            +responseData.expiresIn,
            responseData.email,
            responseData.localId,
            responseData.idToken
            );
          }),
          catchError(errorResponse => {
            return handleError(errorResponse);
          })
        );
    })
  );

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
            return handleAuthentication(
              +responseData.expiresIn,
              responseData.email,
              responseData.localId,
              responseData.idToken);
          }),
          catchError(errorResponse => {
            return handleError(errorResponse);
          })
        );
    })
  );

  @Effect({ dispatch: false })
  authSuccess = this.actions$.pipe(
    ofType(AuthActions.AUTHENTICATE_SUCCESS),
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
