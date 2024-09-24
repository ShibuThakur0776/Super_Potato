import { Component } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component {
  constructor(private wizardService:WizardService){}
  next():void{
    this.wizardService.nextStep('step2');
  }

  previous():void{
    this.wizardService.previousStep('step2');
  }
}
