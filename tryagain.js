let button = document.querySelectorAll('button');
let view = document.querySelector('.result');

let equation = [];

numberFunc = function(number) {
  equation.push(number);
  view.textContent += number
  console.log(equation);
}


operatorFunc = function(operator) {
  view.textContent += operator;
  equation.push(operator);
}


equalsTo = function() {
  let eq = equation.join('');
  let result = eval(eq);
  console.log(result);
  view.textContent = result;
}
