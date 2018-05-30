import { BMI } from './../../models/bmi.model';
import { BmiProvider } from './../../providers/bmi/bmi';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {

  height: number;
  weight: number;
  bmi: BMI;

  constructor(private bmiProvider: BmiProvider) {
  }

  calculateBmi() {
    this.bmi = this.bmiProvider.calculateBMI(this.height, this.weight);
  }


}
