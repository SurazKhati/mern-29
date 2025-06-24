
// // time sanga related function padhdai xau hami
// // event loop very imp question

// setTimeout(() =>{
//     console.log("I am first Line")
// }, 3000)

// // // console.log("I am first line")
// // console.log("I am second line")
// // console.log("i am third line")
// setTimeout(() =>{
//     console.log("I am second Line")
// }, 2000)

// setTimeout(() =>{
//     console.log("I am third Line")
// }, 2000)


//a.Function return type is promise
// b. Function async keywork declare ===> Promise return ===> Async

console.log("I am last Line")

// password
// encryption
// bcrypt algo
//.hash()

//data receive
//validate
//admin123 => encrypt => .hash("admin123") // async
// db store query
// encrypt complete


//Promise
// time consume badi garxa hola jasto lagyo vanney 
// object data type ho
// literal nepali meaning baacha kasam ho 
// kehi kura commit graxau that is a promise
// promise ki ta full fill hunxa ki xa sakinxa
// promise ki full fill ki unfill , yo 2 state ekkai patak hudainan 

const myPromise = new Promise((resolve, reject) => {
    //code block time consume
    //.....logic
    const success = false;    // false
    if(success){
        resolve("I am resolve")
    }else{
        reject("I am reject")
    }
})

myPromise
    .then(() => {
        console.log(success)
    })
    .catch((exception) => {
        console.log(exception)
    })
console.log("I am first Line")