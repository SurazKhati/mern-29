class User {
    name;
    // constructor(){

    //     console.log("I am in User Class")
    // }
}

class Admin extends User {
    constructor(){
        super() // super is a function which trigger function
        console.log("I am in admin class")
    }
    setName = () => {
        this.name = "Suraz"
    }

}

// you have a constructoe in parent but not in class
// you have constructor in child but not in parent
const adminObj = new Admin();