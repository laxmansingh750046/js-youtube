const randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.getElementById('guessField');
const submit = document.querySelector('.form');
const startOver = document.querySelector('.resultParas');
const guessSlot = startOver.firstElementChild.firstElementChild;
const remaining = startOver.children[1].firstElementChild;
const lowOrHi = startOver.lastElementChild;

const p = document.createElement('p');
let prevGuess = [];
let numGuess = [];
let playGame = true,
  newgame = false;
console.log(randomNumber);

function restartGame(flag) {
  if (flag === 1) {
    userInput.value = 'YOU WON!';
    userInput.style.backgroundColor = 'green';
  } else {
    userInput.value = 'YOU LOOSE!';
    userInput.style.backgroundColor = 'red';
  }
  userInput.readOnly = true;
  playGame = false;
  newgame = true;
  submit.querySelector('#subt').value = 'RESTART';
  submit.querySelector('#subt').style.backgroundColor = 'red';
}

submit.addEventListener('submit', (e) => {
  if (!newgame) e.preventDefault();
  if (playGame) {
    let remain = parseInt(remaining.textContent);
    remain--;
    remaining.textContent = remain;
    let curr = parseInt(userInput.value);
    userInput.value = '';
    if (isNaN(curr) || curr <= 0 || curr > 100) {
      lowOrHi = 'Enter a valid number';
      playGame = false;
    } else if (curr === randomNumber) restartGame(1);
    else {
      if (remain === 0) restartGame(0);
      else if (curr < randomNumber) lowOrHi.textContent = 'u Gues HIGH';
      else lowOrHi.textContent = 'u GUES TOO LOW';

      if (playGame) {
        prevGuess.push(curr);
        guessSlot.textContent = prevGuess.join(', ');
      }
    }
  }
});
