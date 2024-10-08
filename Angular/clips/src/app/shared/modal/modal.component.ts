import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
  @Input() modalID = ''
  constructor(public modal: ModalService){
    console.log(this.modal)
  }
  ngOnInit(): void {
  }

  closeModal(){
    this.modal.toggleModal(this.modalID)
  }
}
