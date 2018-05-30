
import { Injectable } from '@angular/core';

@Injectable()
export class BmiProvider {

  constructor() {
    console.log('Hello BmiProvider Provider');
  }

  calculateBMI(height: number, weight: number) {
    return (weight / height / height);
  }

}
