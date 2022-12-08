export interface User {
  email: string,
  password: string,
  returnSecureToken?: boolean
}

export interface AuthResponse {
  idToken: string
  expiresIn: string
}

export interface BorderType {
  value: string;
  viewValue: string;
}

export interface Styles {
  input: string[]
  textarea: string[]
  button: string[]
  checkbox: string[]
  select: string[]
}
