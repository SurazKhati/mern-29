// jasko code block chai agadhi nai lekhxau ani execution chai paxi garxau testo lai function vanxan
// function = methods = tasks = events yo sabai eutai ho
// types of function
// builtin , custom

// string
const name = "suraz"
//name.toUpperCase()     built in function

//setTimeout(...a, 3000) certain time paxi affai execute garxa code

//window.on("DOMContentLoaded")   builtin function



//// very very import ho function bujhnu so dhyan diyara padhnu


function addNumbers(x, y) // parameter optional// camelcase use garxa function
{
    //body
    const z = x + y; //local scope
    return z; // optional
}


//another way
const addNumbers1 = function(){ // function ley pani varaible lai store garna sakxa so it is a datatype
    //body
}

//paramrters are those values which we pass to a function
//hami ley function ma value pass garda kheri accept garney varaible lai chai parameters vanxau

//arguments are those values which we sent to a function
// hamiley function ma pathaune cheez lai chai argument vanxa
// j pathayau tyo receive hune thau lai chai parameter vanxau


// most and advance way of using function
// arrow function
const addNumbers2 = () => {
    //body   // this & super vanney scope aru ma napayene vayako ley yo use hunxa
}


// A FUNCTION CAN RECEIVE ANYTHING AS INPUT & A FUNCTION CAN RETURN ANYTHING AS OUTPUT(J PANI PARXA)
const a = 10;
const b = 20;
const c = addNumbers(a, b)    //  call function ani execute hunxa ball 
console.log(c);

const d = 11;
const e = 22;
const f = a + b;
console.log(f);


// function continue on another day after git lecture
//javascript ma function ekdamai nai jaroori xa 