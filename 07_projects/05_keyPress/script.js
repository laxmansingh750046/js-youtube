const key = document.querySelector('.key');
let keys = [],
  selected = false;
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'a') {
    selected = true;
    return;
  }
  if (e.key === 'Backspace') {
    if (keys.length != 0) {
      if (selected) {
        selected = false;
        keys = [];
      } else keys.pop();
    }
  } else keys.push(e.key);

  if (keys.length === 0) key.textContent = 'Press the key and watch magic';
  else key.textContent = keys.join(' ');
});
