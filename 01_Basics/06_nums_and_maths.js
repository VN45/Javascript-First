const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length); //type become string
// console.log(balance.toFixed(1));

const otherNumber = 123.8944

// console.log(otherNumber.toPrecision(3)); //precsion round of to 124

const hundreads = 100000
// console.log(hundreads.toLocaleString('en-IN'));



//+++++++++++++++++++++++++++++ Math s++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.floor(25.65));
// console.log(Math.round(4.5));
// console.log(Math.ceil(23.33));
// console.log(Math.min(4,3,5,6));
// console.log(Math.max(2,3,5,6));

console.log(Math.random()); //0 to 1 value
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
