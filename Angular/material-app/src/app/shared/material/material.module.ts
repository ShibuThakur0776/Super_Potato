import { NgModule } from '@angular/core';
import { MatButtonModule} from "@angular/material/button";
import { MatFormField,MatFormFieldAppearance } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const MaterialComponent =  [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormField,
]

@NgModule({
  imports:[MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }
