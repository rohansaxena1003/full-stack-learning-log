// const arr = [];
// console.log(arr); // []
// console.log(arr[0]); // undefined
// console.log(typeof arr); // object
// const arr2 = Array(3,3,3,2);
// console.log(arr2); //[3,3,3,2]
// arr.length = 5;
// console.log(arr); // [ <5 empty items> ]
// const arr3 = Array(3);
// console.log(arr3.length); // 3
// console.log(arr3); // [ <3 empty items> ]
// console.log(arr3[5]); // undefined
// console.log(arr3[1]); // undefined
// const arr4 = Array("ab");
// console.log(arr4); // [ 'ab' ]
// console.log(arr4.length); // 1
// const arr5 = Array("5");
// console.log(arr5); // '5'
// const arr6 = Array(2, 1, 3);
// console.log(arr6); // [ 2, 1, 3 ]


// ** arrays can also be assigned as a property of a new or an existing object
// const obj = {};
// obj.arr = [4,4, 'a'];
// // console.log(arr); // ReferenceError: arr is not defined
// console.log(obj); // { arr: [ 4, 4, 'a' ] }
// console.log(obj.arr); // [ 4, 4, 'a' ]

// Calling Array(N) results in a RangeError, if N is a non-whole number whose fractional portion is non-zero.
// const arr8 = Array(7.7); // RangeError: Invalid array length


// ** forEach() array method
// The function passed to forEach is executed once for every item in the array, with the array item passed as the argument to the function. Unassigned values are not iterated in a forEach loop.
// const c = ['red', 'green', 'blie'];
// c.length = 7;
// c[5] = "Orange";
// c.forEach(e => console.log(e));

// Undefined values iteration with forEach() method
// Note that the elements of an array that are omitted when the array is defined are not listed when iterating by forEach, but are listed when undefined has been manually assigned to the element:
// const arr11 = ['aa', 'bb', , 'dd'];
// arr11.forEach(e => console.log(e)); 
/* 
aa
bb
dd
*/

// if(arr11[2] === undefined) {
//   console.log('Index 2 is undefined'); // Index 2 is undefined
// }

// const arr12 = ['11', '12', undefined, '14'];
// arr12.forEach(e => console.log(e));
/*
11
12
undefined
14
*/


/* ### Array methods */
/* 1. concat() : The concat() method joins two or more arrays and returns a new array. */
// const arr13 = ['ab', 12, true, 14];
// const arr14 = [5, 'tt'];
// const arr15 = arr13.concat(arr14);
// console.log(arr15); // [ 'ab', 12, true, 14, 5, 'tt' ]

/* 2. join():  */
// const arr16 = ['aa', 44, 54, 'as'];
// const arr17 = arr16.join(', '); // string
// console.log(arr17); // aa, 44, 54, as
// console.log(typeof arr17); // string
// console.log(arr16.join()); // aa,44,54,as

/* 3. push(): */
// const arr18 = [4,4,2];
// console.log(arr18.length); // 3
// arr18.push('tt');
// console.log(arr18.length); // 4
// console.log(arr18); // [ 4, 4, 2, 'tt' ]

/* 4. pop() */
// const arr19 = ['tt', 'ff', 44, 'gg'];
// console.log(arr19); // [ 'tt', 'ff', 44, 'gg' ]
// const e = arr19.pop(); 
// console.log(e); // 'gg'
// console.log(arr19); // [ 'tt', 'ff', 44 ]

/* 5. shift() : */
// const myArray = ["1", "2", "3"];
// const first = myArray.shift();
// console.log(first); // 1
// console.log(myArray); // [ '2', '3' ]

/* 6. unshift() :The unshift() method adds one or more elements to the front of an array and returns the new length of the array. */
// const arr21 = ["1", "2", "3"];
// const v = arr21.unshift("4", "5"); // returns length of array
// console.log(v); // 5
// console.log(arr21); // [ '4', '5', '1', '2', '3' ]

/* 7. slice() : The slice() method extracts a section of an array and returns a new array. */
// const arr22 = ['a', 'b', 'c', 'd' , 'e', 'f'];
// const v = arr22.slice(1,3);
// console.log(v); // [ 'b', 'c' ]
// console.log(arr22); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

/* 8. at() : The at() method returns the element at the specified index in the array, or undefined if the index is out of range. It's notably used for negative indices that access elements from the end of the array.*/
// const arr22 = ['a', 'b', 'c', 'd' , 'e', 'f'];
// const e22 = arr22.at(0), e23 = arr22.at(4), e24 = arr22.at(5), e25 = arr22.at(-1), e26 = arr22.at(-4);
// console.log(e22); // a
// console.log(e23); // e
// console.log(e24); // f
// console.log(e25); // f
// console.log(e26); // c // arr.at(-4) = arr.at(arr.length -4) = arr.at(2)

/* 9. splice():  */
// const arr31 = ["1", "2", "3", "4", "5"];
// arr31.splice(1, 3, "a", "b", "c", "d");
// console.log(arr31); // ["1", "a", "b", "c", "d", "5"]
/* This code started at index one (or where the "2" was), removed 3 elements there, and then inserted all consecutive elements in its place. */

/* 10. reverse() : The reverse() method transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array.*/
// const arr32 = ["1", "2", "3"];
// arr32.reverse();
// console.log(arr32); // [ '3', '2', '1' ]
// transposes the array so that myArray = ["3", "2", "1"]

