import { getStyles, getStylesSuccess, getStylesFailed, getFields, getFieldsSuccess, getFieldsFailed } from './form.actions';
import { Styles } from '../interfaces';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export const form = 'form';

export interface FormState {
  fields: string[];
  flag: number
  fieldsLoading: boolean
  fieldsLoaded: boolean
  styles: Styles;
  stylesLoading: boolean
  stylesLoaded: boolean
}

export const initialState: FormState = {
  fields: [],
  flag: 1,
  fieldsLoading: false,
  fieldsLoaded: false,
  styles: {
    input: [],
    textarea: [],
    button: [],
    checkbox: [],
    select: []
  },
  stylesLoading: false,
  stylesLoaded: false,
};


export const formReducer = createReducer(


  initialState,
  on(getStyles,
    state => ({
      ...state,
      stylesLoading: true,
      stylesLoaded: false
    }),
  ),
  on(getStylesSuccess, (state, action) => ({
    ...state,
    stylesLoading: false,
    stylesLoaded: true,
    styles: { ...action.data }
  })),
  on(getStylesFailed, (state, action) => ({
    ...state,
    stylesLoading: false,
    stylesLoaded: false,
  })),
  on(getFields, state => ({
    ...state,
    fieldsLoading: true,
    fieldsLoaded: false,
    flag: 1
  })),
  on(getFieldsSuccess, (state, action) => ({
    ...state,
    fieldsLoading: false,
    fieldsLoaded: true,
    fields: action.data,
    flag: 2
  })),
  on(getFieldsFailed, state => ({
    ...state,
    fieldsLoading: false,
    fieldsLoaded: false
  })),
)

export const featureSelector = createFeatureSelector<FormState>(form)
export const testSelector = createSelector(
  featureSelector,
  state => state.fields
);

const select = (state: FormState) => state
export const stylesSelector = createSelector(
  select,
  state => state.styles
);
export const stylesLoadingSelector = createSelector(
  select,
  state => state.stylesLoading && !state.stylesLoaded
);
export const stylesLoadedSelector = createSelector(
  select,
  state => !state.stylesLoading && state.stylesLoaded
);
export const fieldsSelector = createSelector(
  select,
  (state: FormState) => state.fields
);
export const fieldsLoadingSelector = createSelector(
  select,
  state => state.fieldsLoading && !state.fieldsLoaded
);
export const fieldsLoadedSelector = createSelector(
  select,
  state => !state.fieldsLoading && state.fieldsLoaded
);
