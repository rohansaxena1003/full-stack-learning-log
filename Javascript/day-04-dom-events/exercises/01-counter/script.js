

/* Write JavaScript that:
1. Stores the current counter in a variable.
2. Reads the step value from the input.
3. Increases the counter when Add is clicked.
4. Decreases the counter when Subtract is clicked.
5. Resets the counter when Reset is clicked.
6. Displays "Counter is positive" when above zero.
7. Displays "Counter is negative" when below zero.
8. Displays "Counter is zero" when equal to zero.
9. Resets the counter when the r key is pressed.
10. Prints event.target whenever a button is clicked.
Attempt it before checking the answer.
*/



// 1
// const dis
let counter = 0;
let displayCounter = document.querySelector("#number");
console.log(counter);

// 2
const stepInput = document.querySelector("#step-input");
let input = Number(stepInput.value);
console.log(stepInput.value);

// 3, 4, 5
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const reset = document.querySelector("#reset");

add.addEventListener("click", () => {
  input = Number(stepInput.value);
  counter += input;
  displayCounter.textContent = counter;
  console.log(counter);
  displayStatus(counter);
});

subtract.addEventListener("click", () => {
  input = Number(stepInput.value);
  counter -= input;
  displayCounter.textContent = counter;
  console.log(counter);
  displayStatus(counter);
});

reset.addEventListener("click", () => {
  counter = 0;
  displayCounter.textContent = counter;
  console.log(counter);
  displayStatus(counter);
});

// 6, 7, 8
let status1 = document.querySelector("#status");
function displayStatus(count) {
  if(count > 0) {
    status1.textContent = "Count is positive";
  } else if( count < 0) {
    status1.textContent = "Count is negative";
  } else {
    status1.textContent = "Count is zero";
  }
}

// 9
document.addEventListener("keypress", (e) => {
  if(e.key === 'r') {
    counter = 0;
    displayCounter.textContent = counter;
    displayStatus(counter);
  }
})




















