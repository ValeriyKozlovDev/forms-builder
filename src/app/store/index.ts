import { FormState, formReducer } from '../features/form-builder/store/form.reducer';
import { AuthState, authReducer } from '../features/login/store/auth.reducer';
import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

export interface State {
  form: FormState;
  auth: AuthState
}

export const reducers: ActionReducerMap<State> = {
  form: formReducer,
  auth: authReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
