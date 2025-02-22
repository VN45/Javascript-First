// singleton
// Object.create

//object literals

const mySym = Symbol("key1")       ////symbol print


const JsUser = {
    name: "vishal",
    "full name" : "vishal Nagashankar",
    [mySym]: "mykey1",
    email: "nagashankar@gmail.com",
}

//object-access

// console.log(JsUser.email);
// console.log(JsUser["email"])    //string like input
// console.log(JsUser["full name"])  //only option

// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@micrisif.com"
// console.log(JsUser)


JsUser.greeting = function() {
    console.log("Hello JS user");
}

// console.log(JsUser.greeting())
// console.log(JsUser.greeting); //function (anonymous)


JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}

// console.log(JsUser.greetingTwo())
// console.log(JsUser.greetingTwo); //function (anonymous)






