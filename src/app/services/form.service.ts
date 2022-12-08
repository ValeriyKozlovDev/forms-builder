import { tap } from 'rxjs';
import { Styles } from './../interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  getStyles(): Observable<Styles> {
    return this.http.get<Styles>(`http://localhost:3000/styles`)
      .pipe(
        catchError(error => {
          return throwError(error)
        })
      )
  }

  getFields(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:3000/fields`)
      .pipe(
        tap(request => console.log('request', request)),
        catchError(error => {
          return throwError(error)
        })
      )
  }


}
