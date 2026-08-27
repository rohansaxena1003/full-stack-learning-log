// for...of loop
// ex1
// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (const cat of cats) {
//   console.log(cat);
// }

// ex2
// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

// for (const cat of cats) {
//   myFavoriteCats += `${cat}, `;
// }

// console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "

// map
// function toUpper(string) {
//   return string.toUpperCase();
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const upperCats = cats.map(toUpper);

// console.log(upperCats);
// // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
// console.log(cats);
// // [ 'Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion' ]

// filter
// ex1
// function lCat(cat) {
//   return cat.startsWith("L");
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
// const lStartCats = cats.filter(lCat);

// console.log(lStartCats);

// ex2
// function catL(cat) {
//   return cat.endsWith("l");
// }
// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const lEndCats = cats.filter(catL);

// console.log(lEndCats);

// ex3: Using function expressions
// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const rlEndCats = cats.filter((cat) => cat.endsWith("r") || cat.endsWith("l"));

// console.log(rlEndCats);

// while loop
// initializer
// while (condition) {
//   // code to run

//   final-expression
// }


/* Practice Questions */
// Q1.
// for (let number = 1; number <= 5; number += 1) {
//   console.log(number);
// }

// Q2. Write a loop that calculates the total of:
const prices = [100, 250, 50, 400];


// Q8.
// for (let number = 1; number <= 5; number += 1) {
//   if (number === 3) {
//     continue; // 3 won't print
//   }

//   console.log(number);
// }
