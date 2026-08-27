// 1. Arithmetic operators
// console.log(10 + 3); // 13
// console.log(10 - 3); // 7
// console.log(10 * 3); //30
// console.log(10 / 3); // 3.33
// console.log(10 % 3); // 1
// console.log(2 ** 3); // 8

// 2. Assignment operators
// let total = 100;

// total += 50; // 150
// total -= 20; // 130
// total *= 2; // 260
// total /= 5; // 52

// console.log(total); // 52

// 3. Comparison operators
// console.log(10 > 5); // true
// console.log(10 < 5); // false
// console.log(10 >= 10); // true
// console.log(10 <= 9); // false
// console.log(10 === 10); // true
// console.log(10 !== 5); // true


// 4. Strict versus loose equality : 
// console.log(5 === "5"); // false
// console.log(5 == "5"); // true

// console.log(0 === false); // false
// console.log(0 == false); // true

// 5. Implicit coercion
// console.log("5" + 2); // 52
// console.log("5" - 2); // 3
// console.log("5" * 2); // 10
// console.log("10" / 2); // 5
// console.log(true + 1); // 2
// console.log(false + 1); // 1

// 6. Explicit conversion
// const priceInput = "500";
// const quantityInput = "2";

// const price = Number(priceInput);
// const quantity = Number(quantityInput);

// console.log(typeof priceInput); // string
// console.log(typeof price); // number
// console.log(price * quantity); // 1000


// 7. Failed number conversion
const result = Number("hello");

console.log(result);
console.log(Number.isNaN(result)); // Number("hello") produces NaN. Use Number.isNaN() to detect it.

// Common conversion functions are:
// Number(value);
// String(value);
// Boolean(value);