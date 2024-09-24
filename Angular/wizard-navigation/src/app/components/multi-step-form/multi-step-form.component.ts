import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  imports: [],
  templateUrl: './multi-step-form.component.html',
  styleUrl: './multi-step-form.component.css'
})
export class MultiStepFormComponent {
  @Input() formContent: any;
  @Output() readonly formSubmit: EventEmitter<any> = new EventEmitter<any>();

  activeStepIndex: number|undefined;
  currentFormContent: Array<any>|undefined;
  formData: any;
  formFields: Array<Array<string>>|undefined;
  masterFormFields: Array<string>|undefined;
  stepItems: Array<any>|undefined;
  masterForm: Array<FormGroup>|undefined; 

  constructor(private readonly _formBuilder: FormBuilder, private _cd:ChangeDetectorRef){}

  ngOnInit(){
    this.activeStepIndex = 0;
    this.masterForm = [];
    this.currentFormContent = [];
    this.formFields = [];
    this.stepItems = this.formContent;

    this.stepItems?.forEach((data,i)=>{
      // holds name, validators, placeholder of all steps
      this.currentFormContent?.push(this.stepItems[i]["data"]);
      //holds string values for each field of all steps
      this.formFields?.push(Object.keys(this.currentFormContent[i]));
      //holds all form groups
      this.masterForm?.push(this.buildForm(this.currentFormContent[i]));

    })
  }
   // build separate FormGroups for each form
   buildForm(currentFormContent: any): FormGroup {
    const formDetails = Object.keys(currentFormContent).reduce((obj, key) => {
      obj[key] = ["", this.getValidators(currentFormContent[key])];

      return obj;
    }, {});

    return this._formBuilder.group(formDetails);
  }

}
