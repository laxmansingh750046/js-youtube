const mySym = Symbol("key1")

const jsUser = {                                    
    name: "Demon",
    "fullName": "Demon Bisht",
    [mySym]: "myKey1",
    age: 18,
    location: "Dehradun",
    email: "imdemon@gmail.com",
    isLogedIn: false,
    lastLoginDays: ["monday", "seturday"]
}

console.log(jsUser);
/*{
  name: 'Demon',
  fullName: 'Demon Bisht',
  age: 18,
  location: 'Dehradun',
  email: 'imdemon@gmail.com',
  isLogedIn: false,
  lastLoginDays: [ 'monday', 'seturday' ],
  [Symbol(key1)]: 'myKey1'
}*/

console.log(jsUser.email); //imdemon@gmail.com
console.log(jsUser["email"]);  //imdemon@gmail.com
// there r two ways but u can't use dot when key is string like "fullName"
console.log(jsUser[mySym]) //myKey1

// jsUser.name = "Laxman"
// console.log(jsUser.name); //Laxman
// Object.freeze(jsUser);  //now u can't chage any thing inside this object
// jsUser.name = "Demon"
// console.log(jsUser["name"]); //Laxman


jsUser.greeting = function(){
    console.log("hello users");
}
jsUser.greetingTwo = function(){
    console.log(`Hellow ${this.name}`);
}

console.log(jsUser.greeting); //[Function (anonymous)]   //here it is just returning reference to function
console.log(jsUser.greeting()); //hello users  here it is invoking function
console.log(jsUser.greetingTwo()); //Hellow Demon