/* Part B — validator.js
Create and export:
validateAge(age)
Rules:
age < 0
→ throw "Age cannot be negative"

age > 120
→ throw "Invalid age"

otherwise
→ return true
*/

function validateAge(age) {
  if(age < 0) {
    throw new Error("Age cannot be negative");
  } else if(age > 120) {
    throw new Error("Invalid age");
  } else {
    return true;
  }
}

export { validateAge };