/* Part A — calculator.js
Export these functions:
add
subtract
multiply
divide
divide() must throw:
Cannot divide by zero
when the second value is 0.
Don't return an error string.
Use:
throw new Error(...)
*/

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if( b === 0 ) {
    throw new Error('Cannot divide by 0');
  } else {
    let ans = a / b;
    return ans;
  };
}

export { add, subtract, multiply, divide };