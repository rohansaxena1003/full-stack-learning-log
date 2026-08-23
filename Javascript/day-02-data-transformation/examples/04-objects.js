/* ### Working with Objects */
/* JavaScript is designed on an object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object with properties. 
A cup has a color, a design, weight, a material it is made of, etc. In the same way, JavaScript objects can have properties, which define their characteristics. 
*/

/* ### Creating new objects */
  /* ** Using object initializer */
  /* Object initializers are also called object literals. "Object initializer" is consistent with the terminology used by C++.

The syntax for an object using an object initializer is: */
// const obj1 = { // This is optional. If you do not need to refer to this object elsewhere, you do not need to assign it to a variable. 
//   property1: value1, // property name may be an identifier
//   2: value2, // or a number
//   "property 3": value3 // or a string
// };

/* The following statement creates an object and assigns it to the variable x if and only if the expression cond is true: */
// let x;
// if(condn) { // if condn is true
//   x = { greeet: "Hola"};
// }

/* The following example creates myHonda with three properties. Note that the engine property is also an object with its own properties. */
// const myHonda = {
//   name: "Amaze",
//   variants: 3,
//   engine: {
//     cylinder: 3,
//     capacity: 2.2
//   },
//   sunroof: true
// };

/* ### Defining Methods 
A method is a function associated with an object, or, put differently, a method is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object*/
/* Example

objectName.methodName = functionName;
const myObj = {
  myMethod: function (params) {
    // do something
  },

  // this works too!
  myOtherMethod(params) {
    // do something else
  },
}; */

/*Methods are typically defined on the prototype object of the constructor, so that all objects of the same type share the same method. For example, you can define a function that formats and displays the properties of the previously-defined Car objects.
Car.prototype.displayCar = function () {
  const result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  console.log(result);
};

car1.displayCar();
car2.displayCar();
*/


/* Defining getters and setters 
A getter is a function associated with a property that gets the value of a specific property. 
A setter is a function associated with a property that sets the value of a specific property. 
Together, they can indirectly represent the value of a property.*/
// Getters and setters can be either defined within object initializers, or added later to any existing object.
// const myObj = {
//   a: 7,
//   get b() {
//     return this.a + 1;
//   },
//   set c(x) {
//     this.a = x / 2;
//   },
//   set b(x) {
//     this.a = x * x;
//   }
// };

// console.log(myObj.a); // 7
// console.log(myObj.b); // 8, returned from the get b() method
// myObj.c = 50; // Calls the set c(x) method
// console.log(myObj.a); // 25 
// myObj.b = 8; //  Calls the set b(x) method
// console.log(myObj.a); // 64

/* Getters and setters can also be added to an object at any time after creation using the Object.defineProperties() method. This method's first parameter is the object on which you want to define the getter or setter. The second parameter is an object whose property names are the getter or setter names, and whose property values are objects for defining the getter or setter functions. 
Here's an example that defines the same getter and setter used in the previous example: */
// const myObj2 = {
//   a : 0
// };

// Object.defineProperties(myObj2, {
//   b: {
//     get() {
//       return this.a;
//     },
//     set(x) {
//       this.a = this.a + x*x;
//     }
//   },
//   c : {
//     set(y) {
//       this.a = y + this.a;
//     }
//   }
// });

// console.log(myObj2.b); // 0
// myObj2.b = 5;
// console.log(myObj2.b); // 25
// myObj2.c = 8;
// console.log(myObj2.b); // 33


/* ### Comparing Objects 
In JavaScript, objects are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.*/
// Example 1
// const obj3 = {name : 'apple'};
// const obj4 = {name : 'apple'};
// console.log(obj3 === obj4); // false
// console.log(obj4 === obj4); // true

// // Example 2
// const obj5 = {name: 'apple'};
// const obj6 = obj5;
// console.log(obj5 === obj6); // true
// obj6.name = 'grape';
// console.log(obj5.name); // grape


/* Experiment 1 */

// const product = {
//   id: 5,
//   name: 'car',
//   price: 500000,
//   category: 'LCV',
//   stock: 100,
//   details: {
//     colors: ['red', 'white', 'grey'],
//     engines: {
//       'petrol': 5,
//       'diesel': 4,
//       'hybrid': 3
//     }
//   }
// };

// console.log(product.name); // car
// console.log(product.details.colors); // [ 'red', 'white', 'grey' ]
// product.details.colors[1]= 'blue';
// console.log(product.details.colors); // [ 'red', 'blue', 'grey' ]
// console.log(product["stock"]); // 100
// console.log(product.details.engines); // { petrol: 5, diesel: 4, hybrid: 3 }

// const products = [
//   { id: 1, name: "Wireless Mouse", price: 29.99, inStock: true },
//   { id: 2, name: "Mechanical Keyboard", price: 89.99, inStock: false },
//   { id: 3, name: "4K Monitor", price: 349.99, inStock: true }
// ];


/* ### React connection: Most React data is represented using objects and arrays of objects:
const user = {
    id: 1,
    name: "Rohan",
};

const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
];
*/