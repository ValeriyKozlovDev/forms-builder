import { Injectable } from '@angular/core';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FormActions } from './form.actions';
import { FormService } from 'src/app/services/form.service';

@Injectable()
export class FormEffects {

  getStyles$ = createEffect(() => this.actions$.pipe(
    ofType(FormActions.GetStyles),
    switchMap(() => this.formService.getStyles()
      .pipe(
        map(styles => ({ type: FormActions.GetStylesSuccess, data: styles })),
        catchError(() => of({ type: FormActions.GetStylesFailed, err: 'err' }))
      ))
  ))

  getFields$ = createEffect(() => this.actions$.pipe(
    ofType(FormActions.GetFields),
    switchMap(() => this.formService.getFields()
      .pipe(
        map(fields => ({ type: FormActions.GetFieldsSuccess, data: fields })),
        catchError(() => of({ type: FormActions.GetFieldsFailed, err: 'err' }))
      ))
  ))

  getBorderTypes$ = createEffect(() => this.actions$.pipe(
    ofType(FormActions.GetBorderTypes),
    switchMap(() => this.formService.getBorderTypes()
      .pipe(
        map(borderTypes => ({ type: FormActions.GetBorderTypesSuccess, data: borderTypes })),
        catchError(() => of({ type: FormActions.GetBorderTypesFailed, err: 'err' }))
      ))
  ))

  constructor(
    private actions$: Actions,
    private formService: FormService
  ) { }
}
