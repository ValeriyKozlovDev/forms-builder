import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { getStyles, getStylesSuccess, getStylesFailed, getFields, getFieldsSuccess, getFieldsFailed, getBorderTypes, getBorderTypesSuccess, getBorderTypesFailed } from './form.actions';
import { Styles } from '../interfaces';

export const form = 'form';

export interface FormState {
  fields: string[];
  fieldsLoading: boolean
  fieldsLoaded: boolean
  styles: Styles;
  stylesLoading: boolean
  stylesLoaded: boolean
  borderTypes: string[],
  borderTypesLoading: boolean,
  borderTypesLoaded: boolean
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
  borderTypes: [],
  borderTypesLoading: false,
  borderTypesLoaded: false
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
  on(getBorderTypes, state => ({
    ...state,
    borderTypesLoading: true,
    borderTypesLoaded: false
  })),
  on(getBorderTypesSuccess, (state, action) => ({
    ...state,
    borderTypesLoading: false,
    borderTypesLoaded: true,
    borderTypes: action.data
  })),
  on(getBorderTypesFailed, state => ({
    ...state,
    borderTypesLoading: false,
    borderTypesLoaded: false
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

export const borderTypesSelector = createSelector(
  featureSelector,
  state => state.borderTypes
);

export const borderTypesLoadingSelector = createSelector(
  featureSelector,
  state => state.borderTypesLoading && !state.borderTypesLoaded
);

export const borderTypesLoadedSelector = createSelector(
  featureSelector,
  state => !state.borderTypesLoading && state.borderTypesLoaded
);




