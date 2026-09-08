// const paragraphs = document.querySelectorAll("p");
// // paragraphs[0] is the first <p> element
// // paragraphs[1] is the second <p> element, etc.
// alert(paragraphs[0].nodeName);

// console.log(window); // window represents the current browser window or tab.
// console.log(document); // document represents the webpage loaded inside the browser tab.
// console.log("hello1223");


/* getElementById() 
It returns:
- The matching element, or
- null if the element does not exist.
*/
// const title = document.getElementById("title-1");
// console.log(title); // h1

/* querySelector()
querySelector() accepts any valid CSS selector and returns the first matching element.
If nothing matches, it returns null.
*/
// const a1 = document.querySelector("ul"); // select by tag
// console.log(a1);
// const a2 = document.querySelector("#task-list"); // select by id
// console.log(a2);
// const a3 = document.querySelector(".task"); // select by class
// console.log(a3);
// const a4 = document.querySelector("#task-list .task"); // select a nested element
// console.log(a4);


/* querySelectorAll()
Returns all matching elements as a NodeList.
*/
// const a11 = document.querySelectorAll("ul");
// console.log(a11); // nodelist containing all ul elements
// const a12 = document.querySelectorAll("#task-list"); 
// console.log(a12); // nodelist containing element with id task-list
// const a13 = document.querySelectorAll(".task");
// console.log(a13); // nodelist containing all elements with class task
// console.log(a13[0]); // 1st element with class = task
// console.log(a13[1]); // 2nd element with class = task
// console.log(a13.length); // length of nodelist
// for(let i = 0; i < a13.length; i++) { // iterate node list
//   console.log(a13[i]);
// }

// const a14 = document.querySelectorAll(".missning"); 
// console.log(a14); // empty node list 
// console.log(a14.length); // 0



/* getElementsByTagName()
Selects every element with a particular tag name:
It returns an HTMLCollection.
*/
// const a21 = document.getElementsByTagName("li");
// console.log(a21);

/* NOTE: For most of your code, prefer:
document.querySelector();
document.querySelectorAll();
Use getElementById() when selecting a unique element by ID.
*/



/* DOM traversal
DOM traversal means selecting an element and navigating from it to nearby elements.
*/
// const a31 = document.querySelector("#task-list");
// console.log(a31.parentElement); // body
// console.log(a31.children); // HTML collection of li
// console.log(a31.firstElementChild); // li abc
// console.log(a31.lastElementChild); // li ghi
// const a32 = a31.lastElementChild;
// console.log(a32.previousElementSibling); // li def









/* 8. Complete practical example */
// Select by ID
const pageTitle = document.getElementById("page-title");
console.log("Page title:", pageTitle); // Page title: Task Manager

// Select the first matching element
const firstTask = document.querySelector(".task");
console.log("First task:", firstTask); // First task: Study DOM

// Select every matching element
const allTasks = document.querySelectorAll(".task");
console.log("All tasks:", allTasks); // nodeList of all li
console.log("Number of tasks:", allTasks.length); // Number of tasks: 3

// Loop through the NodeList
allTasks.forEach((task, index) => {
    console.log(`Task ${index + 1}:`, task);
});
/* Output
Task 1: Study DOM
Task 2: Practice JavaScript
Task 3: Build Task Tracker
*/

// Select using an attribute
const completedTask = document.querySelector(
    '[data-status="completed"]'
);

console.log("Completed task:", completedTask); // Completed Task: Practice JavaScript

// Select a nested element
const sectionHeading = document.querySelector(
    ".task-section h2"
);

console.log("Section heading:", sectionHeading); // Section heading: <h2>My Tasks</h2>

// Begin traversal from the list
const taskList = document.querySelector("#task-list");

console.log("Parent:", taskList.parentElement); // Parent: section
console.log("Children:", taskList.children); // Children: HTML collection of li
console.log("First child:", taskList.firstElementChild); // Study DOM
console.log("Last child:", taskList.lastElementChild); // Build Task Tracker

const firstListItem = taskList.firstElementChild;
const secondListItem = firstListItem.nextElementSibling;

console.log("Second task:", secondListItem); // Practice JS
console.log(
    "Previous sibling:",
    secondListItem.previousElementSibling
); //  Study DOM

console.log(
    "Next sibling:",
    secondListItem.nextElementSibling
); // Build Task Tracker