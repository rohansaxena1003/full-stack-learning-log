/* ### Destructuring 
The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. 
It can be used in locations that receive data (such as the left-hand side of an assignment or anywhere that creates new identifier bindings).
*/

// let v1,v2, arr2;
// let arr1 = [1,2];
// [v1,v2] = arr1;
// console.log(v1); // 1
// console.log(v2); // 2
// [v1,v2,...arr2] = [4,3,54,12,53,11];
// console.log(v1); // 4
// console.log(v2); // 3
// console.log(arr2); // [54,12,53,11]


/* SYNTAX */
// let arr4 = [1,3,4,5,56,,6];
// const [a, b] = array;

// const [a, , b] = arr4;
// console.log(a,b); // 1 4

// const [a = aDefault, b] = array;

// const [a, b, ...rest] = arr4;
// console.log(a,b,rest); // 1 3 [ 4, 5, 56, undefined, 6 ] 

// const [a, , b, ...rest] = array;
// const [a, b, ...{ pop, push }] = arr4;

// const [a, b, ...[c, d]] = arr4;
// console.log(a,b,c,d); // 1 3 4 5

// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 = aDefault, b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;
// const { [key]: a } = obj;

// let a, b, a1, b1, c, d, rest, pop, push;
// [a, b] = array;
// [a, , b] = array;
// [a = aDefault, b] = array;
// [a, b, ...rest] = array;
// [a, , b, ...rest] = array;
// [a, b, ...{ pop, push }] = array;
// [a, b, ...[c, d]] = array;

// ({ a, b } = obj); // parentheses are required
// ({ a: a1, b: b1 } = obj);
// ({ a: a1 = aDefault, b = bDefault } = obj);
// ({ a, b, ...rest } = obj);
// ({ a: a1, b: b1, ...rest } = obj);

/* for objects, compare the two pairs of lines below, and see how there's a direct correspondence within each pair.
*/
// const obj5 = { a, b, c };
// const { a, b, c } = obj5;
// // Equivalent to:
// // const a = obj5.a, b = obj5.b, c = obj5.c;

// const obj6 = { prop1: x, prop2: y, prop3: z };
// const { prop1: x, prop2: y, prop3: z } = obj6;
// // Equivalent to:
// // const x = obj6.prop1, y = obj6.prop2, z = obj6.prop3;

/* Binding and assignment
For both object and array destructuring, there are two kinds of destructuring patterns: binding pattern and assignment pattern, with slightly different syntaxes.

In binding patterns, the pattern starts with a declaration keyword (var, let, or const). Then, each individual property must either be bound to a variable or further destructured.
*/
// const obj = { a: 1, b: { c: 2 } };
// const { a, b: { c: d } } = obj;
// // Two variables are bound: `a` and `d`
// console.log(a,d);


// const obj = { a: 1, b: { c: 2 } };
// const { a } = obj; // a is constant
// console.log(a); // 1
// console.log(obj.b); // { c: 2 }
// let { b: { c: d },} = obj; // d is re-assignable

/* Default value
Each destructured property can have a default value. 
The default value is used when the property is not present, or has value undefined. 
It is not used if the property has value null.
*/
// const [a = 1] = []; // a is 1
// const { b = 2 } = { b: undefined }; // b is 2
// const { c = 2 } = { c: null }; // c is null

// const { b = console.log("hey") } = { b: 2 };
// console.log(b); // 2
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.

// let b = console.log("hey"); // hey
// console.log(b); // undefined

// /* Rest properties and rest elements */
// const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log(others); // { b: 2, c: 3 }

// const [first, ...others2] = [1, 2, 3];
// console.log(others2); // [2, 3]

/* Examples
Array destructuring */

/*Basic variable assignment */
// const foo = ["one", "two", "three"];

// const [red, yellow, green] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // "three"

/* Destructuring with more elements than the source */
// const foo = ["one", "two"];

// const [red, yellow, green, blue] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // undefined
// console.log(blue); // undefined

/* Swapping variables
Two variables values can be swapped in one destructuring expression.
*/
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1, 3, 2]

/* Using a binding pattern as the rest property
The rest property of array destructuring can be another array or object binding pattern.
*/
// const[a,b, ...[c,d]] = [1,3,4,5];
// console.log(a,b,c,d); // 1 3 4 5


// const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c, d, e, f); // 1 2 3 4 5 6

/* Assigning to new variable names and providing default values */
// const { a: aa = 10, b: bb = 5 } = { a: 3 };

// console.log(aa); // 3
// console.log(bb); // 5

/* ### Spread
Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. 
Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. 
*/

// function func55(x,y,z) {
//   return x + y + z;
// }

// const arr55 = [1,3,4];
// console.log(func55(arr55)); // 1,3,4undefinedundefined
// console.log(func55(...arr55)); // 8
// console.log(func55.apply(null, arr55)); // 8
// console.log(arr4);

/* arrays can be spread into objects. 
Many objects are not iterable, including all plain objects that lack a Symbol.iterator method
All primitives can be spread in objects. Only strings have enumerable own properties, and spreading anything else doesn't create properties on the new object.
*/
// const arr56 = [4,6,2];
// const obj56 = {...arr56};
// console.log(obj56); // { '0': 4, '1': 6, '2': 2 }

// const obj57 = { key1: "value1" };
// const arr57 = [...obj57]; // TypeError: obj57 is not iterable

// const obj58 = { ...true, ..."test", ...10 };
// console.log(obj58);
// // { '0': 't', '1': 'e', '2': 's', '3': 't' }
// const obj59 = { ...true}
// console.log(obj59); // {}
// const obj60 = { ...10}
// console.log(obj60); // {}

/* Spread in function calls */
/* Replace apply()
It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.
*/
function func61(x,y,z) {
  return x+y+z;
};
const args61 = [5,2,6];
const var61 = func61.apply(null,args61);
console.log(var61); // 13
const var62 = func61(...args61);
console.log(var62); // 13
function func62(v, w, x, y, z) {
  console.log(v,w,x,y,z);
}
const args62 = [0, 1];
func62(-1, ...args62, 2, ...[3]);