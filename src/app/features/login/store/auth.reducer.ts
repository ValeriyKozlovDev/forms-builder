import { createReducer, on } from '@ngrx/store';
import { changeAccessFlag, setLoading } from './auth.actions';

export const auth = 'auth';

export interface AuthState {
  loginAgain: boolean,
  loading: boolean
}

export const initialState: AuthState = {
  loginAgain: false,
  loading: false

};

export const authReducer = createReducer(
  initialState,
  on(changeAccessFlag, (state, action) => ({
    ...state,
    loginAgain: action.data
  })),
  on(setLoading, (state, action) => ({
    ...state,
    loading: action.data
  })),
)







