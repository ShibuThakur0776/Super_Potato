//JS is lossely/Dynamic typed language -- variable declaration data type is not mandatory
//C# is tightly/Strictly typed language -- variable declaration data type is mandatory

//variable declaration
var name="rattan";

//output


//data types
//two types data types
//Primitive Data type
//  Numbers -- INT, FLOAT, DOUBLE, 0..9, 9.5, 35827328929E
var age= 3.14;
console.log("age is ",typeof age);
//  Strings -- Char , Strings
var pet = "Bisu";
console.log("pet is",typeof pet);
//  Booleans -- TRUE ,FALSE
var isMale = true;
console.warn("isMale is ",typeof isMale);
//  null -- EMPTY ,SPECIAL DATATYPES
var isNull = null;
console.error("isNull is",typeof isNull);
//  undefined -- UNKOWN, SPECIAL DATATYPES
var rattan;
console.error("rattan is",typeof rattan);


//Non Primitive Data type - mixture of two or more primitive data types

//JSON objects -- key/value pair
var person1 = {
    //key:value
    myName:"shivam",
    age:25-1,
    address:{
        city:"Nayagoan"
    }
}  

//Object Refference But shallow copy using spread operator
var person2 = {...person1};
person2.myName="rattan";
person2.address.city ="Lakhnaur";

//shallow copy only works in one level not on nested objects
//its solution is deep copy -- object copy -- string - convert it to object 

console.log(person1);
console.log(person2);
  
//person.name --> dot operator
//person['name'] --> square bracket

//arrays --- is a kind of object
let arr = [1,2,3,'A',"B",true];
console.log("arr ",typeof arr);


