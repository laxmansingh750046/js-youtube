const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(form.querySelector('#height').value);
  const weight = parseInt(form.querySelector('#weight').value);
  const result = form.querySelector('#results');
  console.log(height);
  if (height === '' || isNaN(height) || height <= 0) {
    // result.innerHTML = '<p style="color: red">Enter valid height.</p>';
    result.textContent = 'Enter valid height.';
    result.style.color = 'red';
  } else if (weight === '' || isNaN(weight) || weight <= 0) {
    result.textContent = 'Enter valid weight.';
    result.style.color = 'red';
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    let msg;
    if (bmi < 18.6) msg = 'u r under weight';
    else if (bmi > 24.9) msg = 'u r overweight';
    else msg = 'u r in normal range';
    result.textContent = `Your BMI is ${bmi}. ${msg}`;
  }
});
