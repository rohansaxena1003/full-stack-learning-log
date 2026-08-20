// ex 1
// let shoppingDone = false;
// let childAllowance;
// if (shoppingDone === true) {
//   childAllowance = 10;
// } else {
//   childAllowance = 5;
// }
// console.log(childAllowance);

// ex 2
// let cheese = "Cheddar";
// if (cheese) {
//   console.log("Yay! Cheese available for making cheese on toast.");
// } else {
//   console.log("No cheese on toast for you today.");
// }

//ex3
// if (choice === "sunny") {
//   if (temperature < 86) {
//     para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
//   } else if (temperature >= 86) {
//     para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
//   }
// }

// ex4
// let isBirthday = true;
// const greeting = isBirthday
//   ? "Happy birthday Mrs. Smith — we hope you have a great day!"
//   : "Good morning Mrs. Smith.";
// console.log(greeting);


/* Practice Questions */
// Q1. Name JavaScript’s common falsy values.

// "0" // truthy
// "" // falsy
// [] // truthy
// {} // truthy
// null // falsy
// undefined // falsy

// Q3. 
console.log(0 || 10); // 10
console.log(0 ?? 10); // 0
console.log(null ?? 10); // 10
console.log("" || "Guest"); // "Guest"
console.log("" ?? "Guest"); // ""

// Q5.
// const age = 18;

// if (age < 13) {
//   console.log("Child");
// } else if (age < 18) {
//   console.log("Teenager");
// } else {
//   console.log("Adult"); // this will execute
// }

// Q6. When is a ternary appropriate? Rewrite this using a ternary:
// let result;
// if (score >= 60) {
//   result = "Pass";
// } else {
//   result = "Fail";
// }

// let score = 50;
// result =  score>=60 ? "Pass" : "Fail";
// console.log(score);


/* Q8. Write getTicketPrice(age) using these rules:
Under 13: child price
From 13 through 59: adult price
60 or older: senior price
Negative age: invalid input

Test the boundary ages 12, 13, 59 and 60. */

function getTicketPrice(age) {
  console.log(age);
  if (age<0){
    console.log("invalid input");
  } else if( age < 13) {
    console.log("child price");
  } else if (age < 60) {
    console.log("adult price");
  } else if(age >= 60) {
    console.log("senior price");
  }
}

getTicketPrice(12);
getTicketPrice(13);
getTicketPrice(59);
getTicketPrice(59.3);
getTicketPrice(60);
getTicketPrice(0);
getTicketPrice(-12);