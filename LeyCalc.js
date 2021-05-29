const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
  	calculator.displayValue = "0."
    calculator.waitingForSecondOperand = false;
    return
  }

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);
  
  if (operator && calculator.waitingForSecondOperand)  {
    calculator.operator = nextOperator;
    return;
  }


  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

function resetCalculator() {
    pdesReset();
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

function updateDisplay() {
  // select the element with class of `calculator-screen`
  const display = document.querySelector(".scrn2");
  // update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector(".keypad");
keys.addEventListener('click', event => {
  const { target } = event;
  const { value } = target;
    if (target.classList.contains("convert")) {
    leyCalc();
    return;
  }
  if (!target.matches('button')) {
    return;
  }

  switch (value) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
      handleOperator(value);
      break;
    case '.':
      inputDecimal(value);
      break;
    case 'all-clear':
      resetCalculator();
      break;
    default:
      if (Number.isInteger(parseFloat(value))) {
        inputDigit(value);
      }
  }

  updateDisplay();
});

function pdesReset() {
  document.querySelector(".scrn").value = '0';
}

function leyCalc() {
  var num1 = document.getElementById("pdesscrn").value;
  if (num1 == 0) {
    num1 = document.querySelector(".scrn").value = -25;
  } else if (51 <= num1 && num1 <= 90) {
    num1 = document.querySelector(".scrn").value =
      50 + (num1 - 50) / 2;
  } else if (91 <= num1 && num1 <= 150) {
    num1 = document.querySelector(".scrn").value =
      70 + (num1 - 90) / 3;
  } else if (151 <= num1 && num1 <= 190) {
    num1 = document.querySelector(".scrn").value =
      90 + (num1 - 150) / 4;
  } else if (191 <= num1) {
    num1 = document.querySelector(".scrn").value =
      190 + (num1 - 190) / 5;
  } else {
    num1 = document.querySelector(".scrn").value = num1;
  }
  return;
}
