// const test = {
//   prop: 42,
//   func() {
//     return this.prop;
//   },
// };

// console.log(test.func()); // 42


/* f the function call is in the form obj.f(), then this refers to obj. For example: */

// function getThis() {
//   return this;
// }

// const obj1 = { name: "obj1" };
// const obj2 = { name: "obj2" };

// obj1.getThis = getThis;
// obj2.getThis = getThis;

// console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
// console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }



// function getThis() {
//   return this;
// }

// const obj1 = { name: "obj1" };
// const obj2 = { name: "obj2" };

// obj1.getThis = getThis;
// obj2.getThis = getThis;

// const obj3 = {
//   __proto__: obj1,
//   name: "obj3",
// };

// console.log(obj3);
// console.log(getThis); // [Function: getThis]
// // console.log(getThis()); // <ref *1> Object [global] { ... }
// console.log(obj3.getThis); // [Function: getThis]
// console.log(obj3.getThis()); // { name: 'obj3' }


/* The value of this always changes based on how a function is called, even when the function was defined on an object at creation: */
// const obj4 = {
//   name: "obj4",
//   getThis() {
//     return this;
//   },
// };

// const obj5 = { name: "obj5" };

// obj5.getThis = obj4.getThis;
// console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }




/* ### The main rule to remember is:
For normal functions, this is determined by the call site.

And:
Arrow functions do not create their own this.
*/

/* Example 1 — this in an object method */
// const user = {
//     name: "Rohan",

//     greet() {
//         console.log(this.name);
//     }
// };

// user.greet(); // Rohan

/* Example 2 — same function, different object */
// function greet() {
//     console.log(this.name);
// }

// const user1 = {
//     name: "Rohan",
//     greet
// };

// const user2 = {
//     name: "Sam",
//     greet
// };

// user1.greet(); // Rohan
// user2.greet(); // Sam

/* Example 3 — don't think this means "the object where function was written" */
// const user = {
//     name: "Rohan",

//     greet() {
//         console.log(this.name);
//     }
// };

// const anotherUser = {
//     name: "Sam"
// };

// anotherUser.greet = user.greet;
// anotherUser.greet(); // Sam


/* Example 4 — taking the method out of the object */
// const user = {
//     name: "Rohan",

//     greet() {
//         console.log(this.name);
//     }
// };

// const greetFunction = user.greet;
// console.log(user.greet); // [Function: greet]
// console.log(greetFunction); // [Function: greet]
// console.log(user.greet);
// greetFunction(); // undefined // There is no object before the dot.


/* Example 5 — regular function inside an object method */
// const user = {
//     name: "Rohan",

//     greet() {
//         function inner() {
//             console.log(this);
//         }

//         inner(); // Even though inner() is written inside greet(), it does not automatically inherit the outer method's this.
//         // console.log(this); // { name: 'Rohan', greet: [Function: greet] }
//         // console.log(user); // { name: 'Rohan', greet: [Function: greet] }
//         // console.log(user.inner()); // TypeError: user.inner is not a function
//         // this.inner(); // TypeError: this.inner is not a function 
//     },
// };

// user.greet();


/* Example 6 — arrow function inherits this ⭐ */
// const user = {
//     name: "Rohan",

//     greet() {
//         const inner = () => {
//             console.log(this.name);
//         };

//         inner();
//     }
// };

// user.greet(); // Rohan 
/* Why?
inner is an arrow function.
Arrow functions don't create their own this.
So inner uses the this from its surrounding greet() method. */


/* Example 7 — arrow function as an object method */
// const user = {
//     name: "Rohan",

//     greet: () => { // here greet is the surrounding lexical scope, hence the arrow function's this does not refer to user object.
//         console.log(this.name);
//     }
// };

// user.greet(); // undefined
/* Why?
Because arrow functions don't get this from the object they're written inside.
They inherit this from the surrounding lexical scope. */


/* Example 8 — method with multiple properties */
// const user = {
//     firstName: "Rohan",
//     lastName: "Saxena",

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// console.log(user.getFullName()); // Rohan Saxena


/* Example 9 — nested object */
// const user = {
//     name: "Rohan",

//     address: {
//         city: "Delhi",

//         showCity() {
//             console.log(this.city);
//         }
//     }
// };

// user.address.showCity(); // Delhi  // here this refers to user.address


/* Example 10 — prove it with equality */
// const user = {
//     name: "Rohan",

//     checkThis() {
//         console.log(this === user);
//     }
// };

// user.checkThis(); // true

// const user2 = {
//     address: {
//         checkThis() {
//             console.log(this === user2.address);
//         }
//     }
// };

// user2.address.checkThis(); // true



/* The mental model I want you to use
Don't ask:
"Where was this function written?"

Ask:
"How was this function called?" */