//Conditional Statement
let age = 11
if(age<18)
{
    console.log("Child");
}else{
    console.log("Adult");
}

//deep copy & shallow copy -->

//object #90a42
let car1 = {
    companyName:"maruti",
    model:"swift",
    color:"red",
    dealer:{
        location : "Lakhnuar"
    }
}

//object reference #90a42
//Using spread opreator {...} shalow copy --> works only Single level 
let car2 = {...car1};

//object #90a42
car2.color="white";
car2.dealer.location ="Chandigarh";

//To avoid this problem we use deep copy 
// object --> Stringfy --> Parse -->Object

let car2 = JSON.parse(JSON.stringify(car1));
car2.color="white";
car2.dealer.location ="Chandigarh";

//Stack & Heap-- obj -->#90a42

//Function & Loops --->
//for loop
//infinite loop
for(i=0;i<=5;i++){
    console.log(i);
}

//output
//0 
//1
//2
//3
//4
//5

//while loop
//Hint Nested loops
let pattern = "";
for(let i=0; i<=5; i++){
let j= i;// intilization
while(j>0){// condition
    pattern+="*";
    j--;// increment/decrement condition
}
pattern+="\n";
}

// console.log(pattern);
//total number of iteration - 15
//output
//*
//**
//***
//****
//*****

//function in JS
//function header
function greet(){
    //function body
    console.log("Good Morning !");
}
const greet = ()=>console.log("Good Morning !");
greet();

//function call()
for(i=0;i<=100;i++){
    greet();
    console.log("\n");
}

//arrow function in ES6 --> same same but different
const namaste = ()=>console.log("Namaste");
namaste();

//Assignment:
//1.Write a program to check whether a string is palindrome or not.

//Input 1: madam 
//Output 1: true  

//Input 2: car 
//Output 2: false

//2.Write a program to convert lower case letter into upper case  & vice versa.
//Input 1: Hello
//Output 1: hELLO

//Input 2: WoRlD
//Output 2: wOrLd

//Write a program to print Element from a given array.

//Input: ["BMW","Mercedes","Jaguar"]
//Output: 
/*
"BMW",
"Mercedes",
"Jaguar",
*/

//Input: ["Apple","Mango","Banana"]
//Output: 
/*
"Apple",
"Mango",
"Banana",
*/



