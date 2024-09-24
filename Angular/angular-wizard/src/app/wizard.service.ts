import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  constructor(private router: Router) { }

  //Navigate to the next step 
  nextStep(currentStep: string):void{
    switch(currentStep){
    case 'step1':
      this.router.navigate(['/step2']);
      break;
    case 'step2':
      this.router.navigate(['/step3']);
      break;
    case 'step3':
      // End of wizard, handle accordingly
      break;
    }
  }

  previousStep(currentStep: string):void{
    switch(currentStep){
      case 'step2':
        this.router.navigate(['/step1']);
        break;
      case 'step3':
        this.router.navigate(['/step2']);
        break;
    }
  }
}
