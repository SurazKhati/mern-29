// operation perform garnako lagi cahine
/**
 * a. arithmetic operators
 *  +, - ,* 
 * b.increment and decrement
 * ++,--
 * c. Comparison Operator
 * <>,<=,>=, ==, !==
 * d. Asssingment Operators
 * =, +=, -=
 * e.  String/Concatination Operation
 * +
 * f. Logical Operator
 *   &&, ||, !
 * g. Spread and Rest Operator
 *  ... (3 ota dot0)
 * h. Ternary/Conditional Operator
 *  - one liner if-else statement
 * (express) ? <true condition> : <false statement>
 */



// Variable declarations and arithmetic
let a = 10;
let b = 3;
const c = a + b; // 13
console.log(c); // 13

// Increment operations
a = a + 1;  // 11
a++;        // 12 (post-increment)
++a;        // 13 (pre-increment)

console.log(a++); // 13 (prints first, then a becomes 14)
console.log(a);   // 14
console.log(++a); // 15 (a becomes 15, then prints)

// Comparison operations
console.log(a > b);   // true (15 > 3)
console.log(a == b);  // false (15 == 3)
console.log(a != b);  // true

// Loose vs Strict equality
const x = "10";
const y = 10;

console.log(x == y);   // true (type coercion)
console.log(x === y);  // false (strict, different types)

// Comparisons with null
console.log(0 <= null); // true (null is converted to 0)
console.log(0 == null); // false
console.log(0 < null);  // false

// Compound assignments
a = 10;
a = a + 2;  // 12
a += 2;     // 14

// Cart total calculation
const cart = [
    { amount: 100 },
    { amount: 200 }
];
let total = 0;
total += cart[0].amount; // 100
total += cart[1].amount; // 300
console.log(total);      // 300

// String concatenation
let name = "Suraz";
let last = "Khati";

name = "Suraz" + "Khati"; // "SurazKhati"
name += last;             // "SurazKhatiKhati"

let emailMessage = "Dear " + name; // "Dear SurazKhatiKhati"
emailMessage += " HOW ARE YOU";
console.log(emailMessage); // Dear SurazKhatiKhati HOW ARE YOU

// Logical expressions
console.log((0 < null) && (0 <= null)); // false && true => false
console.log((0 < null) || (0 == null)); // false || false => false
console.log(!(0 < null));               // true (since 0 < null is false)

// Boolean expression test
console.log(x);  // "10"
console.log(!x); // false (non-empty string is truthy)

// Array spreading
const number = [1, 2, 3, 4, 5];
const numb1 = [...number, 6, 7, 8]; // [1,2,3,4,5,6,7,8]

// Object spreading
const user = {
    name: "",
    email: "",
    address: ""
};
const admin = {
    ...user,
    role: "admin",
    phone: ""
};

// const address = admin.address;
// const role = admin.role;
// const phone = admin.phone;


const {address, phone, role, ...other} = admin;  //destruct
// fullName ==> admin.name
// email ==> admin.email


console.log(admin)
// Object reference test
const user1 = {
    name: "Suraz Khati"
};

const user2 = {...user1};
user2.name = "Updated name";

console.log(user1.name); // Output: "Updated name"

let loading = true; //false

loading == true ? "Loading Icon" : "from Display"  // one liner if else statement , yo or yo 