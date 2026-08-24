/* ### forEach() */
// const arr1 = ['a', 'b', 'v'];
// arr1.forEach( e=> {
//   console.log(e);
// });

// const arr2 = arr1.forEach(e => { // forEach returns undefined and not a new array 
//   return Number(e);
// });
// console.log(arr2); // undefined
// console.log(typeof arr2); // undefined

/* Examples
Converting a for loop to forEach */
// const arr3 = ['2', 4, 5, '7'];
// const arr4 = [];
// arr3.forEach(e => {
//   arr4.push(e);
// });
// console.log(arr4); // [ '2', 4, 5, '7' ]


/* ### map() */
// const arr5 = [1,3,4,'21'];
// const arr6 = arr5.map(e => { // map method returns a new array
//   return e * e;
// });
// console.log(arr6); // [ 1, 9, 16, 441 ]

/* Using map to reformat objects in an array
The following code takes an array of objects and creates a new array containing the newly reformatted objects.
*/
// const arr7 = [
//   { key: 1, value: 10},
//   { key: 2, value: 20},
//   { key: 3, value: 30}
// ];

// const arr8 = arr7.map(({key, value}) => ({
//   [key] : value
// }));
// console.log(arr8); // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]


/* Mapped array contains undefined 
When undefined or nothing is returned, the resulting array contains undefined. 
If you want to delete the element instead, chain a filter() method, or use the flatMap() method and return an empty array to signify deletion.*/
// const arr9 = [1,3,4,5];
// const arr10 = arr9.map((e,i) => {
//   if(i < 3) {
//     return e;
//   }
// });
// console.log(arr9); // [ 1, 3, 4, 5 ]
// console.log(arr10); // [ 1, 3, 4, undefined ]
// index goes from 0, so the filteredNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]

/* Using map() on sparse arrays
A sparse array remains sparse after map(). The indices of empty slots are still empty in the returned array, and the callback function won't be called on them.
*/
// console.log([1, , 3].map((x, i) => {
//   console.log(`Value at index ${i} is ${x}`);
//   return x + 3;
// }));
/* Value at index 0 is 1
Value at index 2 is 3
[ 4, <1 empty item>, 6 ]
 */



/* ### filter(): 
The filter() method of Array instances creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function. */
// const arr11 = ['hello', 'exasperated', 'miniscule', 'ring', 'belong'];
// const arr12 = arr11.filter(e => e.length > 5);
// console.log(arr12);


/* ### Filtering invalid objects from an array of objects
The following example uses filter() to create a filtered array of all objects with non-zero, numeric id.
*/

// const arr = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   {},
//   { id: null },
//   { id: NaN },
//   { id: "undefined" },
// ];

// let invalidEntries = 0;

// function filterByID(item) {
//   if (Number.isFinite(item.id) && item.id !== 0) {
//     return true;
//   }
//   invalidEntries++;
//   return false;
// }

// const arrByID = arr.filter(filterByID);

// console.log("Filtered Array\n", arrByID);
// // Filtered Array
// // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

// console.log("Number of Invalid Entries =", invalidEntries);
// // Number of Invalid Entries = 5


/* Searching in array
The following example uses filter() to filter array content based on search criteria.
*/
// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// /**
//  * Filter array items based on search criteria (query)
//  */
// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

/* Using filter() on sparse arrays
filter() will skip empty slots. */
// console.log([1, , undefined].filter((x,i) => {
//   console.log(`Index is ${i}`);
//   return x === undefined
// })); // [undefined]
// console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]

/* Calling filter() on non-array objects
The filter() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.
*/
// const arr21 = {
//   length: 3,
//   0: "a",
//   1: "b",
//   2: "c",
//   3: "a", // ignored by filter() since length is 3
// };
// console.log(Array.prototype.filter.call(arr21, (x) => {
//   console.log(x);
//   return x <= "b"
// }));
// [ 'a', 'b' ]


/* ### find() 
The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

If you need the index of the found element in the array, use findIndex().
If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
If you need to find if any element satisfies the provided testing function, use some().
If you need to find all elements that satisfy the provided testing function, use filter().
*/
// const arr22 = [3,44,11, 5,6];
// const var22 = arr22.find(e => e > 10); 
// console.log(var22); // 44 // returns truthy value when match found
// const var23 = arr22.find(e => e > 55); 
// console.log(var23); // undefined // returns falsy value when match not found

/* Find an object in an array by one of its properties */
// const arr24 = [
//   {name: 'apples', stock: 5},
//   {name: 'mango', stock: 33},
//   {name: 'watermelon', stock: 14},
//   {name: 'banana', stock: 9}
// ];

// function isCherry(obj23) {
//   return obj23.name === 'banana';
// };

// console.log(arr24.find(isCherry));

/* Using arrow function and destructuring */
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// const result = inventory.find( ({name})  => { 
//   console.log(name);
//   return name === "cherries";
// });

// console.log(result); // { name: 'cherries', quantity: 5 }

/* Using find() on sparse arrays
Empty slots in sparse arrays are visited, and are treated the same as undefined.
*/
// Declare array with no elements at indexes 2, 3, and 4
// const array = [0, 1, , , , 5, 6];

// // Shows all indexes, not just those with assigned values
// array.find((value, index) => {
//   console.log("Visited index", index, "with value", value);
//   return false;
// });
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6

// Shows all indexes, including deleted
// array.find((value, index) => {
//   // Delete element 5 on first iteration
//   if (index === 0) {
//     console.log("Deleting array[5] with value", array[5]);
//     delete array[5];
//   }
//   // Element 5 is still visited even though deleted
//   console.log("Visited index", index, "with value", value);
//   return false;
// });
// // Deleting array[5] with value 5
// // Visited index 0 with value 0
// // Visited index 1 with value 1
// // Visited index 2 with value undefined
// // Visited index 3 with value undefined
// // Visited index 4 with value undefined
// // Visited index 5 with value undefined
// // Visited index 6 with value 6


/*Calling find() on non-array objects
The find() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.
*/
// const arrayLike = {
//   length: 3,
//   "-1": 0.1, // ignored by find() since -1 < 0
//   0: 2,
//   1: 7.3,
//   2: 4,
// };
// console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
// 7.3

/*
| Requirement | Method |
|---|---|
| Transform every element | `map()` |
| Keep matching elements | `filter()` |
| Get the first match | `find()` |
| Check whether one matches | `some()` |
| Check whether all match | `every()` |
| Produce one accumulated result | `reduce()` |
| Perform a side effect | `forEach()` |
*/