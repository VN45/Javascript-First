//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0, 23); //moths start from 0 = jan
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("02-11-2025")
//  console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDay());


// console.log(`${newDate.getDay()} and the time`)

newDate.toLocaleString('default', {
    weekday: "long",

})













