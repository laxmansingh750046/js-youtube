// .call() is a method in JavaScript that invokes a function and 
//     explicitly sets the value of 'this' inside that function.
function setUsername(username){
    this.username = username;
}

function createUser(username,email,password){
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const user = new createUser('Demon','fb@dkf.com',12345);
console.log(user);