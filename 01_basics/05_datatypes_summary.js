// Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
// const bigNum = 123n

// Reference (non primitive)
// : Arrays, Objects, function

const heroArray = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name:"laxman",
    age:22,
}

const myFunction = function(){
    console.log("Hell0 world!")
}
console.table([typeof heroArray, typeof myObj, typeof myFunction])

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Object  =>  object
       Function  =>  function
    */

//  https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myName = "demon"
let name1= myName;
// in primitive only copy of data is assigne to new variable "name1"

let objOne ={
    email: "demon@gmail.com",
    upi: "user@ybl"
}
let objTwo = objOne
// reference of objOne is assigne to objTwo, hence if we make some change in any one both values will change