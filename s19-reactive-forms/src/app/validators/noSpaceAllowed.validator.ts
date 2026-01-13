import { AbstractControl } from '@angular/forms';

export const noSpaceAllowed = (control: AbstractControl) => {
  const value = control.value;
  if (value && value.includes(' ')) {
    return { noSpaceAllowed: true };
  }
  return null;
};
