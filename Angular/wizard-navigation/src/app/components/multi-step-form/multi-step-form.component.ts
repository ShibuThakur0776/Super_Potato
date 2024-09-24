import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  activeStepIndex: number = 0;
  currentFormContent: Array<any> = [];
  formData: any;
  formFields: Array<Array<string>> = [];
  masterFormFields: Array<string>|undefined;
  stepItems: Array<any> =[];
  masterForm: Array<FormGroup> =[]; 

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

  getValidators(formField: any):Validators{
    const fieldValidators = Object.keys(formField.validations).map(
      validator =>{
        if(validator === "required"){
          return Validators[validator];
        }else{
          return Validators[validator](formField.validations[validator]);
        }
      }
    );
    return fieldValidators;
  }
  //get validation error messages per error, per field
  getValidationMessage(formIndex:number, formFieldName: string):string{
    const formErrors = this.masterForm[formIndex].get(formFieldName)?.errors;
    const errorMessages = this.currentFormContent[formIndex][formFieldName].errors;
    const validationError = errorMessages[Object.keys(formErrors)[0]];

    return validationError;
  }

  
}
