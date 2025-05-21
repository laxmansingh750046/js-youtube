console.log("2">1)  //true
console.log("2a">1) //false
console.log("02">1) //true
console.log("0">1)  //false
console.log("0a">1) //false

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true
/*
   the reason equality and comparison operator work differently
   comparison convert null to a number, treating it as 0
   that's why in 3: null >=0 is true and in 1: null > 0 is false
*/


// ===
