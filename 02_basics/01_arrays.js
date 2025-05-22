//array

const myArray = [3, true, "Demon", 12.21]
const myArray2 = new Array(1,2,3,"demon")

console.log(myArray)

myArray.push(6); // to add new element
console.log(myArray); //[ 3, true, 'Demon', 12.21, 6 ]

myArray.pop()  // remove last element

myArray.unshift(1212) // add new element in starting of array
console.log(myArray)  //[ 1212, 3, true, 'Demon', 12.21 ]
myArray.shift()   // remove first element from array
console.log(myArray) //[ 3, true, 'Demon', 12.21 ]

console.log(myArray.includes(1234))  // false
console.log(myArray.indexOf(-213))  // -1

const newArray = myArray.join() // add all element of array into a string seperated by seperators
console.log(myArray) //[ 3, true, 'Demon', 12.21 ]
console.log(newArray)  // 3,true,Demon,12.21




//  slice ,  splice
const myn1 = myArray.slice(1,3) // copy a portion from array , exluding ending index
console.log(myn1)
console.log("slice",myArray)

const myn2 = myArray.splice(1,3) // cut a portion from array , including ending index
console.log(myn2)
console.log("splice",myArray)
