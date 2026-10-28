/**
 * Day 5 - Async JavaScript & Web APIs
 * Topic: 03 - Promises Fundamentals & Asynchronous Rejection
 *
 * Core Mental Model:
 * 1. A Promise is an object representing the eventual completion (or failure) of an async operation.
 * 2. States:
 *    - pending   : initial state, operation in progress
 *    - fulfilled : operation completed successfully (delivers a value)
 *    - rejected  : operation failed (delivers a reason/error)
 * 3. The executor function (resolve, reject) => { ... } runs SYNCHRONOUSLY and IMMEDIATELY.
 * 4. resolve() and reject() do NOT act like `return` - execution inside the function continues.
 * 5. Promises are IMMUTABLE once settled - the first resolve/reject wins; subsequent calls are ignored.
 * 6. Timer Trap: Unhandled `throw` inside an async callback (e.g., setTimeout) bypasses the Promise
 *    and crashes the runtime. Always use `reject()` inside async callbacks!
 */

console.log("=== Topic 03: Promises Fundamentals ===");

// -------------------------------------------------------------
// Example 1: The Executor Function Runs Synchronously
// -------------------------------------------------------------
console.log("\n--- Example 1: Synchronous Executor Execution ---");

console.log("1: Before Promise construction");

const syncExecutorDemo = new Promise((resolve, reject) => {
  // This runs immediately upon instantiation, not deferred!
  console.log("2: Inside executor function (runs immediately on call stack)");
  // Notice: Neither resolve() nor reject() is called yet
});

console.log("3: After Promise construction");
console.log("4: Promise state is pending:", syncExecutorDemo);

// -------------------------------------------------------------
// Example 2: Fulfilling a Promise & Immutability Rule
// -------------------------------------------------------------
console.log("\n--- Example 2: Fulfillment & Immutability ---");

const fulfilledDemo = new Promise((resolve, reject) => {
  console.log("A: Inside fulfilledDemo executor");

  resolve("Success: User data retrieved");

  // CRITICAL: resolve() does NOT terminate execution!
  console.log("B: Runs after resolve() because resolve is not a return statement");

  // Ignored! A Promise can only settle once.
  reject(new Error("Network failed"));
});

console.log("C: Settled fulfilledDemo:", fulfilledDemo);

// -------------------------------------------------------------
// Example 3: Synchronous Rejection
// -------------------------------------------------------------
console.log("\n--- Example 3: Synchronous Rejection ---");

const syncRejectionDemo = new Promise((resolve, reject) => {
  console.log("X: Validating input synchronously...");
  reject(new Error("Validation failed: Invalid user ID"));
});

syncRejectionDemo.catch((err) => {
  console.log("Caught synchronous rejection:", err.message);
});

// -------------------------------------------------------------
// Example 4: Asynchronous Rejection (Event Loop & Timer)
// -------------------------------------------------------------
console.log("\n--- Example 4: Asynchronous Rejection with Web API ---");

console.log("Start async request timer...");

const asyncRejectionDemo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Timer elapsed (1000ms) - pushing rejection to Microtask queue");
    reject(new Error("401 Unauthorized: Session expired"));
    console.log("Code after async reject still executes synchronously on call stack");
  }, 1000);
});

asyncRejectionDemo
  .then((data) => {
    // Skipped because the promise rejected
    console.log("This will never log:", data);
  })
  .catch((err) => {
    // Queued on the Microtask Queue and executed when call stack clears
    console.log("Caught async rejection:", err.message);
  });

// -------------------------------------------------------------
// Example 5: The 'Timer Trap' - Why `throw` Fails in Async Callbacks
// -------------------------------------------------------------
console.log("\n--- Example 5: Proper Async Error Handling (Timer Trap Safe) ---");

const safeAsyncOperation = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      // If code inside an async callback might throw an error:
      const condition = false;
      if (!condition) {
        throw new Error("Simulated unexpected database failure");
      }
      resolve("Data fetched successfully");
    } catch (error) {
      // ALWAYS catch locally and pass to reject() inside async callbacks!
      reject(error);
    }
  }, 1500);
});

safeAsyncOperation
  .then((data) => console.log("Success:", data))
  .catch((err) => console.log("Safely caught unexpected async error:", err.message));