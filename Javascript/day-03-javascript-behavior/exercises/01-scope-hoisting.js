/* Task A — Scope prediction
Without running first, predict the output: */
// let x = 10;

// function test() {
//     let x = 20;

//     if (true) {
//         let x = 30;
//         console.log(x); // 30
//     }

//     console.log(x); // 20
// }

// test();
// console.log(x); // 10
/* Output: 
30
20
10
*/


/* Task B — var vs let
Write a small example that proves:
var → function scoped
let → block scoped
*/

// function abc() {
//   var a = 10;
//   console.log(a); // 10;
// }
// console.log(a); // ReferenceError: a is not defined

// if(true() {
//   let b = 20;
//   console.log(b);// 20
//   var c = 28;
// }

// console.log(c); // 28
// console.log(b); // ReferenceError: b is not defined


/* Task C — Hoisting
Predict what happens:
*/
// console.log(a); // undefined // a is hoisted but is uninitialized at till this line
// var a = 39;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 34;


/* Task D — Function hoisting
Write a function declaration and call it before its declaration.
Confirm that it works.
That completes Exercise 1.
*/

game(); // tennis // functions are hoisted at the top of the scope
function game() { 
  console.log('tennis');
}