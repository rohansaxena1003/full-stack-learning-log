// /* 1. What is an event?
// An event is a signal produced when something happens in the browser.
// The basic flow is:
// Something happens
//         ↓
// Browser creates an event
//         ↓
// Registered event listener detects it
//         ↓
// Event-handler function runs
// */
// const button1 = document.querySelector("#button-1");

// button1.addEventListener("click", () => { // arrow function
//   console.log("button pressed");
// });

// const button2 = document.querySelector("#button-2");

// function taskSaved(e) { // named function
//   console.log(e.type); // event.type tells you which event occurred:
//   console.log(e.target); // event.target is the element where the event originally occurred.
//   console.log(e.currentTarget); // event.currentTarget is the element whose listener is currently running.
//   console.log("TAsk saved");
// }
// button2.addEventListener("click", taskSaved);


// const button3 = document.querySelector("#button-3");
// button3.addEventListener("click", function() { // Anonymous function
//   console.log("Unsace task");
// });

// /* 9. 
// | Event | When it occurs |
// |---|---|
// | `click` | Element is clicked |
// | `dblclick` | Element is double-clicked |
// | `mouseenter` | Pointer enters an element |
// | `mouseleave` | Pointer leaves an element |
// | `mousedown` | Mouse button is pressed |
// | `mouseup` | Mouse button is released |
// */

// const card = document.querySelector(".card");

// card.addEventListener("mouseenter", () => {
//   card.classList.add("highlighted");
// });

// card.addEventListener("mouseleave", () => {
//   card.classList.remove("highlighted");
// });


// /* | Event | When it occurs |
// |---|---|
// | `keydown` | Key is pressed |
// | `keyup` | Key is released |
// */
// // document.addEventListener("keydown", (e) => {
// //   console.log(e.key);
// // });

// // document.addEventListener("keyup", (e) => {
// //   console.log(e.key + " is releasedd!");
// // });


// /* Common event.key values include:
// Enter
// Escape
// ArrowUp
// ArrowDown
// Tab
// Backspace
// */

// /* Input events
// 1. input
// Fires whenever the displayed input value changes through user interaction.
// This normally runs on every change while the user types.
// 2. change
// Usually fires after the value has been committed.

// For text input, it commonly fires after the input loses focus and the value has changed.
// The basic distinction is:
// - input: immediate value changes.
// - change: committed value change.
// */
// /* Focus events
// | Event | When it occurs |
// |---|---|
// | `focus` | Element receives focus |
// | `blur` | Element loses focus |
// */


// /* 13. Removing an event listener
// Use:
// element.removeEventListener("event-name", callback);
// */
// button2.removeEventListener("click", taskSaved);

// /* You must provide the same function reference used while adding the listener.
// This will not work:
// button.addEventListener("click", () => {
//     console.log("Clicked");
// });

// button.removeEventListener("click", () => {
//     console.log("Clicked");
// });
// */


// /* 14. A listener that runs once
// You can use the once option:
// button.addEventListener(
//     "click",
//     () => {
//         console.log("This runs only once");
//     },
//     { once: true }
// );
// */

// /* 15. Event listeners on different objects
// Listeners are not limited to buttons.
// You can attach a listener to any object that supports events.
// */





































