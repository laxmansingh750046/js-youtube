// const user = {
//     username: 'Laxman',
//     logincount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("got user details");
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, logincount,isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this;
}

// const userone = User('laxman',12,true);
// const usertwo = User('Demon',21,true); // this will overwrite
// console.log(userone);                  // userone


const userone = new User('laxman',12,true);
const usertwo = new User('Demon',21,true); 
console.log(userone); 
console.log(usertwo);                 
// as soon as u write new key word
//1) new object created
//2) constructor func is called bec of new kword which pack all argument and return
//3) all arguments get inject inside this kword

