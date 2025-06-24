console.log("I am here")
document.write("<h1>Hello World</h1>")
// window

// debugger;
/// 
document.getElementById('first').innerHTML = "Update the value"
document.querySelector('#first').innerHTML = "I am from query selector"


// time events
// setTimeout(() => {
//     console.log("I am one time caller")
// }, 1000);   // if any code block has to execute after sometime 
// const interval = setInterval(() => {
//     console.log("I am inside interval")
// }, 1000);  // if any function has to be called on a specified interval of time 
// clearInterval(interval)
// clearInterval();    // to unset/destory the value/variable/resource created from setInterval
// clearTimeout()

setInterval(() => {
    const today = new Date();   // ISO format date
    const hour = today.getHours()
    const minute = today.getMinutes()
    const second = today.getSeconds()

    document.getElementById('clock').innerHTML = hour+":"+minute+":"+second
}, 1000)

let counter = 0
const increaseCounter = () => {
    counter++;
    document.querySelector("#counter").innerHTML = counter;
}



window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector("#firstbtn");
    const btn2 = document.getElementById('secondbtn')


    // document.getElementById('#firstbtn').addEventListener()

    console.log(btn)
    btn.addEventListener("click", (e) => {
        counter++
        console.log(e)
        document.getElementById('counter').innerHTML = counter
    })
})