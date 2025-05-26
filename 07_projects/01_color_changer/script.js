const buttons = document.body.querySelectorAll('.button');
const validColors = ['grey', 'white', 'blue', 'yellow'];
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (validColors.includes(e.target.id))
      document.body.style.backgroundColor = e.target.id;
  });
});
