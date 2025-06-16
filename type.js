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