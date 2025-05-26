const clock = document.getElementById('clock');
let date = new Date();
console.log(date.toLocaleTimeString());

const intrvId = setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  if (clock) {
    clock.textContent = date.toLocaleTimeString();
  }
}, 1000);

// setTimeout(() => clearInterval(intrvId), 10000);    // remove comments to stop timer
