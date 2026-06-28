const isLoogedIn = true;
const debitCard = false;
const isLoggedInFromGoogle = false;
const isLoggedInFromGmail = false;

if(isLoogedIn && debitCard){
    console.log("Allow to shopping!");
    
}else{
    console.log("Not Allow to shopping!");
}

if(isLoggedInFromGmail || isLoggedInFromGoogle){
    console.log("Allow to buy course"); 
}else{
    console.log("Don't Allow to buy course"); 
}