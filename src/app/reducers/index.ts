import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterReducer, CounterState } from './form';

export interface State {
  counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
