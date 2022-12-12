import { createAction, props } from '@ngrx/store';
import { Styles } from './../interfaces';

export enum FormActions {
  GetStyles = '[FORM] get styles',
  GetStylesSuccess = '[FORM] get styles success',
  GetStylesFailed = '[FORM] get styles failed',
  GetFields = '[FORM] get fields',
  GetFieldsSuccess = '[FORM] get fields success',
  GetFieldsFailed = '[FORM] get fields failed',
  GetBorderTypes = '[FORM] get border types',
  GetBorderTypesSuccess = '[FORM] get border types success',
  GetBorderTypesFailed = '[FORM] get border types failed'
}

export const getStyles = createAction(FormActions.GetStyles);

export const getStylesSuccess = createAction(
  FormActions.GetStylesSuccess,
  props<{ data: Styles }>()
);

export const getStylesFailed = createAction(
  FormActions.GetStylesFailed,
  props<{ err: any }>());

export const getFields = createAction(FormActions.GetFields);

export const getFieldsSuccess = createAction(
  FormActions.GetFieldsSuccess,
  props<{ data: string[] }>()
);

export const getFieldsFailed = createAction(
  FormActions.GetFieldsFailed,
  props<{ err: any }>()
);

export const getBorderTypes = createAction(FormActions.GetBorderTypes);

export const getBorderTypesSuccess = createAction(
  FormActions.GetBorderTypesSuccess,
  props<{ data: string[] }>()
);

export const getBorderTypesFailed = createAction(
  FormActions.GetBorderTypesFailed,
  props<{ err: any }>()
);
