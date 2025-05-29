function User(email, password){
    this.email = email;
    let _password = password;

    Object.defineProperty(this, 'password',{
        get: function(){
            return _password.toUpperCase();
        },
        set: function(value){
            _password=value.toUpperCase();
        }
    });
}

const laxman = new User('laxm@com', 'abc');

console.log(laxman.password); // "ABC"
laxman.password = 'def';
console.log(laxman.password); // "DEF"
console.log(laxman._password); // undefined