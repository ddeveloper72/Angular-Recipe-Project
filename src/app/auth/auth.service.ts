import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

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
  user = new Subject<User>();

  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http.post < AuthResponseData > (
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1bZ35E939yBfRVynNITYxxVQTqlrZ4EA', {
        email,
        password,
        returnSecureToken: true
      }
    )
    .pipe(catchError(this.handleError), tap(
      responseData => {
        const expirationDate = new Date(
          new Date()
          .getTime() + +responseData.expiresIn
          * 1000
          ); // convert time from milliseconds to seconds

        const user = new User(
          responseData.email,
          responseData.idToken,
          responseData.localId,
          expirationDate
        );
        this.user.next(user);
      }
    ));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1bZ35E939yBfRVynNITYxxVQTqlrZ4EA',
        {
          email,
          password,
          returnSecureToken: true
        }
      )
      .pipe(catchError(this.handleError));
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
