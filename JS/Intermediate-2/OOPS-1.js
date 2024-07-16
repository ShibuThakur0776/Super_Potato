//simple this refers to the global object 
//console.log(this);
//output: window object 

//this keyword is used to provide the refrence of the object 

// method 
// function 
// const person = {
// firstName : "John",
// lastName: "Doe",
// id: 5566,
// fullName: function(){
//     console.log(person.id);
//     return person.firstName + " "+ person.lastName
// }
// }
  
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName());

// const fun = function(name){
//     console.log(this);
// }

// fun();
// console.log(fun());
//= --> Assignment opertor (value assignment)
//== --> eqaul to opertor (value check & datatype)
//5 == '5'
//output : true
//5 === '5'
//output : false
//=== --> equality opertor (value check & datatype)

//constructor Function--> 
//when you create an object constructor automatically gets invoked & it is a special type of function which is used to assign values to the properties


// function Person(first,last,age,eye){
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eye = eye;
// }

// const myFather = new Person("John","Doe",50,"blue");

// const myMother = new Person("Sally","Rally",48,"green");

// const mySister = new Person("Anna","Rally",18,"green");

// const mySelf = new Person("Johnny","Rally",22,"green");

// console.log(myFather);
// console.log(myMother);
// console.log(mySister);
// console.log(mySelf);

//Classes --> A class is a template for creating objects with shared properties and methods.
//Class & constructor (ES6+)
// class Person{
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }

// //creating instances/object of the Person class
// const person1 = new Person("Abhishek",24,"Male");
// const person2 = new Person("Shivam",20,"Male");

// //constructor Function
// function Car(brand, model, color){
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
// }

// //creating instances/object of the Car constructor 
// const car1 = new Car("Mercredes","S-Class","Blue");
// const car2 = new Car("Jaguar","XE","Black");

// //Accessing properties of the instances 
// console.log(person1.name);
// console.log(car1.model);