// Single user details
let name_1 = "User One";
let email_1 = "one@gmail.com";
let address_1 = "Kathmandu";
let phone_1 = "+99898988989";

// Storing user details in arrays (comma separated)
let user_1 = ["User One", "one@gmail.com", "Kathmandu", "+99898988989"];
let user_2 = new Array("User One", "one@gmail.com", "Kathmandu", "+99898988989");

// Arrays store data in index-value pairs
// Each element is comma-separated
// Index always begins from 0

console.log(user_1[0]); // Output: User One
console.log(user_2[0]); // Output: User One

// Multidimensional array (array of arrays)
const allUsers = [
    ["User One", "one@gmail.com", "Kathmandu", "99999999"],
    ["User Two", "two@gmail.com", "Kathmandu", "99999998"],
    ["User Three", "three@gmail.com", "Kathmandu", "99999997"]
];

// Accessing specific data
console.log(allUsers[2][1]); // Output: three@gmail.com

// Individual user arrays (just for structure reference)
const user_3 = ["User One", "one@gmail.com", "Kathmandu", "99999999"];
const user_4 = ["Kathmandu", "one@gmail.com", "99999999", "User One"]; // different order

// Object representing a single user
let obj_1 = {
    name: "User One",
    email: "one@gmail.com",
    phone: "9999999999"
};

console.log(obj_1.name); // Output: User One

// Array of user objects (clean and correct format)
const allUsersObj = [
    {
        name: "User One",
        email: "one@gmail.com",
        address: "Kathmandu",
        phone: "99999999"
    },
    {
        name: "User Two",
        email: "two@gmail.com",
        address: "Lalitpur",
        phone: "9999909090"
    }
];

// Accessing an object's data from the array
console.log(allUsersObj[1].email); // Output: two@gmail.com
