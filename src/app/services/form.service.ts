import { environment } from './../../environments/environment';
import { Field } from './../interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  getFields(): Observable<Field[]> {
    return this.http.get<Field[]>(`${environment.server}fields`)
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
