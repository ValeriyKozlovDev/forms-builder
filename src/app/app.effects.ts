import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { changeUpdatedAt, clear, decrease, increase } from './reducers/form';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  // updatedAt$ = createEffect(() => this.actions$.pipe(
  //   ofType(increase, decrease, clear),
  //   map(() => changeUpdatedAt({ updatedAt: Date.now() }))
  // ));

  constructor(private actions$: Actions) {
  }
}
