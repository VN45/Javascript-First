//  const tinderUser = new Object()


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

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{} optional parameter

const obj3 = {...obj1, ...obj2}           //we use spread
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "vishal@gmail.com"
    },
    {
        id: 1,
        email: "vishal@gmail.com"
    },
    {
        id: 1,
        email: "vishal@gmail.com"
    },
    {
        id: 1,
        email: "vishal@gmail.com"
    },
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "vishal"
}

// course.courseInstructor ----second method to print courseInsturctor

const {courseInstructor: instructor} = course
// console.log(courseInstructor)
// console.log(instructor);

// const navbar = ({company}) => {
//curly braces are used to destrucruing
// }
// navbar(company = "hitesh")

// {
//     "name": "vishal",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


