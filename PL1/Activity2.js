
function calculator(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
  }
  

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
  

  const num1 = 10;
  const num2 = 5;
  
  console.log("Addition: 10 + 5 = " + calculator(num1, num2, add)); 
  console.log("Subtraction: 10 - 5 = " + calculator(num1, num2, subtract)); 
  console.log("Multiplication: 10 * 5 = " + calculator(num1, num2, multiply));
  console.log("Division: 10 / 5 = " + calculator(num1, num2, divide));

  if (0 === 0) {
    console.log("Division by zero: Cannot divide by zero");
  } else {
    console.log("Division: " + calculator(num1, num2, divide));
  }
  

  