/* 11. flat() : The flat() method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. */
// ex 1
// const arr33 = [1, 2, 3, [4,5], 'a'];
// const arr34 = arr33.flat();
// console.log(arr33); // [ 1, 2, 3, [ 4, 5 ], 'a' ]
// console.log(arr34); [ 1, 2, 3, 4, 5, 'a' ]

// ex 2
// const arr35 = [[1, [2,3,[4,5], 6, [7]], 8], 9, 10, [[11,12]]];

// const arr36 = arr35.flat(); 
// const arr37 = arr36.flat();
// const arr38 = arr37.flat();
// const arr39 = arr35.flat(3);
// const arr40 = arr35.flat(5);
// console.log(arr35); // [ [ 1, [ 2, 3, [Array], 6, [Array] ], 8 ], 9, 10, [ [ 11, 12 ] ] ]
// console.log(arr36); // [ 1, [ 2, 3, [ 4, 5 ], 6, [ 7 ] ], 8, 9, 10, [ 11, 12 ] ]
// console.log(arr37); // [ 1, 2, 3, [ 4, 5 ], 6, [ 7 ], 8, 9, 10, 11, 12 ]
// console.log(arr38); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
// console.log(arr39); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
// console.log(arr40); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]


/* 12. sort(): sort() can also take a callback function to determine how array elements are compared. The callback function is called with two arguments, which are two values from the array. The function compares these two values and returns a positive number, negative number, or zero, indicating the order of the two values. For instance, the following will sort the array by the last letter of a string: */

// const sortfn = (a,b) => {
//   if(a[a.length-1] > b[b.length-1]) {
//     return 1; // a > b; Positive number; b comes before a
//   } else if(a[a.length-1] < b[b.length-1]) {
//     return -1; // a < b; Negative number; a comes before b
//   } else {
//     return 0; // a=b; a and b keep their original order
//   }
// };

// const arr = ['Rain', 'Coffee', 'Cashew', 'Almond'];
// arr.sort(sortfn);
// console.log(arr); // [ 'Almond', 'Coffee', 'Rain', 'Cashew' ]

/* 13. indexOf() : The indexOf() method searches the array for searchElement and returns the index of the first match. */
// const a = ["a", "b", "a", "b", "a"];
// console.log(a.indexOf("b")); // 1

// // Now try again, starting from after the last match
// console.log(a.indexOf("b", 2)); // 3
// console.log(a.indexOf("z")); // -1, because 'z' was not found


/* 14. lastIndexOf() : The lastIndexOf() method works like indexOf, but starts at the end and searches backwards.*/
// const a = ["a", "b", "c", "d", "a", "b"];
// console.log(a.lastIndexOf("b")); // 5

// // Now try again, starting from before the last match
// console.log(a.lastIndexOf("b", 4)); // 1
// console.log(a.lastIndexOf("z")); // -1


/* 15. map() : The map() method returns a new array of the return value from executing callback on every array item. */
// const arr45 = ['a', 'baa', 'cad,,44'];
// const arr46 = arr45.map(e => e.toUpperCase());
// console.log(arr45); // [ 'a', 'baa', 'cad,,44' ]
// console.log(arr46); // [ 'A', 'BAA', 'CAD,,44' ]

/* 16. flatMap() : The flatMap() method runs map() followed by a flat() of depth 1 */
// const arr51 = ['abc', 'def', 'ghi', 'jkl' , 'mno', 'pqr', 'stu', 'vwx', 'yza'];
// const arr52 = arr51.flatMap(e => e.toUpperCase());
// console.log(arr51); // ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwx', 'yza']
// console.log(arr52); // ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU', 'VWX', 'YZA']

// const arr53 = ["a", "b", "c"];
// const arr54 = arr53.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
// console.log(arr54); // ['A', 'a', 'B', 'b', 'C', 'c']


/* 17. filter() : The filter() method returns a new array containing the items for which callback returned true. */
// const arr55 = ['a', 'b', 10, 'rr', 4.44, 'f'];
// const arr56 = arr55.filter(e => typeof e === 'number');
// console.log(arr56); // [ 10, 4.44 ]


/* 18. find() :  */
// const a57 = ["a", 10, "b", 20, "c", 30];
// const i = a57.find((item) => typeof item === "number");
// console.log(i); // 10

/* 19. every() : The every() method returns true if callback returns true for every item in the array. */
// function isNumber(value) {
//   return typeof value === "number";
// }
// const a58 = [1, 2, 3];
// console.log(a58.every(isNumber)); // true
// const a59 = [1, "2", 3];
// console.log(a59.every(isNumber)); // false


/* 20. some() : The some() method returns true if callback returns true for at least one item in the array.  */
// function isNumber(value) {
//   return typeof value === "number";
// }
// const a61 = [1, 2, 3];
// console.log(a61.some(isNumber)); // true
// const a62 = [1, "2", 3];
// console.log(a62.some(isNumber)); // true
// const a63 = ["1", "2", "3"];
// console.log(a63.some(isNumber)); // false


/* 21. reduce() : reduce and reduceRight are the least obvious of the iterative array methods. They should be used for algorithms that combine two values recursively in order to reduce a sequence down to a single value.
The reduceRight() method works like reduce(), but starts with the last element.
 */
// const a = [10, 20, 30];
// const total = a.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0,
// );
// console.log(total); // 60