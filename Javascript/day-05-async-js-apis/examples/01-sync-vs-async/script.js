
// console.log("Start");

// const startTime = Date.now();

// while (Date.now() - startTime < 5000) {
//     // Intentionally block the main thread
// }

// console.log("Task completed");

// console.log("End");



// console.log("Start");
// setTimeout(() => {
//     console.log("Task completed");
// }, 5000);
// console.log("End");


/* Task A: Blocking execution
Write a program that:
1. Prints "A".
2. Blocks the main thread for approximately two seconds.
3. Prints "B".
4. Prints "C".
Use a while loop and Date.now() to simulate the blocking operation.
Task B: Non-blocking execution
Write another program that:
1. Prints "A".
2. Schedules a callback to print "B" after approximately two seconds.
3. Prints "C" immediately after scheduling the callback.
Use setTimeout().
*/

/* Task A */
// console.log("A");
// const startTime = Date.now();
// while (Date.now() - startTime < 2000) {
//     // Intentionally block the main thread
// }
// console.log("B");
// console.log("C");

// /* Task B */
// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 2000);
// console.log("C");

















































console.log("Program start");

// Example 1: Synchronous execution
console.log("\n--- Example 1: Synchronous Execution ---");

console.log("First");
console.log("Second");
console.log("Third");

// Example 2: Normal function calls are synchronous
console.log("\n--- Example 2: Function Calls ---");

function greet() {
    console.log("Inside greet()");
}

console.log("Before function call");
greet();
console.log("After function call");

// Example 3: Asynchronous callback with setTimeout
console.log("\n--- Example 3: setTimeout ---");

console.log("Before timer");

setTimeout(() => {
    console.log("Timer callback executed");
}, 0);

console.log("After timer");

// Example 4: Synchronous code continues while waiting
console.log("\n--- Example 4: Execution Order ---");

setTimeout(() => {
    console.log("Task scheduled with a timer");
}, 1000);

console.log("Synchronous task 1");
console.log("Synchronous task 2");
console.log("Synchronous task 3");

// Example 5: A synchronous loop delays timer callbacks
console.log("\n--- Example 5: Blocking Synchronous Code ---");

setTimeout(() => {
    console.log("Timer callback after the loop");
}, 0);

console.log("Loop starting");

for (let i = 1; i <= 3; i++) {
    console.log("Loop iteration:", i);
}

console.log("Loop finished");

console.log("Program end");
