// singleton object
// const apUser = new.Object() singleton
 const apUser = {} //object litrals
 apUser.name = "Monika"
 apUser.id = "123abc"
 apUser.isLoggedIn = true
// console.log(apUser);

const anotherApp = {
    email:"some@gmail.com",
    name: {
        fullname: {
            firstname:"Monika",
            lastNAme:"Sahu"
        }
    }
}

// console.log(anotherApp.name.fullname.firstname);

const obj1 = {1:"A",2:"B",3:"C"}
const obj2 = {4:"D",5:"E",6:"F"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

console.log(Object.keys(apUser));
console.log(Object.values(apUser));
console.log(Object.entries(apUser));
console.log(apUser.hasOwnProperty("username"));




