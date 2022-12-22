import { createReducer, on } from '@ngrx/store';
import { Field, FormStyles, FormElement } from './interfaces';
import {
  getFields,
  getFieldsSuccess,
  getFieldsError,
  getBorderTypes,
  getBorderTypesSuccess,
  getBorderTypesError,
  selectStyles,
  applyFormStyles,
  addFormElement,
  applyElementStyles,
  deleteElement
} from './form.actions';

export const form = 'form';

export interface FormState {
  fields: Field[];
  fieldsLoading: boolean
  fieldsError: string
  borderTypes: string[],
  borderTypesLoading: boolean,
  borderTypesError: string,
  selectedStyles: string[],
  formStyles: FormStyles,
  selectedElements: FormElement[],
  selectedItemId: number,
  selectedItemIndex: number
}

export const initialState: FormState = {
  fields: [],
  fieldsLoading: false,
  fieldsError: '',
  borderTypes: [],
  borderTypesLoading: false,
  borderTypesError: '',
  selectedStyles: [],
  formStyles: {
    label: '',
    textColor: '',
    backgroundColor: '',
    borderColor: '',
    borderType: ''
  },
  selectedElements: [{ id: 0, type: 'input', styles: {} }],
  selectedItemId: 0,
  selectedItemIndex: 0
};

export const formReducer = createReducer(
  initialState,

  on(getFields, state => ({
    ...state,
    fieldsLoading: true,
  })),
  on(getFieldsSuccess, (state, action) => ({
    ...state,
    fieldsLoading: false,
    fields: action.data
  })),
  on(getFieldsError, (state, action) => ({
    ...state,
    fieldsLoading: false,
    fieldsError: action.err
  })),
  on(getBorderTypes, state => ({
    ...state,
    borderTypesLoading: true,
  })),
  on(getBorderTypesSuccess, (state, action) => ({
    ...state,
    borderTypesLoading: false,
    borderTypes: action.data
  })),
  on(getBorderTypesError, (state, action) => ({
    ...state,
    borderTypesLoading: false,
    borderTypesError: action.err
  })),
  on(selectStyles, (state, action) => ({
    ...state,
    selectedStyles: action.data,
    selectedItemId: action.id,
    selectedItemIndex: action.index
  })),
  on(applyFormStyles, (state, action) => ({
    ...state,
    formStyles: { ...action.data }
  })),
  on(addFormElement, (state, action) => ({
    ...state,
    selectedElements: [...state.selectedElements.slice(0, action.index),
    action.data, ...state.selectedElements.slice(action.index, state.selectedElements.length)]
  })),
  on(applyElementStyles, (state, action) => ({
    ...state,
    selectedElements: [...state.selectedElements.slice(0, state.selectedItemIndex),
    {
      ...state.selectedElements[state.selectedItemIndex],
      ['styles']: action.data
    }, ...state.selectedElements.slice(state.selectedItemIndex + 1, state.selectedElements.length)]
  })),
  on(deleteElement, state => ({
    ...state,
    selectedElements: [...state.selectedElements.slice(0, state.selectedItemIndex),
    ...state.selectedElements.slice(state.selectedItemIndex + 1, state.selectedElements.length)],
    selectedItemIndex: NaN,
    selectedItemId: NaN,
    selectedStyles: []
  })
  )

)


