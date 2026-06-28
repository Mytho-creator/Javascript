// for in loop

const languge = {
   js:"javascript",
   cpp: "C++",
   Rb : "Ruby",
   swift: "Swift" 
}

// for (const key in languge) {
// console.log(key); 
// }
// for (const key in languge) {
// console.log(languge[key]); 
// }
// for (const key in languge) {
// console.log(`${key} : ${languge[key]}`); 
// }

const programming = ['cpp','js','py','rb']

for (const key in programming) {
   console.log(key);    
}
for (const key in programming) {
   console.log(programming[key]);    
}