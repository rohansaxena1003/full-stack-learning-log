# Essential Day 2 Review Questions

## Functions and Callbacks

### 1. What is the difference between a function declaration and a function expression?

- **Function declaration:** Defines a named function.
- **Function expression:** Stores a function in a variable.

### 2. What is an arrow function?

- A shorter syntax for writing functions.

### 3. What is implicit return?

- Returning an expression from an arrow function without writing `return`.

### 4. What is a default parameter?

- A fallback value used when an argument is missing or `undefined`.

### 5. What is a callback function?

- A function passed to another function.

### 6. What is the difference between passing and calling a function?

- `callback` passes the function.
- `callback()` executes the function.

## Arrays and Objects

### 7. What is the difference between `slice()` and `splice()`?

- `slice()` copies elements without mutation.
- `splice()` changes the original array.

### 8. Which common array methods mutate the original array?

- `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()` and `reverse()`.

### 9. What is the difference between dot and bracket notation?

- **Dot notation:** Uses a fixed property name.
- **Bracket notation:** Accepts computed property names.

### 10. When is bracket notation necessary?

- For computed keys or keys containing spaces or special characters.

### 11. How do you safely access a deeply nested property?

- Use optional chaining: `product.details?.rating`.

## Array Methods

### 12. What is the difference between `map()` and `forEach()`?

- `map()` returns a new array.
- `forEach()` performs an action without creating a useful returned array.

### 13. What is the difference between `filter()` and `find()`?

- `filter()` returns all matches.
- `find()` returns the first match.

### 14. What do `some()` and `every()` return?

- A Boolean: `true` or `false`.

### 15. What do callbacks supplied to `map()` and `filter()` return?

- `map()` callback returns a transformed value.
- `filter()` callback returns a Boolean.

### 16. What are the accumulator and current value in `reduce()`?

- **Accumulator:** Stores the developing result.
- **Current value:** Represents the current array element.

### 17. Why should `reduce()` receive an initial value?

- It makes the result predictable and handles empty arrays safely.

### 18. Which method produces a new array of discounted products?

- `map()`.

## Modern Syntax and Immutability

### 19. What is destructuring?

- Extracting array values or object properties into variables.

### 20. What is the difference between spread and rest?

- **Spread:** Expands values.
- **Rest:** Collects values.

### 21. Does spread create a deep copy?

- No. It creates a shallow copy.

### 22. What does optional chaining return when a property is missing?

- `undefined`.

### 23. What is the difference between `||` and `??`?

- `||` handles all falsy values.
- `??` handles only `null` and `undefined`.

### 24. What does mutation mean?

- Directly changing existing data.

### 25. Why are immutable updates important in React?

- They help React detect changes and update the UI.

### 26. How do you update one object inside an array without mutation?

- Use `map()` with object spread:

    `products.map(product => product.id === id ? { ...product, price: newPrice } : product);`