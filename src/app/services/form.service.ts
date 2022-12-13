import { environment } from './../../environments/environment';
import { Styles } from './../interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  getStyles(): Observable<Styles> {
    return this.http.get<Styles>(`${environment.server}styles`)
      .pipe(
        catchError(error => {
          return throwError(error)
        })
      )
  }

  getFields(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.server}fields`)
      .pipe(
        catchError(error => {
          return throwError(error)
        })
      )
  }

  getBorderTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.server}borderTypes`)
      .pipe(
        catchError(error => {
          return throwError(error)
        })
      )
  }

  saveForm(form: any): Observable<string[]> {
    return this.http.post<any>(`${environment.server}savedForms`, [...form])
      .pipe(
        catchError(error => {
          return throwError(error)
        })
      )
  }
}
