import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent],
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
  getName(){
    return this.name;
  }
}