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
// };

// console.log(myObj.a); // 7
// console.log(myObj.b); // 8, returned from the get b() method
// myObj.c = 50; // Calls the set c(x) method
// console.log(myObj.a); // 25 