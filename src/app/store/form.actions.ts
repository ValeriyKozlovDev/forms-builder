import { Styles } from './../interfaces';
import { Action, createAction, props } from '@ngrx/store';

export enum FormActions {
  GetStyles = '[FORM] get styles',
  GetStylesSuccess = '[FORM] get styles success',
  GetStylesFailed = '[FORM] get styles failed',
  GetFields = '[FORM] get fields',
  GetFieldsSuccess = '[FORM] get fields success',
  GetFieldsFailed = '[FORM] get fields failed'
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


// export class GetStyles implements Action {
//   public readonly type = FormActions.GetStyles
// }

// export class GetStylesSuccess implements Action {
//   public readonly type = FormActions.GetStylesSuccess;
//   constructor(public data: Styles) { }
// }

// export class GetStylesFailed implements Action {
//   public readonly type = FormActions.GetStylesFailed;
//   constructor(public err: any) { }
// }

// export class GetSFields implements Action {
//   public readonly type = FormActions.GetFields
// }

// export class GetFieldsSuccess implements Action {
//   public readonly type = FormActions.GetFieldsSuccess;
//   constructor(public data: string[]) { }
// }

// export class GetFieldsFailed implements Action {
//   public readonly type = FormActions.GetFieldsFailed;
//   constructor(public err: any) { }
// }
