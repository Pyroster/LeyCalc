/*calculadora leyendas*/
const calculator = {
  displayValue: "0"
};

function updateDisplay() {
  // select the element with class of `calculator-screen`
  const display = document.querySelector(".calculator-screen");
  // update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  // Access the clicked element
  const { target } = event;

  // Check if the clicked element is a button.
  // If not, exit from the function
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("convert")) {
    leyCalc();
    return;
  }

  if (target.classList.contains("all-clear")) {
    resetCalculator();
    updateDisplay();

    return;
  }

  inputDigit(target.value);
  updateDisplay();
});

function inputDigit(digit) {
  const { displayValue } = calculator;
  // Overwrite `displayValue` if the current value is '0' otherwise append to it
  calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
}

function resetCalculator() {
  calculator.displayValue = "0";
  console.log(calculator);
  allclear();
}

function leyCalc() {
  var num1 = document.getElementById("calc-screen").value;
  if (num1 == 0) {
    num1 = document.getElementById("perc-display").innerHTML = -25;
  } else if (51 <= num1 && num1 <= 90) {
    num1 = document.getElementById("perc-display").innerHTML = (
      50 +
      (num1 - 50) / 2
    );
  } else if (91 <= num1 && num1 <= 150) {
    num1 = document.getElementById("perc-display").innerHTML = (
      70 +
      (num1 - 90) / 3
    ).toFixed(1);
  } else if (151 <= num1 && num1 <= 190) {
    num1 = document.getElementById("perc-display").innerHTML = (
      90 +
      (num1 - 150) / 4
    ).toFixed(1);
  } else if (191 <= num1) {
    num1 = document.getElementById("perc-display").innerHTML = (
      190 +
      (num1 - 190) / 5
    ).toFixed(1);
  } else {
    num1 = document.getElementById("perc-display").innerHTML = num1;
  }
  return;
}
function allclear() {
  document.getElementById("perc-display").innerHTML = "0";
}
