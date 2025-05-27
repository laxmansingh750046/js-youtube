// | Loop Type    | Use With                  |
// | ------------ | ------------------------- |
// | `.forEach()` | Array, Map, Set, NodeList |
// | Not for      | Plain Object (`{}`)       |

// .forEach() always passes 3 arguments
// | Use Case | 1st   | 2nd   | 3rd   |
// | -------- | ----- | ----- | ----- |
// | `Array`  | value | index | array |
// | `Map`    | value | key   | map   |
// | `Set`    | value | value | set   |



// let myarray = ["flash", "batman", "superman", "wonderwoman", "aquaman"];
// myarray.forEach((item)=>console.log(item));


// myarray.forEach((item, index ,array)=>{
//     console.log(item, index, array);
// });


// Create a Map with 5 key-value pairs
// const myMap = new Map();
// myMap.set('name', 'Laxman');
// myMap.set('age', 22);
// myMap.set('city', 'Dehradun');
// myMap.set('language', 'JavaScript');
// myMap.set('level', 'Intermediate');
// myMap.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

 // Array of objects
//  let heroes = [
//   { name: "Flash", power: "Super speed", universe: "DC" },
//   { name: "Batman", power: "Intelligence", universe: "DC" },
//   { name: "Superman", power: "Strength", universe: "DC" },
//   { name: "Wonder Woman", power: "Warrior skills", universe: "DC" },
//   { name: "Aquaman", power: "Underwater control", universe: "DC" }
// ];


// heroes.forEach((prop)=>{
//     console.log(prop.power);
// });