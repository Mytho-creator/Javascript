const name = "Monika"
let age = 23;

console.log(`My name is ${name} and my age is ${age}`)  // string interpolation

const gameName = new String("Hitesh-hc")
//console.log(typeof gameName) //object

// console.log(gameName[1])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('i'))

const newString = gameName.substring(0, 4);
// console.log(newString)

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString)

const oneAnotherString = "  Monika  "
// console.log(oneAnotherString)
// console.log(oneAnotherString.trim())

const url = "https//:hitesh.com/hitesh%20chodhry"
// console.log(url.replace('%20','-'))
console.log(url.includes('sundar')) // false
console.log(url.includes('hitesh')) //true
console.log(gameName.split('-'))