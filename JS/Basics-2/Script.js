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
// let car2 = {...car1};

//object #90a42
// car2.color="white";
// car2.dealer.location ="Chandigarh";

//To avoid this problem we use deep copy 
// object --> Stringfy --> Parse -->Object

let car2 = JSON.parse(JSON.stringify(car1));
car2.color="white";
car2.dealer.location ="Chandigarh";

//Stack & Heap-- obj -->#90a42

//deep copy & shallow copy -->


