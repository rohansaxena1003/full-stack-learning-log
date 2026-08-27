// const buttonA = document.querySelector("#button_A");
// const headingA = document.querySelector("#heading_A");
// let count = 1;
// buttonA.onclick = () => {
//   buttonA.textContent = "Try again!";
//   headingA.textContent = `${count} clicks so far`;
//   count+=1;
// };

console.log("Hello, world!");

// let myName; // myName is declared but not initialized, so it is undefined
// let myAge;
// console.log(myName); // undefined

// scoobydoo;
// console.log(scoobydoo); // ReferenceError: scoobydoo is not defined

// myName = "Rohan";
// myAge = 25;
// console.log(myName); // Rohan
// console.log(myAge); // 25

// let myCat = "Mittens";
// myName = "Satvik";
// function logName() {
//   console.log(myName); // Rohan
// }
// logName();
// var myName; // This is a variable declaration using var, which is hoisted to the top of its scope. However, since myName was already assigned a value before this declaration, it does not affect the value of myName. The output will still be "Satvik" when logName() is called.
// This will not work on js console because it is not hoisted in the same way as in a script file.

// with var, you can redeclare the same variable multiple times without any error. However, with let and const, redeclaring a variable in the same scope will result in a syntax error.
// var myName = "Rohan"; var myName = "Satvik";

// SyntaxError: Identifier 'myName' has already been declared
// let myName = "Rohan"; let myName = "Satvik"; 

// this will work
// let myName = "Rohan";
// myName = "Satvik";

//Good variable names are descriptive and meaningful. They should convey the purpose or content of the variable. For example, instead of using a generic name like "x" or "data", use names like "userAge", "productList", or "isLoggedIn". This makes the code more readable and easier to understand for others (and for yourself in the future).
// age;
// myAge;
// init;
// initialColor;
// findOutputValue;
// audio1;
// audio2;

// Bad variable names are vague, non-descriptive, or misleading. They can make the code harder to read and understand. Examples of bad variable names include "a", "temp", "data", "foo", or "bar". These names do not provide any context about what the variable represents, which can lead to confusion and errors in the code.
// 1;
// a;
// _12;
// myage;
// MYAGE;
// var;
// Document;
// dlsldflsfsa;
// thisisareallylongvariablenamemanthatdoesnotconveyanymeaning;
// _2002herewegoagain;
// this;

//number, string, boolean, null, undefined, object, symbol
// number
// let myAge = 25;
// let fitmentFactor = 2.4728;

//string
// let hisName = "Gagan";
// let herName = 'Riya';
// let dolphinWords = "Thanks for helping my kiddos, sir!";

//boolean
// let isAlive = true;
// let isDoom = false;
// let isGreater = 5 > 7;

//null
// let myCar = null;

//undefined
// let myDog;

// //array
// let myNumbersArray = [1, 20, 30];
// let myNamesArray = ["Gagan", "Riya", "Rohan"];
// console.log(myNamesArray[0]); // Gagan
// console.log(myNumbersArray[1]); // 2

//object
// let myCar = {
//   make: "Toyota",
//   model: "HyCross",
//   year: 2026,
//   engine: "hybrid",
//   color: "white",
//   isManual: true
// };
// console.log(myCar.color); // white


//Dynamic typing in JavaScript means that the type of a variable can change at runtime. You can assign a value of one type to a variable and later assign a value of a different type to the same variable. This flexibility allows for more dynamic and adaptable code, but it also requires careful handling to avoid unexpected behavior or errors.
// let myString = "Halua";
// console.log(typeof myString); // string

// let myNumber = "500";
// console.log(typeof myNumber); // string
// myNumber = 500;
// console.log(typeof myNumber); // number

//const is a block-scoped variable that cannot be reassigned after its initial assignment. It is used to declare constants, which are values that should not change throughout the program. However, if the constant is an object or an array, its properties or elements can still be modified, but the reference to the object or array itself cannot be changed.
// let count;
// const count; // SyntaxError: Missing initializer in const declaration

// const count = 1;
// count = 2; // TypeError: Assignment to constant variable.

// const bird = {
//   species: "Parrot",
//   color: "Green",
//   canFly: true
// };
// bird.color = "Red";
// console.log(bird.color); // Red

//When to use const, let, and var in JavaScript:
// Use const when you want to declare a variable that should not be reassigned. This is useful for values that are meant to remain constant throughout the program, such as configuration settings or fixed values.
// Use let when you need a variable that can be reassigned. This is suitable for variables whose values may change over time, such as counters, flags, or user input.
// Avoid using var in modern JavaScript code. It has function scope and can lead to unexpected behavior due to hoisting. Instead, prefer let and const for block-scoped variables.



//GRAMMAR AND TYPES
//In JavaScript, grammar refers to the rules and structure of the language that dictate how code should be written and organized. It includes syntax, keywords, operators, and other elements that define the language's structure. Understanding JavaScript grammar is essential for writing valid and functional code.

