let score1= "33",score2="33abc"
console.log(typeof score1);  //string
console.log(typeof(score1)); //string

let valueInNumber1 = Number(score1) 
let valueInNumber2 = Number(score2)  
/*
 -Number()
  "33abc" to Nan ( not a number)
  null to 0
  Undefined to Nan
  true/false to 1/0
*/
console.log(typeof(valueInNumber1)); //number
console.log(typeof(valueInNumber2)); //number
console.log(valueInNumber2)   //NaN = ( not a number)


let isLoggedIn = -1
let booleanIsLoggedIn = Boolean(isLoggedIn)
/*
   0, emptystring => false
   any negative or positive number => true
   non empty string => true
*/
console.log(booleanIsLoggedIn) //true


let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber); //33
console.log(typeof stringSomeNumber); //string

// ************** Operations ***************
console.log("************** Operations ***************")

let value=3
let negValue = -value
console.log(negValue) //-3
console.log(2**3)  //8
console.log(4/2)  //2
console.log(4%3) //remainder  1
console.log(2+2+"3") //43
console.log("2"+2+2) //222 