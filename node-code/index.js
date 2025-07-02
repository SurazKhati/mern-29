// file handling
// importing a global package

const fs =  require("node:fs/promises");
const { execPath } = require("node:process");

// read system
//file => user.jason
const users = [
    {
        name: "Suraz Khati",
        email: "suraz@gmail.com",
        address: "Kathmandu"
    },
    {
        name: "John",
        email: "john@gmail.com",
        address: "Lalitpur"
    }
]

// create file
// exists open, create open

const file ="./user.jason";

const JsonStr = JSON.stringify(users)
//core
// fs.open(file, "w", (err, fd) =>{
//     if(err){
//         console.log("File cannot be opened")
//     } else {
//         //write
//         fs.write(fd, JsonStr, (error, byteWritten, str) => {
//             if(error){
//                 console.log("Error while writing file.", error);
//             }else{
//                 console.log("You have written:", byteWritten)
//                 fs.close(fd)

//             }
//         })
//     }
// })
// fs.writeFile(file, JsonStr, (err) => {
//      if(err){
//         console.log("Error while writing in file");
//      }else{
//         console.log("file write success")
//      }
// })


// operate
// close

fs.writeFile(file, JsonStr)
.then((success) => {
    console.log("file written successfully")
    console.log(success)
})
.catch((error) => {
    console.log("Error while eriting in file.")
    console.log(error)
})

fs.readFile(file, {encoding: "utf8"})
.then((data) => {
    console.log("data", data)
    const jsonToObj = JSON.parse(data)
    console.log(jsonToObj)
})
.catch((exception) => {
    console.log("Cannot read,", exception)
})