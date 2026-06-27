// Object litrals

const mySym = Symbol("key2")
const jSuser={
    name:"Monika",
    age:23,
    [mySym]: "myKey2",
    email:"monika1234@google.com",
    location:"Delhi",
    isLoogedIn : true,
    lastLoggedInDays:['Monday','Wednesday']
}

// console.log(jSuser["lastLoggedIndays"]); output:undefined
//  console.log(jSuser["email"]);
 jSuser.email = "monikasahu567@proton.me"
//  Object.freeze(jSuser)
//  console.log(jSuser["email"]);
// console.log(jSuser[mySym]);
console.log(jSuser);

jSuser.greeting = function(){
    console.log("Hello,i am learning javascript");   
}

jSuser.greeting2 = function(){
    console.log(`Hello jSuser, ${this.name}`);   
}

console.log(jSuser.greeting2());

