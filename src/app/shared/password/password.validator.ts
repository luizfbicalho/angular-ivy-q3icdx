import { AbstractControl } from '@angular/forms';

export const matchPassword = (passwordField: string, confirmPasswordField: string) => {
  return (AC: AbstractControl) => {
    let password = AC.get(passwordField);
    let confirmPassword = AC.get(confirmPasswordField);
    if (password.pristine || confirmPassword.pristine) {
      return null
    }
    if (password.value === confirmPassword.value) {
      return null
    }
    return { "matchPassword": true }
  }
}
