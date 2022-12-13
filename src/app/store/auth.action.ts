import { createAction, props } from '@ngrx/store';

export enum FormActions {
  changeFlag = '[AUTH] change login again flag',
}


export const changeFlag = createAction(
  FormActions.changeFlag,
  props<{ data: boolean }>()
);

