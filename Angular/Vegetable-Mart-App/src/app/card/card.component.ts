import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cardInfo: any;
  constructor(private data:DataService){
    this.cardInfo = data.getData();
  }
 
}
