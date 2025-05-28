 // 1 +++++++++++++++++++++++++++++++++++++++++++++++++++++++
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task,  db calls, cryptograhy, network
    setTimeout(() => {
        console.log("promise1 async task completed");
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log('Promise 1 consumed');
})


// 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("promise 2Resolved");
        resolve();
    }, 1000);
})
.then(function(){
    console.log("promise 2 consumed");
});


// 3 +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseThree = new Promise(function(res,rej){
    setTimeout(function(){
        res({username:"laxman",email:"dmon@mx.com"});
    }, 1000);
});
promiseThree.then((user)=>{
    console.log("promise 3 user: ",user);
});



// 4 +++++++++++++++++++++++++++++++++++++++++++++++++++++++
new Promise((res,rej)=>{
    setTimeout(() => {
        rej("SOME THING WENT WRONG");
    }, (1000));
})
.then((e)=>{console.log(e);})
.catch((e)=>{console.log("promise 4: ",e);})
.finally(()=>{console.log('Promise 4 either resolved or rejected')});



// 5 +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFive = new Promise((res,rej)=>{
    setTimeout(() => {
        rej("Error with js");
    }, 1000);
});

async function consumedPromise(){
    try{
        const response= await promiseFive;
        return response;
    }
    catch(error){
        console.log("promise 5",error);
    }
}

consumedPromise();


// 6 +++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function getAllUsers(){
    try{
        const respons = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await respons.json();
        console.log("promise 6 ",typeof data);
    }
    catch(error){
        console.log("Error: ",error);
    }
}
getAllUsers();



// 7 +++++++++++++++++++++++++++++++++++++++++++++++++++++++

fetch('https://api.github.com/users/laxmansingh750046')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log("promise 7: ", data);
})
.catch((error)=>{
    console.error(error);
});
