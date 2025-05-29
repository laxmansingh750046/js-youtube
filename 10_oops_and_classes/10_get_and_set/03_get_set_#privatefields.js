class User{
    #password
    constructor(name, password){
        this.name = name;
        this.#password = password;
    }

    get password(){
        return this.#password.toUpperCase();
    }

    set password(value){
        this.#password = value;
    }
}

const laxman = new User("laxm@com", "abc");

console.log(laxman.password); // "ABC"

laxman.password = "def";
console.log(laxman.password); // "DEF"

// console.log(laxman.#password);
         // ❌ SyntaxError: Private field '#password' must be declared in an enclosing class



//will '#' this create new property '#password' or 'password' or both ?
/*
It creates only a private field named #password — not password.
When you define a getter or setter for password (without #),
 you create a public accessor for #password.*/