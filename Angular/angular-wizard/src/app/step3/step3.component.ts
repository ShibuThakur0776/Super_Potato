import { Component } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {
  constructor(private wizardService:WizardService){}
  previous(): void{
    this.wizardService.previousStep('step3');
  }
}
