const score= 400.1234
console.log(score) //400
console.log(typeof score) //number

const balance = new Number(100.1234)
console.log(balance)  //[Number: 100]
console.log(typeof balance) // object

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //100.12

const n1 = 1123.8696
console.table([n1.toPrecision(3), n1.toPrecision(4), n1.toPrecision(5)]);/*
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ '1.12e+3' │
│ 1       │ '1124'    │
│ 2       │ '1129'    │
└─────────┴───────────┘*/

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

const maxval = Number.MAX_VALUE;
console.log(maxval);   //1.7976931348623157e+308
console.log(Number.MIN_VALUE) //5e-324
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991


//++++++++++ MATHS +++++++++++++++++++++++++++++++++++
console.log("++++++++++++++++ Maths ++++++++++++++++")
console.log(Math)
console.log(Math.abs(-32)) //The absolute value (or modulus) | x | of a real number x is the non-negative value of x without regard to its sign
console.table([Math.round(4.4), Math.round(4.5), Math.round(4.6)]) //The value is rounded to the nearest integer.
/*┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 4      │
│ 1       │ 5      │
│ 2       │ 5      │
└─────────┴────────┘ */

console.log(Math.ceil(4.1)) // 5
console.log(Math.floor(4.9)) //4
console.log(Math.sqrt(49)) // 7

console.log(Math.min(5,2,6,7)) //2   return minimum value from given arguments
console.log(Math.min());             // returns Infinity (no arguments)

console.log(Math.max(4,3,6,11,2,21))  //21  return max value from arguments
console.log(Math.max())        // return -Infinity

console.log(Math.random())  // alway return random values in range [0,1)

// if u want value between specific range  
const minr = 10, maxr = 20
// Math.random()*(maxr-minr+1)+minr  // use floor to get integers
console.log(Math.floor(Math.random()*(maxr-minr+1))+minr)
