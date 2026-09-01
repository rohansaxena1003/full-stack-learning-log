/* The try...catch statement is comprised of a `try block` and either a `catch block`, a `finally block, or both`. 
The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. 
The code in the finally block will always be executed before control flow exits the entire construct.
*/


/* Syntax
try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}


Acceptable syntax:
try...catch
try...finally
try...catch...finally
*/


// try {
//   throw new TypeError("oops");
// } catch ({ name, message }) {
//   console.log(name); // "TypeError"
//   console.log(message); // "oops"
// }


// try {
//   throw new TypeError("oops");
// } catch (e) {
//   console.log(23);
//   console.log(e.name); // "TypeError"
//   console.log(e.message); // "oops" 
// }


// try {
//   throw "Oops; this is not an Error object";
// } catch (e) {
//   if (!(e instanceof Error)) {
//     e = new Error(e);
//   }
//   console.error(e.message);
// }



/* If you don't need the exception value, you can omit it along with the enclosing parentheses. */
// function isValidJSON(text) {
//   try {
//     console.log(JSON.parse(text));
//     return true;
//   } catch {
//     return false;
//   }
// }

// console.log(isValidJSON('{"name":"John"}')); // true
// console.log(isValidJSON("{name:John}")); // false




/* Example 1 — Basic try...catch 
Once an error occurs inside the try block, JavaScript immediately jumps to catch. */
// try {
//     console.log("Before error");

//     const user = undefined;
//     console.log(user.name);

//     console.log("After error");
// } catch (error) {
//     console.log("Something went wrong");
// }


/* Example 2 — The error object
Change the catch block: */
// try {
//   const user = undefined;
//   console.log(user.name);
// } catch (error) {
//   console.log(23, error);
// }

// try {
//     const user = undefined;
//     console.log(12, user.name);
// } catch (error) {
//     console.log(32, error.message); // 32 Cannot read properties of undefined (reading 'name')
// }



/* Example 3 — Program continues after catch ⭐ 
This is one major purpose of error handling.
Instead of the entire program stopping unexpectedly, you handle the failure and continue where appropriate.*/
// console.log("Start");

// try {
//   const user = undefined;
//   console.log(user); // undefined
//   console.log(user.name);
// } catch (error) {
//   console.log("Error handled"); // Error handled
// }

// console.log("End"); // End



/* Example 4 — catch doesn't run when there is no error 
catch is skipped because nothing failed. */

// try {
//   const a = 10;
//   const b = 20;

//   console.log(a + b); // 30
// } catch (error) {
//   console.log("Error occurred");
// }



/* Example 5 — finally always runs 
The main idea:
finally runs whether the try succeeds or fails. */
// try {
//   console.log("Trying..."); // Trying...
// } catch (error) {
//   console.log("Error");
// } finally {
//   console.log("Finished"); // Finished
// }

// try {
//   const user = undefined;
//   console.log(user.name);
// } catch (error) {
//   console.log("Caught error"); // Caught error
// } finally {
//   console.log("Finished"); // Finished
// }




/* Example 6 — Throwing your own error ⭐
Errors don't only come from JavaScript itself.
You can deliberately create one. 
Here, you decided that a negative age should be considered an error.
This is called throwing an error. */
// const age = -5;

// if (age < 0) {
//   throw new Error("Age cannot be negative");
// };



/* Example 7 — throw together with try...catch ⭐⭐⭐
This is one of the most important patterns. */
// function checkAge(age) {
//   if (age < 0) {
//     throw new Error("Age cannot be negative"); // throw an error if age is negative
//   }

//   return age; // return the age if it's valid
// }

// try {
//   const age = checkAge(-5);
//   console.log(age); // This line will not run because the error is thrown before it.
// } catch (error) {
//   console.log(error.message); // Age cannot be negative
// }




/* Example 8 — throw immediately stops the current function */
// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot divide by zero"); // throw an error if b is zero
//     }

//     console.log("Division happening"); // This line will not run if b is zero because the error is thrown before it.

//     return a / b; // return the result of the division if b is not zero
// }

// try {
//     console.log(divide(10, 0)); // This line will not run because the error is thrown before it.
// } catch (error) {
//     console.log(error.message); // Cannot divide by zero
// }


/* Example 9 — Valid input vs invalid input */
// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero"); // throw an error if b is zero
//   }

//   return a / b; // return the result of the division if b is not zero
// }

// try {
//     console.log(divide(11, 3)); // 3.6666666666666665
//     console.log(divide(10, 0)); // This line will not run because the error is thrown before it.  
// } catch (error) {
//     console.log(error.message); // Cannot divide by zero
// }




/* Example 10 — Why Error instead of throwing a string
JavaScript technically allows: 
For your current level, the rule is simple:
When manually throwing an error, use new Error("message"). 
throw "Invalid age";
throw new Error("Invalid age");
catch (error) {
    console.log(error.message);
}
*/




/* Example 11 — Practical validation
Suppose you're creating a user: */
// function createUser(name, age) {
//   if (!name) {
//     throw new Error("Name is required");
//   };

//   if (age < 0) {
//     throw new Error("Age cannot be negative");
//   };

//   return {
//     name,
//     age
//   };
// };

// try {
//   const user = createUser("Rohan", 25); // valid input
//   console.log(user); // { name: 'Rohan', age: 25 } 

//   createUser("", 25); // invalid input

// } catch (error) {
//   console.log(error.message); 

// }




/* Example 12 — Connect it to modules
Topic 7 and Topic 8 can work together. */




/* ###Small exercise
After the examples, write this yourself.
*/

function withdraw(balance, amount) {
    // your code
    if(amount < 0) {
      throw new Error("Amount must be positive");
    } else if(amount > balance) {
      throw new Error("Insufficient balance");
    } else {
      return balance - amount;
    }
}

try {
  console.log(withdraw(1000, 200)); // 800
  console.log(withdraw(1000, 1500)); // Insufficient balance
  console.log(withdraw(1000, -434)); // Amount must be positive
} catch(error) {
  console.log(error.message);
}