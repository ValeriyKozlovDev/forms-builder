import { changeFlag } from './auth.action';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export const auth = 'auth';

export interface AuthState {

  loginAgain: boolean
}

export const initialState: AuthState = {
  loginAgain: false
};

export const authReducer = createReducer(
  initialState,
  on(changeFlag, (state, action) => ({
    ...state,
    loginAgain: action.data
  })),
)

export const featureSelector = createFeatureSelector<AuthState>(auth)


export const loginAgainSelector = createSelector(
  featureSelector,
  state => state.loginAgain
);






