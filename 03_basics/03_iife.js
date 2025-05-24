// Immediately Invoked Function Expressions  (IIFE)
// An IIFE is a JavaScript function that runs immediately after it's defined.
// 👉 It is mainly used to prevent pollution of the global scope by creating a private/local scope.

(function chai(){
    console.log(`DB CONNECTED`)
})();

// Wrapping the function in () converts it into a function expression.
// JavaScript requires expressions to be invoked immediately; without (), it treats it as a function declaration, which cannot be invoked directly.

(()=>console.log(`DB CONNECTED`))();

/*
(function chai(){
    console.log(`DB CONNECTED`)
})()
(()=>console.log(`DB CONNECTED`))();

//JavaScript does automatic semicolon insertion (ASI), but it doesn't always do it correctly when two IIFEs are placed back-to-back without a semicolon in between.
JavaScript thinks you're trying to call the result of the first IIFE as a function, like this 
()()()()
*/
