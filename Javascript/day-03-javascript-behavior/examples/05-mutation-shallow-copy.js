/* Example 1 */
// const user = {
//     name: "A",
//     address: {
//         city: "Delhi"
//     }
// };

// const copy = { ...user };
// console.log(user); // { name: 'A', address: { city: 'Delhi' } }
// console.log(copy); // { name: 'A', address: { city: 'Delhi' } }
// console.log(user === copy); // false
// console.log(user.address === copy.address); // true // user.address and copy.address still reference the same nested object.
// console.log();



/* Consider the following example, in which an ingredientsList array object is created, and then an ingredientsListCopy object is created by copying that ingredientsList object. */
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy); // ["noodles",{"list":["eggs","flour","water"]}]

/* Re-assigning the value of a nested property will be visible in both objects. */
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list); // [ "rice flour", "water" ]

/* Re-assigning the value of a top-level property (the 0 index in this case) will only be visible in the changed object. */
ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
console.log(JSON.stringify(ingredientsListCopy)); // ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredientsList)); // ["noodles",{"list":["rice flour","water"]}]
