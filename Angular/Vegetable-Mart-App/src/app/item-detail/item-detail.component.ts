import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  
  constructor(private data:DataService){

  }
}
