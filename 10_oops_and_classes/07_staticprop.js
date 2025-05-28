class User{
    constructor(username){
        this.username = username;
    }
    logIn(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}
 
const laxman = new User('laxman');
// console.log(laxman.createId());

class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('iphone','i@.com');
iphone.logIn();
console.log(iphone);