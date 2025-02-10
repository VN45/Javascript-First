// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol ('123')

// console.log(id === anotherId);

// const bigNumber = 345435346635345263634n



//Reference(Non primitive)
//Arrays, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
}

// console.log(typeof outsideTemp);


// ++++++++++++++++++++++++++++++++++++++++++++++++++=

// Stack (Primitive[copy]), Heap(Non-Primitive[reference])

let myYoutubename = "vishalnagashankar2944";

let anothername = myYoutubename;
anothername = "shyamnarayan";

// console.log(myYoutubename)
// console.log(anothername)


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "ram@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);