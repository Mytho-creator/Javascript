// ****************  For each loop  *******************

const programming = ['cpp','js','py','rb']

// programming.forEach(function (lan){
//     console.log(lan);
    
// })
// programming.forEach( (lan)=>{
//     console.log(lan);
// })

const printMe = (item)=>{
    console.log(item);   
}
// programming.forEach(printMe);

// programming.forEach( (lan,index,arr)=>{
//     console.log(lan, index, arr);
// })

const myCoading = [
    {
        programmingLanguge: "Javascript",
        programmingLangugeFileName:"js"
    },
    {
        programmingLanguge: "Python",
        programmingLangugeFileName:"py"
    },
    {
        programmingLanguge: "java",
        programmingLangugeFileName:"java"
    },
    {
        programmingLanguge: "Cplusplus",
        programmingLangugeFileName:"c++"
    }
]

myCoading.forEach((item)=>{
    console.log(item.programmingLanguge);
    
})