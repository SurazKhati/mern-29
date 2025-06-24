// function continue
// function types
// const foo = (a,b) => {
//     console.log(a+b);
//     return " I am from foo"
// }

// const bar = (data) =>{
//     console.log("From Argus:", data) 
//     return " I am from bar"

// }


// // const result = foo()

// const result = foo(10, 20)
// const result1 = bar(result)
// console.log(result1)

// nan vaneko euta condition ho , it is also a type of data type

// yo pani run hunxa tala mathi daubai xuttai xuttai hun 

// const foo = ( a, b = 0) => {
//     return(a + b);  // 30
// }

// const result = foo(10)
// foo(10,20)  //30

// foo(10,20,30) //30


// yo pani xuttai run hunxa hai 

// const foo = (a, b = 0) => {
//     return(a+b);

// }
// const doubleValue =(x) => {
//     return (x*2)
// }

// const result = foo(10)
// const doubleVal = doubleValue(result);

// yo paxi promise block ko kura aaunxa 


// mathi ko code lai pani naya tarkia ley use garna khojeko xa 



//CLOUSER FUNCTION

// const foo = (a, b = 0) => {
    
//    // login
//    // db query

//    // clouser function
//    const doubleValue =(x) => {
//     return (x*2)
// }
// return doubleValue;         //30
// }
// const bar = () => {
//     // double Value
//     result()
// }


// const result = foo(10)
// console.log(result(10))



// CALLBACK FUNCTION( VERY VERY VERY IMPORTANT )
// function as a argument of another function is called callback function
const foo = (cb) => {
    console.log("I am in foo")
    cb()
}
const bar = () => {
    console.log(" I am in bar ")
}

foo(() => {
    console.log("I am here")
})
foo(bar)


// call back ko function ma 2 ota argument pauna sakinxa 

const users = [
    {name: "User one", email: "one@user.com", address: "Kathmandu"},
    {name: "Two one", email: "one@user.com", address: "Lalitpur"},
    {name: "Threeone", email: "one@user.com", address: "Bhaktapur"},
]

// yo loop pani use hunxa 
// for(let user of usera){
//     console.log("Your name: ", user.name)
//     console.log("Your email: ", user.email)
//     console.log("Your address: ", user.address)
// }

users.map((user, index) => {
console.log("Your name: ", user.name)
console.log("Your email: ", user.email)
console.log("Your address: ", user.address)
//return

})

const allNames = users.map((usr, ind) => usr.name)
console.log(allNames)
// result ==> [undefined, undefined, undefined ]

//hw
// Create an array of some random numbers
// return the value of that array multipled by 2 in another array using map function
// [1,2,3] ===> [2,4,6]

const numb = [1,2,3,4]
const doubleNumb = numb.map((num1) => num1 * 2)
console.log(doubleNumb)

// get only even numbers to evenNumb variable and print result using map function
const numbs = [1,2,3,4,5,6,7,8,9,10]
let evenNumb = [] 
numbs.map((a) =>{ 
    if(a %2 == 0) {
        evenNumb.push(a)
   }
})
console.log(evenNumb)


// get only even numbers from numbs to evenNumb variable and print it

let sum = 0;
numbs.forEach((x) => {
    sum += x;
})
//console.log(x);

console.log("---------------------------")
let sum1 = numbs.reduce((sum1, curr) => {
    sum1 += curr;
    return sum1
}, 0)
console.log(sum1)


// map , filter , reduce and foreach yo 4 ota ma use hunxa 