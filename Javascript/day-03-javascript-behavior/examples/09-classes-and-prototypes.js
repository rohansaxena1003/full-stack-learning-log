

/* Date is a built-in class of JavaScript. 
From this example, we can get some basic ideas of what classes do:

Classes create objects through the new operator.
Each object has some properties (data or method) added by the class.
The class stores some properties (data or method) itself, which are usually used to interact with instances.
*/
// const bigDay = new Date(2019, 6, 19);
// console.log(bigDay.toLocaleDateString());
// if (bigDay.getTime() < Date.now()) {
//   console.log("Once upon a time...");
//   console.log(Date.now());
//   console.log(bigDay);
// }

/* Constructing a class
After a class has been declared, you can create instances of it using the new operator.
const myInstance = new MyClass();
console.log(myInstance.myField); // 'foo'
myInstance.myMethod(); */

/* Class declaration hoisting
Unlike function declarations, class declarations are not hoisted. 
This means that you cannot use a class before it is declared. 
For example, the following code will throw a ReferenceError:

const myInstance = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {
  constructor() {
    this.myField = 'foo';
  }
  myMethod() {
    console.log('Hello from MyClass!');
  }
} */ 


/* Class expressions
Similar to functions, class declarations also have their expression counterparts. */
// const MyClass = class {
//   constructor() {
//     this.myField = 'foo';
//   }
//   myMethod() {
//     console.log('Hello from MyClass!');
//   }
// };  

/* Class expressions can have names as well. The expression's name is only visible to the class's body. */
// const MyClass = class MyClassLongerName {
//   // Class body. Here MyClass and MyClassLongerName point to the same class.
// };
// new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined


/* Constructor
Perhaps the most important job of a class is to act as a "factory" for objects.
As an example, we would create a class called Color, which represents a specific color. 
Users create colors through passing in an RGB triplet.
*/
// class Color {
//   constructor(r, g, b) {
//     this.values = [r, g, b];
//   }
// }
// const red = new Color(255, 0, 0);
// console.log(red);

/* You have successfully created a Color instance, and the instance has a values property, 
which is an array of the RGB values you passed in. That is pretty much equivalent to the following:
function createColor(r, g, b) {
  return {
    values: [r, g, b],
  };
}
*/



/* Instance methods 
For our own Color class, we can add a method called getRed which returns the red value of the color. 
If you are curious where this method is stored in — it's defined on the prototype of all instances, or Color.prototype
*/

// class Color {
//   constructor(r, g, b) {
//     this.values = [r, g, b];
//   }
//   getRed() {
//     return this.values[0];
//   }
// }

// const red = new Color(255, 0, 0);
// console.log(red.getRed()); // 255


/* Private fields
You might be wondering: why do we want to go to the trouble of using getRed and setRed methods, when we can directly access the values array on the instance? */
// class Color {
//   constructor(r, g, b) {
//     this.values = [r, g, b];
//   }
// }

// const red = new Color(255, 0, 0);
// red.values[0] = 67;
// console.log(red.values[0]); // 67


/* Accessor fields
color.getRed() and color.setRed() allow us to read and write to the red value of a color. If you come from languages like Java, you will be very familiar with this pattern. However, using methods to simply access a property is still somewhat unergonomic in JavaScript. Accessor fields allow us to manipulate something as if it is an "actual property".
*/
// class Color {
//   constructor(r, g, b) {
//     this.values = [r, g, b];
//   }
//   get red() {
//     return this.values[0];
//   }
//   set red(value) {
//     this.values[0] = value;
//   }
// }

// const red = new Color(255, 23, 15);
// red.red = 178; // get red() is called
// console.log(red.red); // 178 // set red(value) is called


/* If a field only has a getter but no setter, it will be effectively read-only. */
// class Color {
//   constructor(r, g, b) {
//     this.values = [r, g, b];
//   }
//   get red() {
//     return this.values[0];
//   }
// }

// const red = new Color(255, 0, 0);
// red.red = 0; // In strict mode, the red.red = 0 line will throw a type error: "Cannot set property red of #<Color> which has only a getter". In non-strict mode, the assignment is silently ignored.
// console.log(red.red); // 255




/* Example 1 — Basic class */
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const user1 = new User('Rohan');
// console.log(user1.name); // Rohan


/*Example 2 — What constructor does */
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const user1 = new User('Alpha', 34);
// console.log(user1.name); // Alpha
// console.log(user1.age);  // 34


/* Example 3 — Multiple instances */
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const user1 = new User("Rohan");
// const user2 = new User("Sam");

// console.log(user1.name); // Rohan
// console.log(user2.name); // Sam
// console.log(user1 == user2); // false
// const user3 = new User("Rohan"); 
// console.log(user1 == user3); // because they are different instances.


/* Example 4 — Instance method */
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     return `Hello ${this.name} !!!`;
//   }
// }

// const user1 = new User('Rphan');
// console.log(user1.greet()); // Hello Rphan


/* Example 5 — Same method, different instances 
Same method definition, different this. */
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     return `Hello ${this.name} !!!`;
//   }
// }

// const user1 = new User('Rphan');
// const user2 = new User('Sam');
// console.log(user1.greet()); // Hello Rphan !!!
// console.log(user2.greet()); // Hello Sam !!!


/* Example 7 — Add a practical method */
// class BankAccount {
//     constructor(owner, balance) {
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//     }
// }

// const account = new BankAccount("Rohan", 1000);

// account.deposit(500);

// console.log(account.balance); // 1500


/* Example 9 — Verify prototype method sharing */
// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(this.name);
//     }
// }

// const user1 = new User("Rohan");
// const user2 = new User("Sam");

// console.log(user1.greet === user2.greet); // true // Why? Because both instances use the same method from User.prototype



/* Example 10 — See the prototype directly */
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     return `Hello ${this.name} !!!`;
//   }
// }

// const user1 = new User('Rphan');
// const user2 = new User('Sam');
// console.log(user1.greet()); // Hello Rphan !!!
// console.log(user2.greet()); // Hello Sam !!!

// console.log(User.prototype); // {}  // User.prototype is the object where normal class methods are stored.
// console.log(User.prototype.greet); // [Function: greet]
// console.log(User.prototype.greet()); // Hello undefined !!!


/* Example 11 — instanceof
This is useful to recognize: */
// class User {}

// const user = new User();

// console.log(user instanceof User); // true // user object created from class User




/* 4. One small exercise */
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getDetails() {
    return `${this.name} - ₹${this.price}`;
  }
}

const p1 = new Product("Laptop", 50000);
const p2 = new Product("Mobile", 30000);
console.log(p1.getDetails()); // Laptop - ₹50000
console.log(p2.getDetails()); // Mobile - ₹30000
console.log(p1 === p2); // false
console.log(p1.getDetails === p2.getDetails); // true