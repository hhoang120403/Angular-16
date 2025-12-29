import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  LogMesage(name: string, status: string) {
    console.log(`A new user with name ${name} and status ${status} is created`);
  }
}
