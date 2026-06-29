// ****************  reduce function  *******************

const myNums = [1, 2, 3]
// const mytotal = myNums.reduce(function(accumulator, currentValue){
//     console.log(`${accumulator}, ${currentValue}`);
    
//     return accumulator + currentValue;
// }, 0)

// 0+1= 1
//  1+2=3
// 3+3 = 6

// const myTotal = myNums.reduce((accumulator, currentValue) => (accumulator + currentValue), 0)
// console.log(myTotal);

const shoppingCart = [
    {
        courseName: "web devlopment course",
        price : 3999
    },
    {
        courseName: "App devlopment course" ,
        price : 6999
    },
    {
        courseName: "data scientist course",
        price : 12999
    },
    {
        courseName: "system design course",
        price : 7999
    }
]

const totalBillToPay = shoppingCart.reduce((acc,item)=>(acc+item.price), 0)
console.log(totalBillToPay);
