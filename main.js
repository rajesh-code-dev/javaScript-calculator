const numberBtns = document.querySelectorAll(".btn-number");
const operationBtns = document.querySelectorAll(".btn-operation");
const equalsBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
let previousOperand = document.querySelector("#previous");
let currentOperand = document.querySelector("#current");

class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.isSum = false;
    this.clear();
  }
  clear() {
    this.currentOperand = 0;
    this.previousOperand = "";
    this.operation = undefined;
    this.isSum = false;
  }
  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
    if (this.currentOperand === "") {
      this.currentOperand = 0;
    }
  }
  append(num) {
    if (this.currentOperand == 0) {
      this.currentOperand = num;
      return;
    }
    if (num == "." && this.currentOperand.includes(".")) {
      return;
    }
    if (this.isSum === true) {
      return;
    }
    this.currentOperand = this.currentOperand + num;
  }
  operator(val) {
    if (
      this.currentOperand !== "" &&
      this.previousOperand !== "" &&
      this.currentOperand === "-"
    ) {
      this.operation = val;
      this.currentOperand = "";
      return;
    }
    if (this.currentOperand === "" && this.previousOperand !== "") {
      if (val === "-") {
        this.currentOperand += val;
        return;
      }
      this.operation = val;
    }
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.calculate();
    }
    if (this.currentOperand === 0) {
      return;
    }
    this.operation = val;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.isSum = false;
  }
  calculate() {
    let result;
    let previousVal = parseFloat(this.previousOperand);
    let currentVal = parseFloat(this.currentOperand);
    switch (this.operation) {
      case "+":
        result = previousVal + currentVal;
        break;
      case "-":
        result = previousVal - currentVal;
        break;
      case "*":
        result = previousVal * currentVal;
        break;
      case "/":
        result = previousVal / currentVal;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.previousOperand = "";
    this.operation = undefined;
  }
  display() {
    currentOperand.textContent = this.currentOperand;
    previousOperand.textContent =
      this.operation === undefined
        ? this.previousOperand
        : this.previousOperand + this.operation;
  }
}

const calculator = new Calculator(
  previousOperand.textContent,
  currentOperand.textContent
);

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.append(btn.textContent);
    calculator.display();
  });
});

operationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.operator(btn.textContent);
    calculator.display();
  });
});

clearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.display();
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.display();
});

equalsBtn.addEventListener("click", () => {
  calculator.calculate();
  calculator.display();
  calculator.isSum = true;
});
