//callback function -->
//when function accepts another function 
//as a argument or paramter and call the another 
//function is known as callback function

// function printName(cb){
//     console.log('Shikhar')
//     // calling received callback function
//     cb()
// }
// function printLastName(){
//     console.log('Singh')
// }
// function printAge(){
//     console.log(24)
// }
// printName(printLastName) 
// printName(printAge) 

//Output 
//Shikhar 
//Singh 
//Shikar
//24

//We can also pass multiple callback 
//functions
// function printName(cb1, cb2, cb3){
//     console.log('Shikhar')
//     cb1()
//     cb2()
//     cb3()
// }
// function printLastName(){
//     console.log('Singh')
// }
// function printAge(){
//     console.log(24)
// }
// function printAddress(){
//     console.log('Delhi')
// }
// printName(printLastName, printAge, printAddress) 

//Shikar
//Singh
//24
//Delhi

// Higher Order Function --> Higher-order functions are those functions
// where the function is passed as an argument. 
//This means that which callback function is passed as an argument.
//With using higher order function --> code is cleaner, more readable and follows DRY 
// let myRadiusArray = [2, 3, 4, 5, 8]

// function circleArea(radius){
//     return Math.PI * radius * radius;
// }
// function circleCircumference(radius){
//     return 2 * Math.PI * radius;
// }
// function circleDiameter(radius){
//     return 2 * radius;
// }
// function calculateArea(radiusArr, logic){
//     let result = []
//     for(let i = 0 ; i < radiusArr.length ; i ++ ){
//         result.push(logic(radiusArr[i]))
//     }
//     return result
// }
// let finalAreas = calculateArea(myRadiusArray, circleArea)
// console.log('This is area array => ', finalAreas)
// let finalCircumferences = calculateArea(myRadiusArray, circleCircumference)
// console.log('This is Circumference array =>', finalCircumferences)
// let finalDiameter = calculateArea(myRadiusArray,  circleDiameter)
// console.log('This is Diameter array =>', finalDiameters)



//Array Methods(Map, Filter, Reduce, etc) --> ! Important

//arr - is a Data Structure, two or more types of primitive data types store

// arr - never manipulate or change your orginal array.

//Match IND vs Pak per over mein kitne ka run rate
// let arr = [27,32,48,49,1];
// let runRate1 = [];

// //JD code
// for(let i=0; i<arr.length; i++){
//     runRate1[i] = arr[i]/6;
// }
// console.log(runRate1);

// //SD code
// let runRate2 = arr.map((run)=> run/6);
// console.log(runRate2);

// //Total kitne run score
// let Total = 0;
// for(let i=0; i<arr.length; i++){
//     Total += arr[i];
// }

// //orginal pe arr pe manipulation
// console.log(Total);


//Problem Statement 
//USD TO INR --> 1$ = 80rs , 5$= 450rs, 10$ = 800rs
//INR TO USD --> 80rs/80rs = 1$, 450rs/80rs = 5$, 800rs/80rs = 10$

// const transactions = [1000,3000,4000,2000,-898,3800,-4500];
// const inrToUsd = 80;
// //map() --> 
// //callback function on arr,
// //then also iterate on that 
// //and push it to the new array
// //curr element, index, arr to return value
// let conversionToDollars = transactions.map(function(amount){
//     return amount/inrToUsd;
// })

// console.log(conversionToDollars);

//Problem Statement 
//Sqaure each element inside of it 
let matrics = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let ans = matrics.map((arr)=>arr.map((i)=>i*i));
console.log(ans);