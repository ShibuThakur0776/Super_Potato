import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
logImg(event: string) {
  console.log(event);
} 

onChangeImage(e: KeyboardEvent) {
 this.imgURL = (e.target as HTMLInputElement).value;
}

  name= "Shivam";
  imgURL="https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0";
  images  =
  ["https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0",
    "https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0",
    "https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0",
    "https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0"
  ]
  currentDate = new Date();
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings:['pepperoni','bacon'],
    size: 'large'
  }
  blueClass = false;
  fontSize =16;
  getName(){
    return this.name;
  }
}
