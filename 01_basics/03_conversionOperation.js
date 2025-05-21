let score1= "33",score2="33abc"
console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)  
/*
 -Number()
  "33abc" to Nan ( not a number)
  null to 0
  Undefined to Nan
  true/false to 1/0
*/
console.log(typeof(valueInNumber1));
console.log(typeof(valueInNumber2));
console.log(valueInNumber2)   //NaN = ( not a number)


let isLoggedIn = -1
let booleanIsLoggedIn = Boolean(isLoggedIn)
/*
   0, emptystring => false
   any negative or positive number => true
   not empty string => true
*/
console.log(booleanIsLoggedIn)


let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);

// ************** Operations ***************
console.log("************** Operations ***************")

let value=3
let negValue = -value
console.log(negValue)
console.log(2**3)
console.log(4/2)
console.log(4%3) //remainder
console.log(2+2+"3")
console.log("2"+2+2)