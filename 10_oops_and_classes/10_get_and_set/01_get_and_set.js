class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password;
    }
    set password(value){
        this._password = value.toUpperCase();
    }
}

const laxman = new User('laxm@com', 'ab123');
console.log(laxman.password);   //AB123
console.log(laxman._password);  //AB123



/*
| Code You Write          | What Happens Internally                      |
| ----------------------- | -------------------------------------------- |
| `user.password`         | Calls the `get()` function                   |
| `user.password = 'x'`   | Calls the `set(value)` function              |
| `Object.defineProperty` | Defines `password` as a special accessor     |
| Actual value            | Stored separately (`_password`, `#password`) |
*/