function createCounter(){
    let count=0;
    return {
        increment: function(){
            return ++count;
        },
        decrement: function(){
            return --count;
        },
        getCount: function(){
            return count;
        }
    }
}


const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.decrement()); // 1

// A closure is a function that remembers its lexical scope, 
// even when the function is used outside that scope.