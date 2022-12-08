import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { formReducer, FormState } from './form.reducer';

export interface State {
  form: FormState;
}

export const reducers: ActionReducerMap<State> = {
  form: formReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
