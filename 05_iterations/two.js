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

// // console.log(map);

// for(key_value of map)console.log(key_value);
// for([key,value]of map)console.log(key,"_",value)



//objecs

const myObj = {
    "game1":"NFS",
    "game2":"Spiderman"
}

for(key of myObj)console.log(key)   //object r not iterable in this way