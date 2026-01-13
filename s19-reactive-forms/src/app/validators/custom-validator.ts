import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static noSpaceAllowed(control: AbstractControl) {
    const value = control.value;
    if (value && value.includes(' ')) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  static checkUserName(control: AbstractControl): Promise<any> {
    const userName = control.value;

    if (userName === null || userName === '') {
      return Promise.resolve(null);
    }

    return userNameAllowed(userName);
  }
}

const userNameAllowed = (userName: string) => {
  const takenUserNames = ['jayt1204', 'root1', 'user2'];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (takenUserNames.includes(userName)) {
        resolve({ checkUsername: true });
      } else {
        resolve(null);
      }
    }, 3000);
  });
};
