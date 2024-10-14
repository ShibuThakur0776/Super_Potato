import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multi-step-form';
currentStep:number=1; 
  constructor(){
  }

  gotoNextStep(activeStep:number){
    if(activeStep<3)
    this.currentStep = activeStep+1;
  }
  backToPrevious(activeStep:number){
    if(activeStep>1){
      this.currentStep = activeStep-1;
    }
  }
}
