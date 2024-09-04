import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  @Input('img') postImg = "";
  @Output() imgSelected = new EventEmitter<string>()

  
  constructor(){
    console.log("constructor called",this.postImg);
  }
  ngOnInit(): void {
    console.log("ngOnInit called !",this.postImg);
  }
  ngOnChanges(): any{
    console.log("ngOnChanges called !");
  }
  ngDoCheck():any{
    console.log("ngDoCheck called !");
  }
}
