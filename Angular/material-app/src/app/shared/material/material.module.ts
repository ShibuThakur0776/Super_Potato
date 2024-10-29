import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconButton} from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';

const MaterialComponent =  [
  MatButtonModule,
  MatIconModule
]

@NgModule({
  imports:[MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }
