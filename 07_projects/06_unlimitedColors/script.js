function randomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[parseInt(Math.random() * 100) % 16];
    }
    return color;
  }
  let intervalId;
  const msg = document.getElementById('msg');
  
  function changeColor() {
    msg.textContent += 'HAPPY DIWALI';
    intervalId = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 200);
  }
  
  document.getElementById('start').addEventListener('click', (e) => {
    if (!intervalId) changeColor();
    e.stopPropagation();
  });
  
  document.getElementById('stop').addEventListener('click', (e) => {
    msg.textContent = '';
    clearInterval(intervalId);
    intervalId = null;
    e.stopPropagation();
  });
  