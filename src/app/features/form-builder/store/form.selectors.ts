import { form } from './form.reducer';
import { FormState } from './form.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

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

export const selectedElementsSelector = createSelector(
  featureSelector,
  state => state.selectedElements
)

export const selectedItemIdSelector = createSelector(
  featureSelector,
  state => state.selectedItemId
)




