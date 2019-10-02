import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { environment } from 'src/environments/environment';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}



@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<fromApp.AppState>
    ) {}
  signup(email: string, password: string) {
    return this.http.post < AuthResponseData > (
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey, {
        email,
        password,
        returnSecureToken: true
      }
    )
    .pipe(catchError(this.handleError), tap(
      responseData => {
        this.authenticationHandler(
          responseData.email,
          responseData.localId,
          responseData.idToken,
          +responseData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
      );
    if (loadedUser.token) {
        // this.user.next(loadedUser);
        this.store.dispatch(
          new AuthActions.Login({
            email: loadedUser.email,
            userID: loadedUser.id,
            token: loadedUser.token,
            expirationDate: new Date(userData._tokenExpirationDate)
          })
        )
        const expirationDuration =
          new Date(userData._tokenExpirationDate).getTime() -
          new Date().getTime();
        this.autoLogout(expirationDuration);
      }
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
        {
          email,
          password,
          returnSecureToken: true
        }
      )
      .pipe(catchError(this.handleError), tap(
        responseData => {
          this.authenticationHandler(
          responseData.email,
          responseData.localId,
          responseData.idToken,
          +responseData.expiresIn
         );
       })
     );
  }

  logout() {
    // this.user.next(null);
    this.store.dispatch(
      new AuthActions.Logout()
    );
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private authenticationHandler(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
    ) {
    const expirationDate = new Date(
      new Date()
      .getTime() + +expiresIn
      * 1000); // convert time from milliseconds to seconds

    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    // this.user.next(user);
    this.store.dispatch(
      new AuthActions.Login({
        email: email,
        userID: userId,
        token: token,
        expirationDate: expirationDate
      })
    )
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorResponse: HttpErrorResponse) {
      let errorMessage = 'An unknown error has occurred!';
      if (!errorResponse.error || !errorResponse.error.error) {
        return throwError(errorMessage);
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
      return throwError(errorMessage);
  }
}
