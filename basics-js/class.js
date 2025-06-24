class User {
    // data variables
    name;
    email;
    address;

    constructor(_name, _email, _address){
        this.name = _name;
        this.email = _email;
        this.address = _address;
    }
    setName(_name) {
        this.name = _name;
    }

    setEmail = function(_email) {
        this.email = _email;
    }

    setAddress = (_address) => {
        this.address = _address;
    }
}

const userObj = new User("Suraz Khati","suraz@gmail.com", "Kathmandu");
// userObj.setName("Suraz Khati");
// userObj.setEmail("suraz@gmail.com");
// userObj.setAddress("Kathmandu");

console.log(userObj);
