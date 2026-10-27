
console.log("Program start");

// A normal function
function greet() {
    console.log("Hello from greet()");
}

// A function that accepts another function as an argument
function executeCallback(callback) {
    console.log("Inside executeCallback()");

    // Calling the callback directly is synchronous
    callback();

    console.log("Finished executeCallback()");
}

// A callback function
function showMessage() {
    console.log("This is a callback!");
}

// Example 1: Normal function call
console.log("\n--- Example 1: Normal Function ---");
greet();

// Example 2: Synchronous callback
console.log("\n--- Example 2: Synchronous Callback ---");
executeCallback(showMessage);

// Example 3: Asynchronous callback using setTimeout
console.log("\n--- Example 3: Asynchronous Callback ---");

setTimeout(function () {
    console.log("This callback runs later!");
}, 0);

console.log("This runs before the timer callback");

// Example 4: Call stack and nested function calls
console.log("\n--- Example 4: Function Execution ---");

function first() {
    console.log("Inside first() - Start");
    second();
    console.log("Inside first() - End");
}

function second() {
    console.log("Inside second()");
}

first();

console.log("Program end");










