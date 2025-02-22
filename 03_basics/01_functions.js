

function sayMyname() {
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("H");
}

// sayMyname();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // console.log("vishal")
    return number1 + number2
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("ram"))

function calculaterCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculaterCartPrice(200,400,500,2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is 
    ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));