//Types in JavaScript refer to the different categories of values that can be used in the language. JavaScript has several built-in types, including:
// 1. Number: Represents numeric values, both integers and floating-point numbers.
// 2. String: Represents sequences of characters enclosed in single or double quotes.
// 3. Boolean: Represents logical values, either true or false.
// 4. Null: Represents the intentional absence of any object value.
// 5. Undefined: Represents a variable that has been declared but has not been assigned a value.
// 6. Object: Represents complex data structures that can hold multiple values and properties.
// 7. Symbol: Represents unique and immutable values, often used as identifiers for object properties.

//Understanding JavaScript grammar and types is crucial for writing effective and efficient code, as it allows developers to work with different kinds of data and perform various operations on them.        

//JavaScript is case-sensitive, meaning that variable names, function names, and other identifiers must be used consistently with the same capitalization. 
// console.log(früh); // ReferenceError: früh is not defined


//Comments
// one line comment
/* this is a longer,
multi-line 
comment */

// /* You can't nest /* multi-line comments */ inside other multi-line comments. */
/* You can nest /* comments *\/ by using escape slash \, but its not recommended. */


// Declarations
// var // declares a variable, optionally initializing it to a value. It has function scope and is hoisted to the top of its scope.
// let // declares a block-scoped local variable, optionally initializing it to a value. It is not hoisted and cannot be redeclared in the same scope.
// const // declares a block-scoped variable that cannot be re-assigned after its initial assignment. It is not hoisted and cannot be redeclared in the same scope.


// Variable names
// Variable names are also called identifiers.
// Variable names can contain letters, digits, underscores, and dollar signs. They must begin with a letter, underscore, or dollar sign. Variable names are case-sensitive and cannot be reserved words in JavaScript.


// Object Destructuring
// Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way. It uses a syntax that resembles the structure of the object being destructured, making it easier to access specific properties without having to reference the object multiple times.
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30
// };
// const {lastName, firstName} = person;
// console.log(firstName); // John
// console.log(lastName); // Doe 
// the above concept became extremely popular in React and other modern JavaScript frameworks, as it allows developers to write cleaner and more maintainable code when working with complex data structures.

// let x = 44; // x is declared and initialized with the value 44
// console.log(x); // 44
// let y; // y is declared but not initialized, so it is undefined
// console.log(y); // undefined
// const x; // SyntaxError: Missing initializer in const declaration

// Variable scope
/* Variable scope refers to the accessibility of variables in different parts of a program. In JavaScript, there are three types of variable scope: global scope, function scope, and block scope.  
1. Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code, including inside functions and blocks. However, global variables can lead to naming conflicts and unintended side effects, so it's generally recommended to minimize their use.
2. Function Scope: Variables declared within a function have function scope. They can only be accessed from within that function and are not visible outside of it. This helps to encapsulate variables and prevent them from interfering with other parts of the code.
3. Block Scope: Variables declared with let or const within a block (e.g., inside an if statement or a loop) have block scope. They can only be accessed from within that block and are not visible outside of it. This allows for more fine-grained control over variable accessibility and helps to avoid naming conflicts.
Understanding variable scope is important for writing clean, maintainable code and avoiding bugs related to variable accessibility and naming conflicts. It also helps to ensure that variables are used in the appropriate context and do not interfere with other parts of the program.
*/
// if(Math.random() > 0.5) {
//   const y = 5;
//   let x;
// }
// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined

// if(true) {
//   var x = 22;
// }
// console.log(x); // 22

// Variable hoisting
/* Variable hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. This can lead to unexpected behavior if not properly understood.
For example, if you declare a variable using var, it will be hoisted to the top of its function scope, but its value will be undefined until the line where it is initialized. If you try to access the variable before its initialization, you will get undefined instead of a ReferenceError. On the other hand, variables declared with let and const are also hoisted, but they are not initialized until their declaration is evaluated, which means that accessing them before their declaration will result in a ReferenceError.
Understanding variable hoisting is important for writing clean and maintainable code, as it can help prevent bugs related to variable accessibility and initialization. It also helps to ensure that variables are used in the appropriate context and do not interfere with other parts of the program.
*/
// console.log(x==undefined); // true
// var x = 7;
// (function() {
//   console.log(x); // undefined
//   var x = 'local value';
// })();
// console.log(x); // 7


