// console.log(new Date().toISOString())

let myDate = new Date()
console.log(typeof myDate)   //object
console.log(myDate)                 //2025-05-22T04:17:45.038Z
console.log(myDate.toDateString())      // Thu May 22 2025
console.log(myDate.toISOString());      // 2025-05-22T04:23:59.942Z
console.log(myDate.toJSON());           // 2025-05-22T04:23:59.942Z
console.log(myDate.toLocaleDateString())// 5/22/2025
console.log(myDate.toLocaleString());   // 5/22/2025, 4:23:59 AM
console.log(myDate.toLocaleTimeString()); // 4:23:59 AM
console.log(myDate.toString());         // Thu May 22 2025 04:23:59 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toTimeString());     // 04:23:59 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString())       // Thu, 22 May 2025 04:23:59 GMT

let myCreatedDate = new Date(2002, 0, 24)
console.log(myCreatedDate.toDateString())  // Thu Jan 24 2002  // months start with 0


