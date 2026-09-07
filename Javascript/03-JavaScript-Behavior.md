# Day 3 — JavaScript Behavior

## 1. Scope

- **Scope** determines where a variable can be accessed.
- **Global scope** → accessible almost everywhere.
- **Function scope** → accessible only inside the function.
- **Block scope** → accessible only inside `{}`.
- `let` and `const` are **block-scoped**.
- `var` is **function-scoped**.
- Inner scopes can access outer variables.
- Outer scopes cannot access inner variables.

---

## 2. Hoisting

- JavaScript processes declarations before execution.
- Function declarations can usually be called before their declaration.
- `var` is hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but remain inaccessible before declaration.
- The inaccessible period is called the **Temporal Dead Zone (TDZ)**.

```js
console.log(a); // undefined
var a = 10;
```

```js
console.log(a); // ReferenceError
let a = 10;
```

---

## 3. Closures

- A **closure** is a function that remembers variables from its lexical scope.
- Inner functions can access outer-function variables.
- Those variables can remain accessible even after the outer function finishes.

```js
function createCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}
```

- Every separate call to the outer function creates a separate closure.

---

## 4. Value vs Reference

### Primitives

- Primitive assignment copies the value.
- Changing the copy does not affect the original.

```js
let a = 10;
let b = a;
```

### Objects

- Object variables store references to objects.
- Two variables can reference the same object.

```js
const a = {};
const b = a;

console.log(a === b); // true
```

- Different objects are not equal even if their contents are identical.

```js
{} === {} // false
```

### Function Parameters

```js
person.name = "Sam";
```

- Mutates the shared object.

```js
person = { name: "Sam" };
```

- Only changes the local reference.

---

## 5. Mutation and Shallow Copies

- **Mutation** means changing an existing object or array.

```js
user.name = "Sam";
```

### Spread

```js
const copy = { ...original };
const arrCopy = [...original];
```

- Spread creates a **shallow copy**.
- The outer object/array is new.
- Nested objects/arrays may still be shared.

```js
const b = { ...a };

a === b;             // false
a.inner === b.inner; // true
```

### Nested Immutable Update

```js
const updated = {
    ...user,
    address: {
        ...user.address,
        city: "Mumbai"
    }
};
```

- Copy every level along the path being changed.

---

## 6. `this`

- For normal functions, `this` depends mainly on **how the function is called**.

```js
user.greet();
```

- Here, `this` refers to `user`.

```js
user.address.showCity();
```

- Here, `this` refers to `user.address`.

### Arrow Functions

- Arrow functions do **not** have their own `this`.
- They inherit `this` from the surrounding lexical scope.

```js
greet() {
    const inner = () => {
        console.log(this.name);
    };
}
```

- Avoid arrow functions as object methods when you need `this` to refer to the object.

---

## 7. ES Modules

- Modules split JavaScript into reusable files.
- `export` makes something available outside a module.
- `import` brings exported values into another module.

### Named Export

```js
export function add(a, b) {
    return a + b;
}
```

```js
import { add } from "./math.js";
```

### Default Export

```js
export default function greet() {}
```

```js
import greet from "./user.js";
```

### Key Rules

- A module can have multiple named exports.
- A module can have only one default export.
- Named imports use `{}`.
- Default imports do not use `{}`.
- `./` → current directory.
- `../` → parent directory.
- Non-exported variables stay private to the module.

For Node ES modules:

```json
{
    "type": "module"
}
```

---

## 8. Error Handling

### `try...catch`

```js
try {
    // code that may fail
} catch (error) {
    console.log(error.message);
}
```

- When an error occurs, remaining `try` code stops.
- Control moves to `catch`.

### `throw`

```js
throw new Error("Invalid input");
```

- `throw` stops normal execution.
- Prefer throwing an `Error` object.

### `finally`

```js
finally {
    // always runs
}
```

### `return` vs `throw`

- `return` → normal function completion.
- `throw` → exceptional failure.

---

## 9. Classes and Prototypes

- A **class** is a template for creating similar objects.
- `constructor` initializes each instance.
- `new` creates an instance.

```js
class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello ${this.name}`;
    }
}
```

```js
const user = new User("Rohan");
```

### Important Terms

- **Class** → template.
- **Instance** → object created from the class.
- **Constructor** → initializes the instance.
- **`this`** → current instance.
- **Prototype** → shared methods.

Normal class methods are shared through the prototype.

```js
user1.greet === user2.greet; // true
```

### `instanceof`

```js
user instanceof User;
```

Checks whether an object belongs to the class/prototype chain.

---

# Day 3 Coding Practice

Practiced:

- Scope and hoisting
- Closures
- Object references
- Mutation
- Shallow copies
- Nested immutable updates
- Modules
- Error handling
- Classes and prototypes

---

# Day 3 Project — Task Manager

Project files:

```text
project/
├── main.js
├── taskManager.js
└── idGenerator.js
```

Concepts combined:

- Closures
- ES modules
- Arrays and objects
- `map()` / `filter()`
- Spread syntax
- Immutable updates
- Error handling

Main operations:

```text
createTask()
toggleTask()
deleteTask()
getCompletedTasks()
getPendingTasks()
```

---

# Key Takeaways

- Scope controls variable visibility.
- Hoisting behavior differs between `var`, `let`, `const`, and functions.
- Closures retain access to lexical variables.
- Objects are accessed through references.
- Spread creates a **shallow copy**.
- Nested immutable updates require copying nested levels.
- Normal-function `this` depends on the call site.
- Arrow functions inherit `this`.
- Modules organize code across files.
- Errors can be created with `throw` and handled with `try...catch`.
- Classes create instances and use JavaScript's prototype system.

---

# Day 3 Learning Outcome

By the end of Day 3, I can:

- Explain scope, hoisting, and closures.
- Understand object reference behavior.
- Distinguish mutation from immutable updates.
- Explain shallow copying.
- Understand basic `this` behavior.
- Split JavaScript across modules.
- Handle errors using `try`, `catch`, and `throw`.
- Create and use basic JavaScript classes.