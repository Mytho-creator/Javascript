const myNums = [1, 2, 3, 4, 5, 6]

// const newNums = myNums.map((num)=>(num+10))
// console.log(newNums)

// const newNums = []
// for (let num of myNums) {
//     num = num + 10
//     newNums.push(num)    
// }

//  myNums.forEach((num) => {
//     console.log(num+10);
//  })

let newNums = myNums
                    .map((num) => (num*10))
                    .map((num) => (num+1))
                    .filter((num) => (num > 30))

console.log(newNums);

