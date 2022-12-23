import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormActions } from './form.actions';
import { FormService } from 'src/app/features/form-builder/services/form.service';

@Injectable()
export class FormEffects {


  getFields$ = createEffect(() => this.actions$.pipe(
    ofType(FormActions.GetFields),
    switchMap(() => this.formService.getFields()
      .pipe(
        map(fields => ({ type: FormActions.GetFieldsSuccess, data: fields })),
        catchError(() => of({ type: FormActions.GetFieldsError, err: 'Can`t get fields for form, check your internet connection' }))
      ))
  ))

  getBorderTypes$ = createEffect(() => this.actions$.pipe(
    ofType(FormActions.GetBorderTypes),
    switchMap(() => this.formService.getBorderTypes()
      .pipe(
        map(borderTypes => ({ type: FormActions.GetBorderTypesSuccess, data: borderTypes })),
        catchError(() => of({ type: FormActions.GetBorderTypesError, err: 'Can`t get border types, check your internet connection' }))
      ))
  ))

  constructor(
    private actions$: Actions,
    private formService: FormService
  ) { }
}
