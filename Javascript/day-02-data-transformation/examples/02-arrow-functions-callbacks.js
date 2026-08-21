/* ### Function Parameters */
// **Default parameters** : In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value. This is exactly what default parameters do.
// function multiply(a, b = 1) {
//   return a * b;
// }

// console.log(multiply(5)); // 5
// console.log(multiply(7,3)); //21


// **Rest parameters**
/* The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

In the following example, the function multiply uses rest parameters to collect arguments from the second one to the end. The function then multiplies these by the first argument.
*/
// function multiply(num1, ...args) {
//   return args.map(e => num1 * e);
// }
// console.log(multiply(5, 2,3,4)); // [10, 15, 20]


// ### Arrow functions
/* An arrow function expression (also called a fat arrow to distinguish from a hypothetical -> syntax in future JavaScript) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. 
Arrow functions are always anonymous.
*/

// ** Shorter functions **
// const arr = ['aloaa', 'fdd', 'gammaclaire', 'chammeme'];

// const l1 = arr.map(function(e) {
//   return e.length;
// });
// console.log(l1); // [ 5, 3, 11, 8 ]

// const l2 = arr.map(e => e.length);
// console.log(l2); // [ 5, 3, 11, 8 ]

// ** Callback function **
// A callback is simply a function passed to another function so that the receiving function can execute it
// 1. Pass a function as an argument

// function add(a,b) {
//   return a + b;
// }

// function applyOperation(a,b,op) {
//   return op(a,b);
// };

// console.log(applyOperation(3,7,add)); // 10 // add is the callback function
// console.log(applyOperation(3,7,add())); // Calls the function immediately—incorrect here

// 2. Anonymous Callback
// function applyOperation(a,b,op) {
//   return op(a,b);
// };

// const ans = applyOperation(5, 6, function(a,b) {
//   return a * b;
// });
// console.log(ans);

// 3. Arrow callback
// function applyOperation(a,b,op) {
//   return op(a,b);
// };
// const a = applyOperation(5,4, (a,b) => a ** b);
// console.log(a);