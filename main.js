let button = document.querySelectorAll('button');
let view = document.querySelector('.result');


let hold = [];
let firstNumber;
let secondNumber;
let operator = '';
let clicked = false;
let viewText = view.textContent;


for (let i = 0; i < button.length; i++) {
  let currentButton = button[i].textContent;
  button[i].addEventListener("click", () => {
    if (currentButton % 1 === 0 ||
        currentButton % 1 === 1) {
        view.textContent += currentButton;
      }

    if (currentButton === 'clear'){
      hold = [];
      view.textContent = '';
      firstNumber = [];
      secondNumber = [];
    }

    if (currentButton === '+' ||
        currentButton === '-' ||
        currentButton === 'x' ||
        currentButton === '/'){
      console.log('it works');
      firstNumber = view.textContent;
      hold.push(view.textContent);
      hold.push(currentButton);
      operator = currentButton;
      clicked = true;
      view.textContent = '';

    }

    if ((firstNumber) && (clicked)) {
      console.log('this is secondNum')
    }

    if (currentButton === '=') {
      secondNumber = view.textContent;
      hold.push(view.textContent);
      equalsTo(currentButton, firstNumber, secondNumber, viewText);
    }
  });
}


function equalsTo(currentButton, firstNumber, secondNumber, viewText) {
  console.log('is this working')
  if (currentButton === '+') {
    viewText = (firstNumber + secondNumber)
  }
  if (currentButton === '-') {
    viewText = (firstNumber - secondNumber)
  }
  if (currentButton === 'x') {
    viewText = (firstNumber * secondNumber)
  }
  if (currentButton === '/') {
    viewText = (firstNumber / secondNumber)
  }
}
console.log(hold);
