const User = {
    _email : "laxm@com",
    _password :  "abc",
    get password(){
        return this._password.toUpperCase();
    },
    set password(val){
        this._password = val.toUpperCase();
    }
}

const tea = Object.create(User);
console.log(tea.email);  //undefined
console.log(tea._email);  // laxm@com
console.log(tea.password);//ABC
console.log(tea._password);//abc
