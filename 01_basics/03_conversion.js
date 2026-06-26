// let score = 23; number
//let score = "23"  string

//let score = undefined; undefined after conversion NaN

let score = null; //  after conversion 0

// console.log(typeof score);
// console.log(typeof (score));
// let stringInNumber = Number(score);
// console.log(typeof stringInNumber);
// console.log(stringInNumber);

/* after conversion
"33" => 33
"33sdf" => NaN
true => 1 ;false => 0;
undefined => NaN
null => NaN

*/

let isLoggedIn = "";
let booleanISLoggedIn = Boolean(isLoggedIn);
// console.log(booleanISLoggedIn)

//String, number except 0 => true
// undefined, null , 0 , "" => false

let someNumber = 66;
let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)

// all datatypes convert into string