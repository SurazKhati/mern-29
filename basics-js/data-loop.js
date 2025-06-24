const allUserObj = [
    {name: "User One", email: "one@user.com", address: "Kathmandu", phone: "1234567890"},
    {name: "User Two", address: "Lalitpur", email: "two@user.com", phone: "1234567890"},
    {email: "three@user.com", name: "User Three", address: "Lalitpur", phone: "1234567890"},
    {name: "User Four", email: "four@user.com", address: "Bhaktapur", phone: "1234567890"}
];
// let i = 0;
// console.log("_______User One____")
// console.log("Name:", allUserObj[i].name)
// console.log("Email:", allUsers[i].email)
// console.log("Address:", allUserObj[i].address)
// console.log("Phone: ", allUserObj[i].phone)
// console.log("______________________")
// i++

// console.log("_______User Two____")
// console.log("Name:", allUserObj[i].name)
// console.log("Email:", allUsers[i].email)
// console.log("Address:", allUserObj[i].address)
// console.log("Phone: ", allUserObj[i].phone)
// console.log("______________________")
// i++

// console.log("_______User Three____")
// console.log("Name:", allUserObj[i].name)
// console.log("Email:", allUsers[i].email)
// console.log("Address:", allUserObj[i].address)
// console.log("Phone: ", allUserObj[i].phone)
// console.log("______________________")
// i++

// console.log("_______User Four____")
// console.log("Name:", allUserObj[i].name)
// console.log("Email:", allUsers[i].email)
// console.log("Address:", allUserObj[i].address)
// console.log("Phone: ", allUserObj[i].phone)
// console.log("______________________")
// i++


// other way
// const size = allUserObj.length;
// for(let i = 0; i < size; i++ ){
// console.log(`____${allUserObj[i].name}____`)
// console.log("Name:", allUserObj[i].name)
// console.log("Email:", allUsers[i].email)
// console.log("Address:", allUserObj[i].address)
// console.log("Phone: ", allUserObj[i].phone)
// console.log("______________________")
// i++
// }



// for-in
//for-of

// allUserOnj[6] ={};
//for(let i in allUserobj)
// const elem = allUsersObj

for (let elem of allUserObj) {
    console.log(`____${elem.name}____`);
    console.log("Name:", elem.name);
    console.log("Email:", elem.email);
    console.log("Address:", elem.address);
    console.log("Phone:", elem.phone);
    console.log("______________________");
}


//kunai p[ani object ma kunai pani key xa ki xainna vanera check garnako lagi]
for (let elem of allUserObj) {
    if (
        elem &&
        elem.hasOwnProperty('name') &&
        elem.hasOwnProperty('email') &&
        elem.hasOwnProperty('address') &&
        elem.hasOwnProperty('phone')
      )
      {
    console.log(`____${elem.name}____`);
    console.log("Name:", elem.name);
    console.log("Email:", elem.email);
    console.log("Address:", elem.address);
    console.log("Phone:", elem.phone);
    console.log("______________________");
}
}