// Numbers
// const myInt = 5;
// const myFloat = 4.77;
// console.log(typeof myInt); // "number"
// console.log(typeof myFloat);// "number"

// tofixed()
// const lotsOfDecimal = 1.7665849587;
// console.log(lotsOfDecimal);
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// console.log(twoDecimalPlaces);

// let myNumber = "74";
// myNumber+=2;
// console.log(typeof myNumber);
// myNumber = Number(myNumber) + 400;
// console.log(myNumber);


//Operators
// console.log(10 + 7); // 17
// console.log(9 * 8); // 72
// console.log(60 % 3); // 0
// const num1 = 10;
// const num2 = 50;
// console.log(9 * num1); // 90
// console.log(num1 ** 3); // 1000
// console.log(num2 / num1); // 5
// console.log(5 + 10 * 3); // 35
// console.log((num2 % 9) * num1); // 50
// console.log(num2 + num1 / 8 + 2); // 53.25
// console.log((num2 + num1) / (8 + 2)); // 6
// console.log(2 + 3 ** 2); // 11
// console.log(4 + 2 ** 3); // 12
// console.log((4 + 2) ** 3); // 216

//Increment and Decrement Operators
// console.log();
// console.log(3++); // SyntaxError: Invalid left-hand side expression in postfix operation
// let num1 = 4;
// num1++;
// console.log(num1);


// String
const string = "The revolution will not be televised.";
console.log(string);
// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';
const badString = string;
console.log(badString);
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);
// const badQuotes = 'This is not allowed!";

const greeting3 = "Howdy";
const name3 = "Ramesh";
console.log(`${greeting3}, ${name3}`); // "Howdy, Ramesh"

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

// Quotes in strings
// const badQuotes = "She said "I think so!""; // SyntaxError: Unexpected identifier 'I'
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
console.log(goodQuotes1);
console.log(goodQuotes2);
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

// Numbers vs Strings
const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); // "Front 242"

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum); // number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2); // string