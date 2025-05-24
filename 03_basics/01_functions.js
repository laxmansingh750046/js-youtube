function add(num1,num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log("Both arguments must be numbers.")
    } 
   return num1+num2;
}
// console.log(2,3);

function loginUser(uname){
    if( undefined === uname) console.log("pls enter username")
    else console.log(`${uname} logged in`);
}

// loginUser("laxman") //laxman logged in
// loginUser()  //if u don't pass argument than parameter value will be undefined

function calculateCartPrice(...price){
   if(!price.every(p => typeof p === 'number')){
     console.log("All arguments must be numbers. ")
     return -1;
   }
   return price.reduce((total, curr)=> total+curr,0)
}

// console.log(calculateCartPrice(100,200,300))


const user = {
    "username": "Demon",
    "price": 9000
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}

// handleObject(user);
handleObject({
    "username": "Demoln",
    "price": 200
})