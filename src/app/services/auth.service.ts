import { AuthResponse, User } from './../interfaces';
import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, Subject, tap, throwError } from "rxjs";


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  public error$: Subject<string> = new Subject<string>()

  get token(): any {
    const expDate = new Date(Number(localStorage.getItem('fb-token-exp')))
    if (new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  logout() {
    this.setToken(null)
  }
  isAuthenticated(): boolean {
    return !!this.token
  }

  private handleError(error: HttpErrorResponse) {
    const { message } = error.error.error
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Wrong email')
        break
      case 'INVALID_PASSWORD':
        this.error$.next('Wrong password')
        break
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Have not this email')
        break
    }
    return throwError(error)
  }


  private setToken(response: AuthResponse | null | any) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}
