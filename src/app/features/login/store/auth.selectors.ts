import { auth } from './auth.reducer';
import { AuthState } from './auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const featureSelector = createFeatureSelector<AuthState>(auth)

export const selectLoginAgain = createSelector(
  featureSelector,
  state => state.loginAgain
);
export const selectLoading = createSelector(
  featureSelector,
  state => state.loading
);
