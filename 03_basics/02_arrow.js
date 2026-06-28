const user={
    username : "Monika",
    age:23,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to this website`);
        console.log( this);
        
    }
}
// user.welcomeMessage()
// user.username = "Chanda"
// user.welcomeMessage()
//  console.log( this);

// function chai(){
//     console.log(this);
    
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai()

// const chai = ()=>{
//     console.log("Try herble tea");
//     console.log(this);  
// }
// chai()

// const addTwo = (num1, num2)=>{
//     return num1+num2
// }
// const addTwo = (num1, num2) => num1 + num2  implict return

const name = (num1, num2)=>({username:"Monika"})
console.log(name(1,3));

//console.log(addTwo(34, 78));
