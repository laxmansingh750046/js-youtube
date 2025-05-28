class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;

    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai','chai@adf',123);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//Behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}
const tea = new User('Tea','Tea@adf',456);
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`  
}

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


