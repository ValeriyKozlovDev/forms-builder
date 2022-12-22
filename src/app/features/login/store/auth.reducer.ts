import { createReducer, on } from '@ngrx/store';
import { changeFlag } from './auth.actions';

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







