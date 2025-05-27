// for of
  // for...of works only on iterable objects, like:
  //  Arrays,Maps, Sets, Strings, NodeLists, Generators;
  // But a plain object {} is not iterable by default. 
  // It does not implement the @@iterator method (i.e., Symbol.iterator), which is required to use for...of.


// let arr = [12,21,23,32,24,42]
// let greeting = "Hello world";
// for(a of arr){
//     console.log(a);
// }

// for( g of greeting){
//     if(g==' ')continue;
//     console.log(g);
// }


//Maps:    hold key value pair and rember insertion order of keys

// const map = new Map();
// map.set('IN',"India");
// map.set('USA', 'United State of America')
// map.set('Fr',"France")

// console.log(map);

// for(key_value of map)console.log(key_value);
// for([key,value]of map)console.log(key,"_",value)
// for(key in map)console.log(key); ❌ 
      //Map is not an object in the traditional sense — it's a special data structure introduced in ES6
      //and for...in only works on plain objects (i.e., {}).

//objecs

// const myObj = {
//     "game1":"NFS",
//     "game2":"Spiderman"
// }

for(key in myObj)console.log(key)   //object r not iterable in this way
// for(key of myObj)console.log(key)  //❌object r not iterable in this way
  