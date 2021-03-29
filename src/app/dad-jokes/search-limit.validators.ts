import { AbstractControl, ValidationErrors } from '@angular/forms';

export class SearchLimitValidators {
  static isInputNegative(control: AbstractControl): ValidationErrors | null {
    const limit = control.value;
    if (limit <= 0) {
      return {
        isInputNegative: true,
      };
    }
    return null;
  }
}
