/* Exercise 2 — Closures */
/* Task A — Counter */

// function createCounter() {

//   let counter = 0;
//   function increment() {
//     counter++;
//     return counter;
//   }
//   return increment;
// }

// const counter = createCounter(); // reference of increment function is returned and stored in counter variable
// console.log(counter); // [Function: increment]
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// /* Task B — Independent counters 
// They must maintain separate counts.
// Explain why counter2 doesn't start at 4. */
// const counter1 = createCounter();
// const counter2 = createCounter();
// console.log(counter1()); // 1
// console.log(counter1()); // 2 
// console.log(counter1()); // 3

// console.log(counter2()); // 1



/* Task C — Multiplier factory 
This tests whether you actually understand closures beyond the counter example.*/
function createMultiplier(multiplier) {
  // return a function
  let factor = multiplier;

  return function(num) {
    return num * factor;
  }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10 // num = 5, factor = 2
console.log(triple(5)); // 15 // num = 5, factor = 3
console.log(double(triple(7))); // 42