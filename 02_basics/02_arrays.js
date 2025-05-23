const marvel_heros =["thor", "ironman", "spiderman"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)   //[ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

marvel_heros.concat(dc_heros)
console.log(marvel_heros)  // [ 'thor', 'ironman', 'spiderman' ]  //conactination don't change original array
console.log(marvel_heros.concat(dc_heros))  //[ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]  // it add elements of both array in new array and return it

// const all_new_heros = [...marvel_heros, ...dc_heros] // doing same this with spread operator , where we can merge more that 2 arrays 
// console.log(all_new_heros) //  [ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]

// const nested_array = [1, 2, [3, 4, 5], [6, 7, [8, 9, 10]], 11]  // array inside array till depth 2
// const flated_array = nested_array.flat(Infinity)//  insted of infinity u can give death till which u want to flat array
// console.log(flated_array) 
 /*[
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]*/

// console.log(Array.isArray("Demon>>>"))  //false
// console.log(Array.from("Demon>>>"))  

// let s1= 100, s2=200, s3=300
// console.log(Array.of(s1, s2, s3))