/* Exercise 1 — Callback executor */
function add(x,y) {
  return x + y;
}

function subtract(r,s) {
  return r-s;
}

function multiply(a,b) {
  return a*b;
}

function applyOperation(a, b, operation) {
  return operation(a,b);
}

console.log(applyOperation(3,66,add)); // 69
console.log(applyOperation(3,66,subtract)); // -63
console.log(applyOperation(3,66,multiply));// 198