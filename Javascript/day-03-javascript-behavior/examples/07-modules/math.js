/* Example 2 — Named import */

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}


/* Example 3 — Export separately */
function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}

export { multiply, divide };


/* Example 5 — Default export */
export default function greet(name) {
    return `Hello, ${name}`;
}


/* Example 8 — Both named and default export in one file */
const role = 'developer';
export {role};