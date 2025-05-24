const user ={
    name: "laxman",
    age: 19,
    welcome: function(){
        console.log(`welcome ${this.name}`)
        console.log(this)
    }
}

user.name = "Demon"
// user.welcome(); 
// console.log(this); // in node enviroment this refer to an empty object

// const chai = function (){
//     let username = "Demon"
//     console.log(this);  //In Normal Function this refers to the object that calls the function. that is global object
//     console.log(this.username); //undefined
// }
// chai();


// const chai = ()=>{
//     let username = "Demon"
//     console.log(this); // In Arrow Function this is lexically bound, meaning it uses this from the surrounding (parent) scope.
//     console.log(this.username); //undefined
// }

// chai();


//////  one more example for this in arrow function 
// const obj = {
//   name: "Laxman",
//   show: function () {
//     const arrow = () => {
//       console.log(this.name); // 'this' refers to obj
//     };
//     arrow();
//   },
// };
// obj.show(); // Output: Laxman








//  implicit return and explicit return ==================================================

// const addTwo = (a,b)=>{
//     return a+b;   //explicit return
// }

// u can write return in same line
// const addTwo = (a,b)=>{return a+b}
// now no need to use curly braces

// const addTwo = (a,b)=> a+b   // without curly braces no need to write return // this is implicit return
// const addTwo  = (a,b)=> (a+b)   // return only use in {} braces not even in ()
// console.log(addTwo(3,5))


// no if u want to return object implicitly  , wrap object inside simple braces
const robj =  ()=> ({username: "Demon"})
console.log(robj()); //{ username: 'Demon' }