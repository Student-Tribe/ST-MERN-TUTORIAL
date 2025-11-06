// Function to perform basic arithmetic operations
function calculate(num1, num2, operation) {
  // Check which operation to perform
  if (operation === "add") {
    return num1 + num2; // addition
  } 
  else if (operation === "subtract") {
    return num1 - num2; // subtraction
  } 
  else if (operation === "multiply") {
    return num1 * num2; // multiplication
  } 
  else {
    // If operation name doesn't match any valid one
    return "Invalid Operation";
  }
}

// Function calls with different operations
console.log(calculate(10, 20, "add"));       // addition → 30
console.log(calculate(20, 10, "subtract"));  // subtraction → 10
console.log(calculate(2, 10, "multiply"));   // multiplication → 20
console.log(calculate(10, 20, "agdushj"));   // invalid operation → "Invalid Operation"
