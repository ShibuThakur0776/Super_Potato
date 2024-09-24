import { Component } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css'
})
export class Step1Component {
  constructor(private wizardService: WizardService){}
  next(): void{
    this.wizardService.nextStep('step1');
  }
}
