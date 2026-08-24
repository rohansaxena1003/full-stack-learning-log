/* ### some()
The some() method of Array instances returns true if it finds an element in the array that satisfies the provided testing function. 
Otherwise, it returns false. */

// const arr31 = [1,3,4,5,7];
// const func31 = e => e%2 === 0;

// console.log(arr31.some(func31));

/* Checking whether a value exists in an array
To mimic the function of the includes() method, this custom function returns true if the element exists in the array
*/
// const arr32 = ['apple', 'mango', 'peach', 'papaya', 'grapes'];
// function isFruitAvailable(val) {
//   return arr32.some(e => e === val);
// }

// console.log(isFruitAvailable('papaya')); // true
// console.log(isFruitAvailable('mango')); // true
// console.log(isFruitAvailable('manGo')); // false

/* Using some() on sparse arrays
some() will not run its predicate on empty slots. */
// console.log([1, , 3].some((x) => x === undefined)); // false
// console.log([1, , 1].some((x) => x !== 1)); // false
// console.log([1, undefined, 1].some((x) => x !== 1)); // true

/* Calling some() on non-array objects
The some() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length until they all have been accessed or callbackFn returns true.
*/
// const arrayLike = {
//   length: 3,
//   0: "a",
//   1: "b",
//   2: "c",
//   3: 3, // ignored by some() since length is 3
// };
// console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
// // false

/* every()
The every() method of Array instances returns false if it finds an element in the array that does not satisfy the provided testing function. Otherwise, it returns true.
*/
// const arr41 = [1, 44, 34,25, 14];
// const var41 = arr41.every(e => e < 50);
// console.log(var41); // true
// const var42 = arr41.every(e => e > 44);
// console.log(var42); // false

/* Testing size of all array elements
The following example tests whether all elements in the array are 10 or bigger.
*/

// function func44(e, i, arr) {
//   return e > 10;
// }

// console.log([1,3,2,22].every(func44)); // false
// console.log([1,3,2,3,1].every(func44)); // false
// console.log([11, 44, 34, 43].every(func44)); // true
// console.log([1,3,2,4].some(func44)); // false
// console.log([3,3,1,22,2].some(func44)); // true

/* Testing size of all array elements
The following example tests whether all elements in the array are 10 or bigger. */

// const func51 = (arr51, arr52) => { // return true if arr51 is a subset of array 52
//   return arr51.every(e => arr52.includes(e));
// }

// console.log(func51([1,3,4], [5,6,4,32,3,1,5])); // true
// console.log(func51([4,3,6], [5,3,5,2,4,5])); // false


/* Using the third argument of callbackFn
The array argument is useful if you want to access another element in the array. 
The following example first uses filter() to extract the positive values and then uses every() to check whether the array is strictly increasing.
*/

// function func55(e, i, arr) {
//   if(i > 0) {
//     return e > arr[i-1];
//   }
//   if(i==0)
//   return true;
// }

// console.log([4, -31, -3, 5, 8, -5].filter(e => e>0).every(func55)); // true
// console.log([4, -31, -3, 5, 8, 7, -5].filter(e => e>0).every(func55)); // false

/* Using every() on sparse arrays
every() will not run its predicate on empty slots. */
// console.log([1, , 3].every((x) => x !== undefined)); // true
// console.log([2, , 2].every((x) => x === 2)); // true

/* Calling every() on non-array objects
The every() method reads the length property of this and then accesses each property with a nonnegative integer key less than length until they all have been accessed or callbackFn returns false.
*/

// const obj61 = {
//   length: 3, 
//   1: 'ab',
//   2: 'fg',
//   3: 99 // this won't be read as length=3
// };

// console.log(Array.prototype.every.call(obj61, x => typeof x === 'string')); // true


/* ### reduce()
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
*/
// console.log([3,4,2,-1].reduce((a,b) => a+b)); // 8
// console.log([3,4,2,-10].reduce((a,b) => a+b)); // -1
// console.log([3,4,2,-1].reduce((a,b) => a-b)); // -2

/* Edge cases
If the array only has one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.

If initialValue is provided and the array is not empty, then the reduce method will always invoke the callback function starting at index 0.

If initialValue is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:
*/
// const getMax = (a, b) => Math.max(a, b);

// // callback is invoked for each element in the array starting at index 0
// console.log([1, 100].reduce(getMax, 50)); // 100
// console.log([1, 100].reduce(getMax, 500)); // 500
// console.log([50].reduce(getMax, 10)); // 50

// // callback is invoked once for element at index 1
// console.log([1, 100].reduce(getMax)); // 100

// // callback is not invoked
// [50].reduce(getMax); // 50
// [].reduce(getMax, 1); // 1

// // [].reduce(getMax); // TypeError

/* How reduce() works without an initial value
The code below shows what happens if we call reduce() with an array and no initial value.
*/
// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);
/* Output
accumulator: 15, currentValue: 16, index: 1, returns: 31
accumulator: 31, currentValue: 17, index: 2, returns: 48
accumulator: 48, currentValue: 18, index: 3, returns: 66
accumulator: 66, currentValue: 19, index: 4, returns: 85
*/

/* How reduce() works with an initial value
Here we reduce the same array using the same algorithm, but with an initialValue of 10 passed as the second argument to reduce():
*/

// const ans55 = [15, 16, 17, 18, 19].reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   10, // initial value
// );
// console.log(ans55); // 95


/* Sum of values in an object array
To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.
*/
// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.x,
//   0,
// );

// console.log(sum); // 6

/* Using reduce() with sparse arrays
reduce() skips missing elements in sparse arrays, but it does not skip undefined values.
// */
// console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
// console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN

/* Calling reduce() on non-array objects
The reduce() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.
*/

// const arrayLike = {
//   length: 3,
//   0: 2,
//   1: 3,
//   2: 4,
//   3: 99, // ignored by reduce() since length is 3
// };
// console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
// 9

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