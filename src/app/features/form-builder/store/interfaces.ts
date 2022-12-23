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
  styles: Styles
}

export interface Styles {
  label?: string,
  textColor?: string,
  placeholder?: string,
  width?: number,
  height?: number,
  fontSize?: number,
  fontWeight?: number,
  required?: boolean,
  colorInput?: string,
  backgroundColor?: string,
  borderType?: string,
  borderColor?: string,
  color?: string,
  options?: string[]
}
