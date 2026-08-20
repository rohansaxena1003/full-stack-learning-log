### const vs let
A variable declared with const can't be changed once assigned.
The variable has to be initialized at the time of declaration.
Both these conditions are not their with let.

Both let and const have local scope.
If a variable will remain unchanged, use const else use let.

### Primitive types
Number, string, boolean, symbol, null etc.


### Parameters vs arguments
> Function argument and parameters
 `Parameters are the variables listed in a function definition, while arguments are the values passed to the function to represent the parameters when the function is called.`
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

### Strict versus loose equality
The essential rule is:

=== compares value and type without coercion.
== may convert the operands before comparing them.
Prefer === and !== in application code.

### Implicit coercion
The important behaviour is:

With a string, + commonly performs concatenation.
-, *, and / attempt to convert strings into numbers.
This automatic conversion is called implicit coercion.


### Explicit conversion
<!-- const priceInput = "500";
const quantityInput = "2";

const price = Number(priceInput);
const quantity = Number(quantityInput);

console.log(typeof priceInput);
console.log(typeof price);
console.log(price * quantity); -->
This is explicit coercion, because you deliberately request the conversion.


# Number.isNaN
<!-- const result = Number("hello");

console.log(result);
console.log(Number.isNaN(result)); -->
Number("hello") produces NaN. Use Number.isNaN() to detect it.