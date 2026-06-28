
function sayMyName(){
    console.log("M");
     console.log("O");
      console.log("N");
       console.log("I");
        console.log("K");
         console.log("A");
    
}

// sayMyName();

// function sumOfTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }
//  const result = sumOfTwoNumbers(8, 9)

function sumOfTwoNumbers(num1, num2){
    let result = num1+num2;
    return result;
 }
// console.log(result);
// console.log(sumOfTwoNumbers(7,4))

function isLoggedIn(userName){
    if(!userName){
        console.log("Please enter your name...");
        return;
    }
    return `${userName} logged in`
}

// console.log(isLoggedIn("Monika"));
// console.log(isLoggedIn("ooPs"));

function addInCart(... num1){
    return num1;
}
// console.log(addInCart(200, 300, 500, 800,1000));

const user1 = {
    username:"hitesh",
    price:199
}
const user2 = {
    username:"Monika",
    price:1999
}
const user3 = {
    username:"Abhi",
    price:100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user2)
// handleObject(user1)
// handleObject(user3)
// handleObject({
//     username:"Vishal",
//     price: 299
// })

const myNewArray = [100,200,300,400]

function getElementOfArray(getArray){
    return getArray[1];
}

console.log(getElementOfArray(myNewArray));



