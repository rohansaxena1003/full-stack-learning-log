import { add, subtract, multiply, divide } from "./calculator.js";

console.log(add(3, -32)); // -29
console.log(subtract(43, -87)); // 130
console.log(multiply(23, 7)); // 161


try {
  console.log(divide(99, 9)); // 11
  console.log(divide(23, 0)); // throws error, control goes to catch block
  console.log(divide(43, 12)); // this doesn't get eecuted
} catch(error) {
  console.log(error.message);
}


/* Part C — main.js
Import your functions.
Test:
10 + 5
10 / 2
10 / 0
valid age
invalid age
Handle failures using:
try {
} catch (error) {
}
Print:
error.message
when something fails.
*/

import { validateAge } from "./validator.js";
try {
  console.log(validateAge(54)); // true
  console.log(validateAge(232));
} catch(e) {
  console.log(e.message); // Invalid age
}