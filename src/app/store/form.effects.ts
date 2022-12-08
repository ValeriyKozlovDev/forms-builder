import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FormActions } from './form.actions';
import { FormService } from 'src/app/services/form.service';

@Injectable()
export class FormEffects {

  getStyles$ = createEffect(() => this.actions$.pipe(
    ofType(FormActions.GetStyles),
    mergeMap(() => this.formService.getStyles()
      .pipe(
        map(styles => ({ type: FormActions.GetStylesSuccess, data: styles })),
        catchError(() => of({ type: FormActions.GetStylesFailed, err: 'err' }))
      ))
  ))

  getFields$ = createEffect(() => this.actions$.pipe(
    ofType(FormActions.GetFields),
    mergeMap(() => this.formService.getFields()
      .pipe(
        map(fields => ({ type: FormActions.GetFieldsSuccess, data: fields })),
        catchError(() => of({ type: FormActions.GetFieldsFailed, err: 'err' }))
      ))
  ))

  constructor(
    private actions$: Actions,
    private formService: FormService
  ) { }
}
