/* Exercise 3 — References, Mutation and Shallow Copy */ 
/* Task A — Shared reference 
Create another variable that refers to the same object.
Change score through the second variable.
Prove that user1.score also changes.
*/
// const user1 = {
//     name: "Rohan",
//     score: 10
// };

// const user2 = user1;
// user2.score = 77;
// console.log(user1.score); // 77 // the score changes because user2 refers to user1 object


/* Task B — Shallow copy
Now create a real shallow copy using spread.
Change a top-level property in the copy.
Prove that the original does not change.
*/

// const user1 = {
//   name: 'Rohan',
//   score: 44,
// }

// const user2 = {...user1};
// user2.name = 'gdgfdg';
// console.log(user1.name); // Rohan
// console.log(user2.name); // gdgfdg


/* Task C — Nested shallow-copy trap 
Make a shallow copy.
Then modify:
copy.address.city
Prove that the original is affected too.
*/
// const user1 = {
//   name: 'Rohan',
//   score: 87,
//   address: {
//     city: "Delhi",
//     district: 'Rohini'
//   },
// };

// const copy = {...user1};
// copy.address.city = 'Bengaluru';

// console.log(user1.address);// { city: 'Bengaluru, district: 'Rohini' }
// console.log(copy.address); // { city: 'Bengaluru, district: 'Rohini' }


/* Task D — Fix the nested update
Create a new object where:
name stays the same
address.city changes
address.pin remains same
original user remains unchanged
Do it using nested spread syntax.
*/
// const user1 = {
//   name: "Rohan",
//   address: {
//     city: 'Delhi',
//     district: 'North-West',
//     pin: 119977,
//   },
// };

// const copy = {
//   ...user1,
//   address: {
//     ...user1.address, // not address use user.address
//     city: 'Bombay',
//   },
// };

// console.log(user1); // { name: 'Rohan', address: { city: 'Delhi', district: 'North-West', pin: 119977 } };
// console.log(copy); // { name: 'Rohan', address: { city: 'Bombay', district: 'North-West', pin: 119977 } };



/* Task E — Arrays
Use:
const numbers = [1, 2, 3];
Make a shallow copy and modify only the copy.
Then repeat using:
const matrix = [
    [1, 2],
    [3, 4]
];
and demonstrate why nested arrays can still be shared. */

const numbers = [1, 2, 3];
const copy = [...numbers];
copy.push(88);
console.log(numbers); // [ 1, 2, 3 ]
console.log(copy); // [ 1, 2, 3, 88 ]

const matrix = [
  [1, 2],
  [3, 4]
];

const copy2 = [...matrix];
copy2.push(43); // only added to copy2 array
copy2[0].pop(); // change done in both matrix and copy2 array
console.log(matrix); // [ [ 1 ], [ 3, 4 ] ]
console.log(copy2); // [ [ 1 ], [ 3, 4 ], 43 ]