// function declaration

// function square(number) {
//   return number * number;
// }


/* When you pass an object as a parameter, if the function changes the object's properties, that change is 
visible outside the function, as shown in the following example: */
// function myObj(obj) {
//   obj.brand = "Tata";
// }

// const myCar = {
//   mfg: 2018,
//   brand: "Toyota",
//   model: "Innova",
//   fuel: "Petrol" 
// };

// console.log(myCar.brand); // Toyota
// myObj(myCar);
// console.log(myCar.brand); // Tata


/* When you pass an array as a parameter, if the function changes any of the array's values, that change 
is visible outside the function, as shown in the following example: */
// function changeArr(a) {
//   a[0] = 33;
// }

// const arr = [42];
// console.log(arr[0]); // 42
// changeArr(arr);
// console.log(arr[0]); // 33

/* Function expressions */
/* While the function declaration above is syntactically a statement, functions can also be created by a function expression.
Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as: */
// const square = function(num) {
//   return num * num;

// }
// console.log(square(4)); // 16

/* However, a name can be provided with a function expression. Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces: */
// const factorial = function f(n) {
//   return n < 2 ? 1 : n * f(n-1);
// };

// console.log(factorial(4)); // 24

/* Function expressions are convenient when passing a function as an argument to another function. The following example defines a tap function that should receive a function as first argument and an array as second argument. Then, it is called with a function defined by a function expression: */
// const numbers = [0, 1, 4, 3, 8];

// function tap(f, a) {
//   arr = new Array(a.length);
//   for(let i = 0; i < a.length; i++) {
//     arr[i] = f(a[i]);
//   }
//   return arr;
// };

// const cube = tap(function (x){
//   return x * x * x;
// }, numbers);

// console.log(cube);

/* In JavaScript, a function can be defined based on a condition. For example, the following function definition defines myFunc only if num equals 0: */ 
// let myfunc;

// if( n == 0 ) {
//   myfunc = function(x) {
//     return x + 1;
//   }
// }

/* Calling Functions */ 
/* Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code). The scope of a function declaration is the function in which it is declared (or the entire program, if it is declared at the top level). 
  The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function.  */

/*  A function can call itself. For example, here is a function that computes factorials recursively:*/
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120

/* ### Function Hoisting */
// the JavaScript interpreter hoists the entire function declaration to the top of the current scope. Hence, this code runs without any error, despite the square() function being called before it's declared.
// Eg
// console.log(square(7));
// function square(x) {
//   return x*x;
// }

  /* Function hoisting only works with function declarations — not with function expressions.
  console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
  const square = function (n) {
    return n * n;
  };
  */

// const foo = function bar(c) {
// // statements go here
//   return c <= 0 ? 1 : foo(c-1) + bar(c-2); // Within the function body, you can refer to the function itself either as bar or foo, and call itself using bar() or foo().

// };

// console.log(foo(5)); // 13
// console.log(bar(5)); // ReferenceError: bar is not defined


// ** Using the arguments object **
/* The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:
where i is the ordinal number of the argument, starting at 0. So, the first argument passed to a function would be arguments[0]. The total number of arguments is indicated by arguments.length.

Using the arguments object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function. 
You can use arguments.length to determine the number of arguments actually passed to the function, and then access each argument using the arguments object.
*/

// function concatStr() { // You can pass any number of arguments to this function, and it concatenates each argument into a string "list":
//   const separator = arguments[0];
//   let result = "";
//   for(let i = 1; i < arguments.length; i++) {
//     result = result + arguments[i] + separator;
//   }
//   return result;
// }
// console.log(concatStr(" - ", "alpha", "beta", "gamkmka", "deleta")); // alpha - beta - gamkmka - deleta - 
// console.log(concatStr("; ", "elephant", "giraffe", "lion", "cheetah")); // elephant; giraffe; lion; cheetah; 
/* Note: The arguments variable is "array-like", but not an array. It is array-like in that it has a numbered index and a length property. However, it does not possess all of the array-manipulation methods. */



