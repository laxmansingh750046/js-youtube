class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`This course was add by ${this.username}`);
    }
}

const chai = new Teacher('chai','adf@gma',123);
// console.log(chai);
// chai.addCourse();

console.log(chai instanceof User);
console.log(chai instanceof Teacher);