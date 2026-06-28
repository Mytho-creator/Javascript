const heroes = ["Spiderma","Batman","Hulk","Shaktiman"]
const greetings = "HelloWorld"

// for(const hero of heroes){
//     console.log(hero); 
// }
// for(const greet of greetings){
//     console.log(greet); 
// }

// MAP()

const map = new Map();
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('UK',"United Kingdom")
map.set('AU',"Austalia")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}
// for (const [key] of map) {
//     console.log(key);  
// }
// for (const [ value] of map) {
//     console.log( value);
    
// }

const myObject = {
    languge: "c++",
    course : "DSA",
    Level: "begginer"
}

// console.log(Object.keys(myObject));
// console.log(Object.entries(myObject));


// for (const [key] of myObject) {
//     console.log(key);
    
// }
