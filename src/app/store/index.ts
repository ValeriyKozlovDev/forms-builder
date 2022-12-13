import { AuthState, authReducer } from './auth.reducer';
import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { formReducer, FormState } from './form.reducer';

export interface State {
  form: FormState;
  auth: AuthState
}

export const reducers: ActionReducerMap<State> = {
  form: formReducer,
  auth: authReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
