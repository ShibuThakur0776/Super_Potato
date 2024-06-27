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
let myRadiusArray = [2, 3, 4, 5, 8]

function circleArea(radius){
    return Math.PI * radius * radius;
}
function circleCircumference(radius){
    return 2 * Math.PI * radius;
}
function circleDiameter(radius){
    return 2 * radius;
}
function calculateArea(radiusArr, logic){
    let result = []
    for(let i = 0 ; i < radiusArr.length ; i ++ ){
        result.push(logic(radiusArr[i]))
    }
    return result
}
let finalAreas = calculateArea(myRadiusArray, circleArea)
console.log('This is area array => ', finalAreas)
let finalCircumferences = calculateArea(myRadiusArray, circleCircumference)
console.log('This is Circumference array =>', finalCircumferences)
let finalDiameter = calculateArea(myRadiusArray,  circleDiameter)
console.log('This is Diameter array =>', finalDiameters)