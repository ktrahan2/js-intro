// console.log("JavaScript Loaded!");

// // create a variable, print the variable
// // Variables

// let x = 1000
// console.log(x)

// //Javascript Objects

// const object = {
//     name: "yes",
//     age: 9001
// }

// // JS functions - not object oriented

// function addTwoNumbers(number1, number2) {
//     return number1 + number2
// }

// console.log('add two numbers', addTwoNumbers(1, 2))

// //Data types

// const boolean = false || true
// const number = 1.0 || 1
// const string = 'some text'
// const array = [2 ,3 ,4]
// const object = { key: 'value'}

// // iterators Practice

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// //all numbers plus one - map
// function numberPlusOne(numbers) {
// return numbers.map(el => el + 1);
// }

// numbers.map((number) => number + 1)

// // all numbers greater than 5 - filter
// numbers.filter(el => el > 5)

//first number whos exponent is 64 - find
const numberExponent = numbers.find(el => el**2 === 64)
console.log(numberExponent)

//sum of all numbers - reduce
const numberReduce = numbers.reduce((total, el) => total + el)
console.log(numberReduce)


const cookies = [  
    {name: 'snickerdoodle', deliciousness: 10},  
    {name: 'oatmeal', deliciousness: 15},  
    {name: 'm&m', deliciousness: 5},  
    {name: 'mint chocolate chip', deliciousness: 17}
    ]

    // All cookies' names
const allCookies = cookies.map(cookie => cookie.name)
console.log(allCookies)
    // Average deliciousness
const deliciousness = cookies.map(cookie => cookie.deliciousness)
const averageDeliciousness = deliciousness.reduce((total, rating) => total + rating)
console.log(averageDeliciousness)