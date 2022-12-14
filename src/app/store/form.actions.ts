import { createAction, props } from '@ngrx/store';
import { Field, FormStyles } from './../interfaces';

export enum FormActions {

  GetFields = '[FORM] get fields',
  GetFieldsSuccess = '[FORM] get fields success',
  GetFieldsFailed = '[FORM] get fields failed',
  GetBorderTypes = '[FORM] get border types',
  GetBorderTypesSuccess = '[FORM] get border types success',
  GetBorderTypesFailed = '[FORM] get border types failed',
  SelectStyles = '[FORM] select styles',
  ApplyFormStyles = '[FORM] apply form styles'
}

export const getFields = createAction(FormActions.GetFields);

export const getFieldsSuccess = createAction(
  FormActions.GetFieldsSuccess,
  props<{ data: Field[] }>()
);

export const getFieldsFailed = createAction(
  FormActions.GetFieldsFailed,
  props<{ err: any }>());


export const getBorderTypes = createAction(FormActions.GetBorderTypes);

export const getBorderTypesSuccess = createAction(
  FormActions.GetBorderTypesSuccess,
  props<{ data: string[] }>()
);

export const getBorderTypesFailed = createAction(
  FormActions.GetBorderTypesFailed,
  props<{ err: any }>()
);

export const selectStyles = createAction(
  FormActions.SelectStyles,
  props<{ data: string[] }>()
);

export const applyFormStyles = createAction(
  FormActions.ApplyFormStyles,
  props<{ data: FormStyles }>()
)
