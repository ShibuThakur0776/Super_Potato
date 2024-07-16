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

//Class --> blueprint & no memory is taken by the class
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// //Prototype Method 
// greet(){
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// }
// //Static Method
// static compareAges(person1, person2){
//     if(person1.age > person2.age){
//         return `${person1.name} is older than ${person2.name}.`;
//     }else if(person1.age < person2.age){
//         return `${person2.name} is older than ${person1.name}.`;
//     }else{
//         return `${person1.name} and ${person2.name} are the same age`;
//     }
// }
// }

// //object/instance is created using new keyword
// const abhishekObj = new Person("Abhishek",24);
// abhishekObj.greet();
// const shivamObj = new Person("Shivam",20);
// shivamObj.greet();

// console.log(Person.compareAges(abhishekObj,shivamObj));

//Inheritance in JS
// Parent class (Superclass)
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
  
//   // Child class (Subclass)
//   class Student extends Person {
//     constructor(name, age, grade) {
//       super(name, age); // Call the parent class constructor
//       this.grade = grade;
//     }
  
//     study() {
//       console.log(`${this.name} is studying hard for their exams.`);
//     }
//   }
  
//   // Creating instances of the subclasses
//   const person = new Person("Rattan", 30);
//   const student = new Student("Abhishek", 28, "12th");
  
//   // Using inherited methods and subclass-specific methods
//   person.greet();    // Output: Hello, my name is Rattan and I am 30 years old.
//   student.greet();   // Output: Hello, my name is Abhishek and I am 28 years old.
//   student.study();   // Output: Abhishek is studying hard for their exams.

//Super Keyword
// Parent class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Subclass: Student
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); // Call parent class's constructor using super()
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name} is studying.`);
    }
  }
  
  // Subclass: Teacher
  class Teacher extends Person {
    constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
    }
  
    teach() {
      console.log(`${this.name} is teaching ${this.subject}.`);
    }
  }
  
  // Creating instances
  const person = new Person("Rattan", 24);
  const student = new Student("Abhishek", 24, "12th");
  const teacher = new Teacher("Shivam", 20, "Javascript");
  
  // Using methods and properties
  person.introduce(); // Output: Hello, my name is Rattan and I am 24 years old.
  
  student.introduce(); // Output: Hello, my name is Abhishek and I am 24 years old.
  student.study();     // Output: Abhishek is studying.
  
   teacher.introduce(); // Output: Hello, my name is Shivam and I am 20 years old.
   teacher.teach();     // Output: Shivam is teaching Javascript.