// Data structures and types
/* Boolean: Returns true or false. Used for conditional statements and logical operations.
null: A special keyword that represents a null value. Since JS is case-sensitive, NULL, nULL, Null are not same as null.
undefined: A top-level property whose value is not defined. 
Number: An integer or floating-point number. Can be positive or negative. Examples: 42, -3.14, 0.5
BigInt: An integer with arbitrary precision. Ex. 9007199254740991n
String: A sequence of characters enclosed in single or double quotes. Examples: "Hello", 'World'
Symbol: Adata type whose instances are unique and immutable. 
Object: A collection of key-value pairs. Can be used to store complex data structures. Examples: {name: "John", age: 30}, [1, 2, 3]
*/
/* Data type conversion in JavaScript refers to the process of converting a value from one data type to another. JavaScript is a dynamically typed language, which means that variables can hold values of different types and can be converted between types as needed. 
There are two types of data type conversion: implicit and explicit.
Examples of explicit conversion include:
let x = "5";
console.log(typeof x); // string
x = 10;
console.log(typeof x); // number
*/
/* Examples of implicit conversion include:
let x = "5";
let y = 10;
console.log(x + y); // "510" (string concatenation)
console.log(x * y); // 50 (number multiplication)
console.log(x - y); // -5 (number subtraction)
console.log(x / y); // 0.5 (number division)
*/
/* Converting Strings to numbers
parseInt(): Only returns the integer part of a number.  
parseFloat()
Number()
*/
// let str1 = "43.5753";
// let str2 = "43.5753abc";
// let str3 = "abc43.5753";
// console.log(parseInt(str1)); // 43
// console.log(parseFloat(str1)); // 43.5753
// console.log(Number(str1)); // 43.5753
// console.log(parseInt(str2)); // 43
// console.log(parseFloat(str2)); // 43.5753
// console.log(Number(str2)); // NaN
// console.log(parseInt(str3)); // NaN
// console.log(parseFloat(str3)); // NaN
// console.log(Number(str3)); // NaN 

/* Unary Plus (+) operator can be used to convert a string to a number. 
 It is a shorthand way of performing type conversion. When applied to a string, it attempts to convert the string to a number. If the string represents a valid numeric value, it will be converted to that number. 
 If the string cannot be converted to a number, it will result in NaN (Not-a-Number).
  */
// let str1 = "43.5753";
//  let str2 = "43.5753abc";
//   console.log(+str1); // 43.5753 
//   console.log(+str2); // NaN


//typeof operator
// console.log(typeof 42); // number
// console.log(typeof "Blubber"); // string
// console.log(typeof true); //boolean
// console.log(typeof undeclaredvariable); //undefined

// typeof 37 === "number";
// typeof 3.14 === "number";
// typeof 42 === "number";
// typeof Math.LN2 === "number";
// typeof Infinity === "number";
// typeof NaN === "number"; // Despite being "Not-A-Number"
// typeof Number("1") === "number"; //. Number tries to parse things into numbers
// typeof Number("shoe") === "number"; // inclusing values that cannot be type coerced to a number
// typeof 42n === "bigint";

//Strings
// typeof "" === "string";
// typeof "bla" === "string";
// typeof `template literal` === "string";
// typeof "1" === "string"; // a number within a string is still typeof string
// typeof typeof 1 === "string"; // typeof always returns a string
// typeof String(1) === "string"; // String converts anything into a string, safer than toString

// Booleans
// typeof true === "boolean";
// typeof false === "boolean";
// typeof Boolean(1) === "boolean"; // Boolean() will convert values based on if they are truthy or falsy
// typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
// typeof Symbol() === "symbol";
// typeof Symbol("foo") === "symbol";
// typeof Symbol.iterator === "symbol";

// Undefined
// typeof undefined === "undefined";
// typeof declaredButUndefinedVariable === "undefined";
// typeof undeclaredvariable === "undefined";

// null
// typeof null === "object"; // historical JS quirk

// using new operator
// const str = new String("String");
// typeof str; // object
// const func = new Function();
// typeof func; // "function"

//precedence of typeof
//It has higher precedence than binary operators like addition(+). Hence, paranthesis are needed
// const someData = 99;
// typeof someData + " foo"; // "number foo"
// typeof (someData + " foo"); // "string"

//Exception
// typeof document.all === "undefined"; // Although document.all is also falsy and loosely equal to undefined, it is not undefined. The case of document.all having type "undefined" is classified in the web standards as a "willful violation" of the original ECMAScript standard for web compatibility.


// Exercise 1
// const studentName = "Yamashiro Ugahi";
// const currentCourse = "JavaScript";
// let completedTopics = 0;
// const totalTopics = 5;
// const isReactReady = false;
// let currentProject = null;

// completedTopics += 1;

// console.log(`${studentName} completed ${completedTopics} topic.`);
// console.log(typeof studentName);
// console.log(typeof completedTopics);
// console.log(typeof isReactReady);
// console.log(typeof currentProject);

// Example 2
// const productName = "Hector";
// let productPrice = 30;
// let productQuantity = 2;
// let membershipStatus = true;
// let couponCode = "AH2378u";

// productQuantity++;
// console.log(`${productQuantity} units of ${productName} cost ${productPrice} Lakh`);

//Example 3
// console.log(typeof "42"); // "string"
// console.log(typeof 42); // "number"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object"
// console.log(typeof []); // "object"
// console.log(Array.isArray([])); // true
// console.log(Array.isArray({})); // false


