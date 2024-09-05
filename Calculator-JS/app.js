let displayValue = '0';
let firstOperand = null;
let secondOperand = false;
let currentOperator = null;


function updateDisplay() {
  const display = document.getElementById('calc-display');
  display.value = displayValue;
}

function appendNumber(number) {
  if (secondOperand === true) {
    displayValue = number;
    secondOperand = false;
  } else {
    displayValue = displayValue === '0' ? number : displayValue + number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperator !== null && !secondOperand) {
    calculateResult();
  }
  firstOperand = parseFloat(displayValue);
  currentOperator = operator;
  secondOperand = true;
}

function calculateResult() {
  let result;
  const second = parseFloat(displayValue);

  if (currentOperator === '+') {
    result = firstOperand + second;
  } else if (currentOperator === '-') {
    result = firstOperand - second;
  } else if (currentOperator === '*') {
    result = firstOperand * second;
  } else if (currentOperator === '/') {
    result = firstOperand / second;
  } else if (currentOperator === '%') {
    result = firstOperand % second;
  }

  displayValue = result.toString();
  currentOperator = null;
  firstOperand = null;
  secondOperand = false;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  currentOperator = null;
  firstOperand = null;
  secondOperand = false;
  updateDisplay();
}



function toggleSign() {
  displayValue = (parseFloat(displayValue) * -1).toString();
  updateDisplay();
}