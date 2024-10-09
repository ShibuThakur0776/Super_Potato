import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardInfo: any;
  constructor() { 
    this.cardInfo = [
      {imgURL:"https://images.unsplash.com/photo-1507484467459-0c01be16726e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,title:"Raddish" ,description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
      {imgURL:"https://images.unsplash.com/photo-1465362342881-f183990e82b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHZlZ2V0YWJsZXxlbnwwfHwwfHx8MA%3D%3D" ,title:"Capsicum" ,description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
      {imgURL:"https://images.unsplash.com/photo-1517666005606-69dea9b54865?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,title:"Tomato" ,description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
    ]
  }

  getData():void{
    return this.cardInfo;
  }
 
}
