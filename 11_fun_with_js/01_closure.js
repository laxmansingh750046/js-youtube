// a closure is a feature where an inner function has access to the variables of its outer function

function outer() {
    let count = 0;  // `count` is a local variable of `outer`
    function inner() {
      count++;
      console.log(count);
    }
    return inner;
  }
  
  const fn = outer(); // outer() is called, and inner() is returned
  fn(); // 1
  fn(); // 2
  fn(); // 3