const userEmail = function(){}
if(userEmail){
    console.log("got email!"); 
}else{
    console.log("don't got any email");
    
}

// falsy values : 0, -0, null, undefined, "", BigInt 0n, Nan, false
// truty values : "any value", function(){}, {}, [], true

const emptyArr = []
if(emptyArr.length === 0){
    console.log("Array is empty");
    
}
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// nullish coalescing operator ??
let val1;
// val1 = 5?? 10
// val1 = null?? 10
// val1 = undefined?? 10
// console.log(val1);

// ***********  Ternary operator  ******************
let age = 19;
age>18 ? console.log("You can vote!"):console.log("You cannot vote!");


