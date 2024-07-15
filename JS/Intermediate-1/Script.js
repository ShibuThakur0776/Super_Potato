//callback function -->
//when function accepts another function 
//as a argument or paramter and call the another 
//function is known as callback function

// function printName(cb){
//     console.log('Abhishek')
//     // calling received callback function
//     cb()
// }
// function printLastName(){
//     console.log('Koundal')
// }
// function printAge(){
//     console.log(26)
// }
// printName(printLastName) 
// printName(printAge) 

//Output 
//1st line call
//Abhisekh
//Koundal 
//2nd line call
//Abhisekh
//26

//We can also pass multiple callback 
//functions
// function printName(cb1, cb2, cb3){
//     console.log('Rattan')
//     cb1()
//     cb2()
//     cb3()
// }
// function printLastName(){
//     console.log('Lal')
// }
// function printAge(){
//     console.log(24)
// }
// function printAddress(){
//     console.log('Lakhnaur')
// }
// printName(printLastName, printAge, printAddress) 
//Output
//Rattan
//Lal
//24
//Lakhnaur

// Higher Order Function --> Higher-order functions are those functions
// where the function is passed as an argument. 
// This means that which callback function is passed as an argument.
// With using higher order function --> code is cleaner, more readable and follows DRY 
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
//        result.push(logic(radiusArr[i]))
//     }
//     return result
// }
// let finalAreas = calculateArea(myRadiusArray, circleArea)
// console.log('This is area array => ', finalAreas)
// let finalCircumferences = calculateArea(myRadiusArray, circleCircumference)
// console.log('This is Circumference array =>', finalCircumferences)
// let finalDiameters = calculateArea(myRadiusArray,  circleDiameter)
// console.log('This is Diameter array =>', finalDiameters)



// Array Methods(Map, Filter, Reduce, etc) --> ! Important

// arr - is a Data Structure, two or more types of primitive data types store

//  arr - never manipulate or change your orginal array.
//Map --> method in JS which is used to iterate or perform operation 
//on the element of the array and returning new result array as a output 
//Match IND vs Pak per over mein kitne ka run rate
let arr = [27,32,48,49,1];
// let runRate1 = [];

//JD code
// for(let i=0; i<arr.length; i++){
//     runRate1[i] = arr[i]/6;
// }
// console.log(runRate1);

//SD code
// let runRate2 = arr.map((run)=> run/6);
// console.log(runRate2);

//Total kitne run score
let Total = 0;
for(let i=0; i<arr.length; i++){
    Total += arr[i];
}

//orginal pe arr pe manipulation
console.log(Total);


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
// let matrics = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// let ans = matrics.map((arr)=>arr.map((i)=>i*i));
// console.log(ans);

//filter --> like map but appy some condition on the elements of array.
//output--> true/false
// let myArr = [1,2,5,7,8,2,6,9,13,17];

// let evenArr = myArr.filter(function(num){
//     return num%2 == 1;
// })

// console.log(evenArr);

//whether the isPrime number or not
//Approach firstly find num factor == 2, arr = then fiter those element out   
//boolean[0,1,1,0,0,0,0,0,0,1]
// let primeNumber = [1,2,7,4,8,9,10,18,20,13];
// let isPrime =[];
// for(let i=0;i<primeNumber.length;i++){
//     let num = primeNumber[i], count =0;
//     for(let j=1;j<=num;j++){
//         if(num%j==0){
//             count = count+1;
//         }
//     }
//     if(count==2){
//         isPrime[i] = true;
//     }else{
//         isPrime[i] = false;
//     }
// }

// let primeNumber = [1,2,7,4,8,9,10,18,20,13];
// let isPrime = [];
// primeNumber.map((num,i,)=>{
//     let count =0;
//     for(let j=1; j<=num; j++){
//         if(num%j==0){
//             count = count+1;
//         }
//     }
//     if(count==2) isPrime[i]=1;
//     else isPrime[i]=0;
//     return isPrime;
// });
// console.log(primeNumber);
// console.log(isPrime);

// let ans = primeNumber.filter((ele,i)=>{
//     return (isPrime[i]==1);
// });
// console.log(ans);


//Reduce --> Reduce array into one value.
//Output --> Single value return.

// let arr = [1,2,3,4,5];
// let totalSum = arr.reduce(function(acc,num){
//     acc = acc + num;
//     console.log(acc);
//     return acc;
// },0)




