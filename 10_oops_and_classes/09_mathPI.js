// console.log(Math.PI);
// Math.PI = 14;
// console.log(Math.PI);
// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

const User ={
    name: 'laxman',
    loginCount: 18,
    islogedIn: true,
    greeting: function(){
        console.log('hain ji!')
    }
}

// console.log(User);

// Object.defineProperty(User, 'name',{
//     writable:false,
//     enumerable:false,
//     configurable: false
// });

for (const [key,value] of Object.entries(User)) {
    if(typeof value !== 'function')console.log(key," ",value);
}
