// const tinderUser = new Object()
const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vishal",
            lastname: "nagashankar"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);