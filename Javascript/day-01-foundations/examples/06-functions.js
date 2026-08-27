// Built in browser functions
// ex1
// const myText = "I am a string";
// const newString = myText.replace("string", "sausage"); // the replace() string function takes a source string, and a target string and replaces the source string, with the target string, and returns the newly formed string
// console.log(newString); //"I am a sausage"

// //ex2
// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(", "); // the join() function takes an array, joins all the array items together into a single string, and returns this new string
// console.log(madeAString);


// Functions vs Methods
// Functions that are part of objects are called methods

//Invoking functions
// function myFunction() {
//   console.log("hello");
// }

// myFunction(); // calls the function once

// Function argument and parameters
/* Parameters are the variables listed in a function definition, while arguments are the values passed to the function to represent the parameters when the function is called. */
// const myNumber = Math.random(); // no arguments needed

// const myText = "I am a string";
// const newString = myText.replace("string", "sausage"); // 2 arguments needed


// Optional parameters
// array join() function's parameters are optional
// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString); // returns 'I love chocolate frogs'

// const madeAnotherString = myArray.join();
// console.log(madeAnotherString); // returns 'I,love,chocolate,frogs'


// Default parameters
// function hello(name = "Chris") {
//   console.log(`Hello ${name}!`);
// }

// hello("Ari"); // Hello Ari!
// hello(); // Hello Chris!


// Anonymous functions
// (function () {
//   alert("hello");
// });
/* This is called an anonymous function, because it has no name. You'll often see anonymous functions when a function expects to receive another function as an argument. In this case, an anonymous function is often passed as the argument. */

//Arrow function
// textBox.addEventListener("keydown", (event) => {
//   console.log(`You pressed "${event.key}".`);
// });

// ex2 : if your function contains only a single line that's a return statement, you can omit the braces and the return keyword, and implicitly return the expression.
// const originals = [10, 2, 3];
// const doubled = originals.map(item => item * 2);
// console.log(doubled); // [2, 4, 6]


// Function scope and conflicts
// Playing with scope
// const x = 1;

// function a() {
//   const y = 2;
//   output(y); // Value: 2
//   output(x); // Value: 1; // x is a global variable, hence it's available in every scope
//   // output(z); // error; z is not available in the scope of function a()
// }

// function b() {
//   const z = 3;
//   output(z); // Value: 3
// }

// function output(value) {
//   console.log(`Value: ${value}`);
// };

// output(x); // Value: 1
// output(y); // ReferenceError: y is not defined
// output(z); // ReferenceError: z is not defined
// a();
// b();

// if (x === 1) {
//   const c = 4;
//   let d = 5;
// }

// for (let i = 0; i <= 1; i++) {
//   const e = 6;
//   let f = 7;
// }
// output(c); // ReferenceError: c is not defined
// output(d); // ReferenceError: d is not defined
// output(e); // ReferenceError: e is not defined
// output(f); // ReferenceError: f is not defined


/* Return values */
// Return values are just what they sound like — the values that a function returns when it completes. You've already met return values several times, although you may not have thought about them explicitly.



/* Practice Questions */
// Q1.
// function greet(name) {
//   console.log(`Hello, ${name}`);
// }

// const message = greet("Rohan");
// console.log(message); // undefined

/* Q2 Rewrite this function declaration as an arrow function:
function calculateTax(amount) {
  return amount * 0.18;
} 
*/

// const amt = 13;
// const tax = amt => amt*2;
// console.log(tax(amt));

// let a = 4, b = 5;
// const add = (a, b) => a + b; // Automatically returns a + b
// console.log(add());

// Q3. Predict both results:
// function calculateTax(amount, rate = 0.18) {
//   return amount * rate;
// }

// console.log(calculateTax(1000)); // 180
// console.log(calculateTax(1000, 0.05)); //50

//Q4.  Explain local and global scope. Can the second log access subtotal?
// const taxRate = 0.18;

// function calculateFinalPrice(price) {
//   const subtotal = price;
//   return subtotal + subtotal * taxRate;
// }

// console.log(calculateFinalPrice(100)); // 118
// console.log(subtotal); // error