/*

/* Reading and Changing text with textContent */
// const heading = document.querySelector("#page-title");
// console.log(heading.textContent); // Old Title
// heading.textContent = "New Title";
// console.log(heading.textContent); // New Title

// const message = document.querySelector(".message");
// message.textContent = "<strong>Completed</strong>";

/* 
innerHTML
Parses the assigned string as HTML:

Which should you use?
Use textContent for ordinary text, especially when the value comes from a user:

Use innerHTML only when you intentionally need to insert trusted HTML.
Never directly insert untrusted user input with innerHTML:
*/
// message.innerHTML = "<strong>Completed</strong>";

// const link = document.querySelector("#help-link");
// console.log(link);
// const address = link.getAttribute("href");
// console.log(address);

/* setAttribute()
Adds or changes an attribute:
*/
// link.setAttribute("href", "https://developer.mozilla.org/");
// link.setAttribute("target", "_blank");

/* hasAttribute()
Checks whether an attribute exists:
*/
// console.log(link.hasAttribute("target")); // true

/* removeAttribute()
Removes an attribute:
*/
// link.removeAttribute("target");

/* 5. DOM properties versus attributes
Some attributes can also be accessed as JavaScript properties.
*/
// const logo = document.querySelector("#logo");
// logo.src = "new-photo.png";
// logo.alt = "New company logo";

/* This can also be written using attributes: */
// logo.setAttribute("src", "newst-photo.png");
// logo.setAttribute("alt", "New AO logo");

/* For common properties such as src, href, id, and alt, both approaches are frequently used.
For custom or less common attributes, setAttribute() is clearer. */

/* 6. Custom data-* attributes
Custom attributes begin with data-.
*/
// const task = document.querySelector(".task");
// task.dataset.status = "completed";
// task.dataset.id = 898;
// console.log(typeof task.dataset.id); // string


/* 7. Manipulating CSS classes */
// const status1 = document.querySelector("#status");
// status1.classList.add("success");
// status1.classList.remove("message");
// status1.classList.toggle("hidden");
// console.log(status1.classList.contains("hidden")); // true
// console.log(status1.classList.contains("apkal")); // false
// status1.classList.add("well", "sell", "swell");
// status1.classList.remove("success", "hidden");
// status1.classList.add("well");
// status1.classList.remove("ggg");


/* 8. classList versus className
className replaces the complete class value:
classList.add() preserves existing classes:
*/
// const heading = document.querySelector("#page-title");
// console.log(heading.textContent);
// heading.style.color = "red";
// heading.style.backgroundColor = "orange";
// heading.style.fontSize = "23px";


/* 10. Creating elements
Use document.createElement():
*/
// const newTask = document.createElement("li");
/* At this moment, the element exists in JavaScript memory, but it has not been placed on the page.
You can configure it:
*/
// newTask.textContent = "Practise DOM manipulation";
// newTask.classList.add("task");
// newTask.dataset.id = "103";

/* 11. Inserting elements
append()
Adds content at the end:
append() can add multiple nodes:
It can also append strings:
prepend()
Adds content at the beginning:
*/
// const ol = document.querySelector("#ordered-list");
// ol.append(newTask);
// ol.append("End");
// // ol.appendChild(newTask);
// ol.prepend(newTask);


/* 12. Creating nested elements
Suppose you want to create:
<li class="task">
    <span>Study JavaScript</span>
    <strong>Active</strong>
</li>
// */
// const li5 = document.createElement("li");
// li5.classList.add("task");
// const span5 = document.createElement("span");
// span5.textContent = "Study JavaScript";
// const strong5 = document.createElement("strong");
// strong5.textContent = "Active";

// li5.append(span5, strong5);
// ol.append(li5);
/* The sequence is:
Create elements
      ↓
Configure elements
      ↓
Connect child elements
      ↓
Insert completed structure into the DOM
*/


/* 13. Moving existing elements
Appending an element that is already in the DOM moves it. 
It does not create a copy.
*/

// const newUL22 = document.querySelector("#second-list");
// newUL22.append(li5);


/* 14. Removing elements
remove() : Removes the selected element:
removeChild() : Removes a particular child from a parent:
*/

// const newTask11 = document.createElement("li")
// newTask11.textContent = "Nawa tasak addedwa";
// newUL22.append(newTask11);
// newUL22.remove(newTask11);
// console.log(newTask11);





































// Change text
// const pageTitle = document.querySelector("#page-title");

// pageTitle.textContent = "Day 4 Task Manager";
// pageTitle.classList.add("highlighted");

// // Change status text, class and data attribute
// const status1 = document.querySelector("#status");

// status1.textContent = "Tasks loaded successfully";
// status1.classList.add("ready");
// status1.dataset.state = "ready";

// // Change link attributes
// const helpLink = document.querySelector("#help-link");

// helpLink.setAttribute(
//     "href",
//     "https://developer.mozilla.org/"
// );

// helpLink.setAttribute("target", "_blank");
// helpLink.setAttribute("rel", "noopener noreferrer");

// // Change an existing task
// const firstTask = document.querySelector(".task");

// firstTask.classList.add("completed");
// firstTask.dataset.status = "completed";

// // Select the parent list
// const taskList = document.querySelector("#task-list");

// // Create a new list item
// const newTask = document.createElement("li");
// newTask.classList.add("task");
// newTask.dataset.id = "3";
// newTask.dataset.status = "active";

// // Create its child elements
// const taskText = document.createElement("span");
// taskText.textContent = "Build DOM manipulation example";

// const taskLabel = document.createElement("strong");
// taskLabel.textContent = "New";
// taskLabel.classList.add("task-label");

// // Build the nested structure
// newTask.append(taskText, taskLabel);

// // Insert it into the list
// taskList.append(newTask);

// // Remove an existing element
// const temporaryMessage = document.querySelector(
//     "#temporary-message"
// );

// temporaryMessage.remove();








































// 1
const heading = document.querySelector("#profile-title");
heading.textContent = "Developer Profile";

// 2
const name = document.querySelector("#name");
name.textContent = "Rohan Saxena";

// 3
const profile = document.querySelector("#profile-card");
profile.classList.add("active");

// 4
profile.dataset.UserId = 133;
profile.dataset.status = "active";

// 5
const pfLink = document.querySelector("#portfolio-link");
pfLink.setAttribute("href", "https://leetcode.com/problems/dungeon-game/submissions/2135435783/");
// 6
pfLink.setAttribute("target", "_blank");

// 7
const newSkill = document.createElement("li");
newSkill.textContent = "JavaScript";

// 8
const skillsList = document.querySelector("#skills-list");
skillsList.append(newSkill);

// 9
const gitSkill = document.createElement("li");

// 10
gitSkill.textContent = "Git";
skillsList.prepend(gitSkill);

// 11
const tempNote = document.querySelector("#temporary-note");
tempNote.remove();

// 12
console.log(profile.dataset.UserId); // 133