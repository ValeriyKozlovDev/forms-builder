import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { getStyles, getStylesSuccess, getStylesFailed, getFields, getFieldsSuccess, getFieldsFailed } from './form.actions';
import { Styles } from '../interfaces';

export const form = 'form';

export interface FormState {
  fields: string[];
  fieldsLoading: boolean
  fieldsLoaded: boolean
  styles: Styles;
  stylesLoading: boolean
  stylesLoaded: boolean
}

export const initialState: FormState = {
  fields: [],
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
    fieldsLoaded: false
  })),
  on(getFieldsSuccess, (state, action) => ({
    ...state,
    fieldsLoading: false,
    fieldsLoaded: true,
    fields: action.data
  })),
  on(getFieldsFailed, state => ({
    ...state,
    fieldsLoading: false,
    fieldsLoaded: false
  })),
)

export const featureSelector = createFeatureSelector<FormState>(form)

export const fieldsSelector = createSelector(
  featureSelector,
  state => state.fields
);

export const fieldsLoadingSelector = createSelector(
  featureSelector,
  state => state.fieldsLoading && !state.fieldsLoaded
);

export const fieldsLoadedSelector = createSelector(
  featureSelector,
  state => !state.fieldsLoading && state.fieldsLoaded
);

export const stylesSelector = createSelector(
  featureSelector,
  state => state.styles
);

export const stylesLoadingSelector = createSelector(
  featureSelector,
  state => state.stylesLoading && !state.stylesLoaded
);

export const stylesLoadedSelector = createSelector(
  featureSelector,
  state => !state.stylesLoading && state.stylesLoaded
);




