// Selecting elements
document.querySelector('.heading'); // Selects the first element with class 'heading'
document.querySelector('#title');   // Selects element with ID 'title'
document.querySelector('input[type="password"]'); // Selects the password input

// Selecting a UL and changing first LI inside it
let myul = document.querySelector('ul');
const turngreen = myul.querySelector('li');
turngreen.style.backgroundColor = 'green';
turngreen.style.padding = '15px';

// Getting and changing text
const greentxt = turngreen.innerText;
console.log(greentxt); // Logs current text
turngreen.innerText = "hello dear"; // Changes text

// Changing color of all <li> using NodeList (querySelectorAll)
const lists = document.querySelectorAll('li');
lists.forEach((x) => x.style.color = 'orange');

// Changing color of all <li> using HTMLCollection (getElementsByClassName)
const list = document.getElementsByClassName('list-item');
const listArray = Array.from(list);
listArray.forEach((l) => l.style.color = 'red');

// Styling all <h2> tags
const h2s = document.querySelectorAll('h2');
h2s.forEach((h) => {
    h.style.color = 'orange';
    h.style.backgroundColor = 'green';
    h.style.padding = '10px';
});

// ✅ Concepts You Practiced
// querySelector() and querySelectorAll()

// getElementById() and getElementsByClassName()

// Changing style dynamically with .style

// Changing and reading text with .innerText

// Converting HTMLCollection to Array with Array.from()

// Practicing in live browser (including Wikipedia's console)