const score= 400.1234
console.log(score) //400
console.log(typeof score) //number

const balance = new Number(100.1234)
console.log(balance)  //[Number: 100]
console.log(typeof balance) // object

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //100.12

const n1 = 1123.8696
console.table([n1.toPrecision(3), n1.toPrecision(4), n1.toPrecision(4)]);/*
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ '1.12e+3' │
│ 1       │ '1124'    │
│ 2       │ '1124'    │
└─────────┴───────────┘*/