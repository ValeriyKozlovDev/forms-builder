import { Field, FormStyles } from './../interfaces';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { getFields, getFieldsSuccess, getFieldsFailed, getBorderTypes, getBorderTypesSuccess, getBorderTypesFailed, selectStyles, applyFormStyles } from './form.actions';

export const form = 'form';

export interface FormState {
  fields: Field[];
  fieldsLoading: boolean
  fieldsLoaded: boolean
  borderTypes: string[],
  borderTypesLoading: boolean,
  borderTypesLoaded: boolean,
  selectedStyles: string[],
  formStyles: FormStyles
}

export const initialState: FormState = {
  fields: [],
  fieldsLoading: false,
  fieldsLoaded: false,
  borderTypes: [],
  borderTypesLoading: false,
  borderTypesLoaded: false,
  selectedStyles: [],
  formStyles: {
    label: '',
    textColor: '',
    backgroundColor: '',
    borderColor: '',
    borderType: ''
  }
};

export const formReducer = createReducer(
  initialState,

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
  on(selectStyles, (state, action) => ({
    ...state,
    selectedStyles: action.data
  })),
  on(applyFormStyles, (state, action) => ({
    ...state,
    formStyles: { ...action.data }
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

export const selectedStylesSelector = createSelector(
  featureSelector,
  state => state.selectedStyles
);

export const formStylesSelector = createSelector(
  featureSelector,
  state => state.formStyles
);





