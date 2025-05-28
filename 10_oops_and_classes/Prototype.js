// let myhero = ['thor', 'spiderman'];
// let heropower ={
//     thor: 'hammer',
//     spiderman: 'sling',
//     getSpiderPower: function(){
//         console.log(`spidy power: ${this.spiderman}`);
//     }
// }

// Object.prototype.demon = function(){
//     console.log('Demon is every where');
// }
// heropower.demon();
// myhero.demon();



//Inheritance

// const GrandParent = {
//     makeVideo: true
// }

// const Parent ={
//     isAvailable : false
// }

// const Child ={
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: Parent // child inheriting father
// }

// Parent.__proto__ = GrandParent;


///modern syntax
//✅ Method 1:  Object.setPrototypeOf(Child,Parent);

/*
✅ Method 2: Object.create(parent)
    const child = Object.create(parent);
    child.makeAssignment = 'JS assignment';
    child.fullTime = true;
*/


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Inserting new function in String object

const newUser = "   DEMON   ";

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`trueLength: ${this.trim().length}`);
}

newUser.trueLength();
"LAxman ".trueLength();
 