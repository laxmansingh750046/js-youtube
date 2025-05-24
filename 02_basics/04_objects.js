// const tinderUser = new Object(); // singelton object

const tinderUser = {}  // non singelton object

tinderUser.id = "123abc";
tinderUser.name = "Demon";
tinderUser.isLoggedIn = false

const regularUser = {
    email: "demon@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Demon",
            lastName: "Bisht"
        }
    }
}

const obj1 = {1: 'a', 2:'b'}
const obj2 = {3: 'c', 4:'d'}
const obj3 = {5: 'e', 6:'f'}

// const obj4 = Object.assign(obj1, obj2, obj3);
// console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' },  all the elements will stored in 1st object
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj1);  //{ '1': 'a', '2': 'b' }  //now all elements will store in first empty object 
// console.log(obj4);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// without assign operator , using spread operator
const obj4 = {...obj1, ...obj2, ...obj3}  
// console.log(obj4);   //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// Generaly values from data bases comes in form of array of objects
const user = [
    {
        id: '1',
        email: "demona@gmail.com"
    },
    {
        id: '2',
        email: "2demona@gmail.com"
    },
    {
        id: '3',
        email: "3demona@gmail.com"
    },
]

// console.log(tinderUser);                 //{ id: '123abc', name: 'Demon', isLoggedIn: false }
// console.log(Object.keys(tinderUser))     //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser))   //[ '123abc', 'Demon', false ]
// console.log(Object.entries(tinderUser))  //[ [ 'id', '123abc' ], [ 'name', 'Demon' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('id'))  //true 


//============ Destructing=================================
const course = {
    coursName: "Java Script",
    price: "499",
    courseInstructor: "Demon"
}
 // Destructing of object
// const {courseInstructor} = course
// console.log(courseInstructor);  //Demon

// const {courseInstructor: instructor} = course
// console.log(instructor); //Demon


//==============Json Api intro ============================

// const course = {
//     "coursName": "Java Script",
//     "price": 499,
//     "courseInstructor": "Demon"
// }

