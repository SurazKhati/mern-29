// typescript
let fullName: string = " Suraz";

type UserRole = "admi"|"seller"|"customer";

interface UserObj {
    name: string,
    email: string,
    role: string,
    phone?: string
}


const user =  {
     name: "Suraz",
     email: "suraz@gmail.com",
     role: "admin"
}

user.phone = "123123"
console.log(fullName)
