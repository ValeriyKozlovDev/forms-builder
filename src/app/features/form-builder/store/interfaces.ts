export interface BorderType {
  value: string;
  viewValue: string;
}

export interface Field {
  id: number
  type: string
  styles: string[]
}

export interface FormStyles {
  label: string,
  textColor: string,
  backgroundColor: string,
  borderColor: string,
  borderType: string
}


export interface FormElement {
  id: number
  type: string,
  styles: {}
}
