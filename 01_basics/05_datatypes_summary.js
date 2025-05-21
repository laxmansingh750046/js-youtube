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