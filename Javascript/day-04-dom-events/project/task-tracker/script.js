/* You’ve covered all seven theory topics for Day 4:
1. DOM selection and traversal
2. DOM manipulation
3. Events
4. Forms and validation
5. Rendering lists from data
6. Event bubbling and delegation
7. JSON and localStorage
Next is the Day 4 Task Tracker project, which brings these concepts together. Any exercises you postponed also remain for practice.
Allow approximately 2–3 hours for your first implementation, including debugging.
Use this repository structure:
javascript/04-dom-events/project/task-tracker/
├── index.html
├── styles.css
└── script.js
Your app should let someone:
- Add a task with a nonempty title; remove surrounding whitespace.
- Mark a task complete or active.
- Delete a task.
- Filter tasks using All, Active, and Completed.
- See the number of remaining active tasks.
- Refresh the page and keep their tasks through localStorage.
Represent each task with this shape:
{
  id: "unique-task-id",
  title: "Practice DOM events",
  completed: false
}
Build it in this order:
Step	What to build	Approximate time
1	HTML: task form, filters, list container, remaining count	15–20 min
2	Task array and rendering, including an empty-list message	20–25 min
3	Form submission and title validation	15–20 min
4	Complete and delete actions using event delegation	25–35 min
5	Filters and remaining active-task count	15–20 min
6	Save and restore tasks with localStorage	20–30 min
7	Browser testing and basic styling	15–25 min


Keep the array as your source of truth. When a task changes, update the array → save it → render the screen. Changing the filter only changes what you display.
Start with Step 1: the HTML structure. You need a labelled task input, an Add button, three filter buttons, a task-list container, and a place for the remaining count. Run it in your browser through Live Server, as with the earlier DOM exercises.

*/

const tasks = [
  {
    id: 1,
    title: "Practice DOM events",
    completed: false
  }
];
let taskId = tasks.length + 1;

const taskForm = document.querySelector("#task-form");
const taskTitle = document.querySelector("#title");
const filterTasks = document.querySelector("#filter-tasks");
const showAll = document.querySelector("#show-all");
const showActive = document.querySelector("#show-active");
const showCompleted = document.querySelector("#show-completed");
const showTasks = document.querySelector("#show-tasks");
const emptyList = document.querySelector("#empty-list");


function createTask(task) {
  const newTask = document.createElement("p");
  newTask.textContent = `${task.id}. ${task.title.trim()}, taskCompleted: ${task.completed ? "YES" : "NO"}`;
  return newTask;
}

function addTaskToggleBtn(obj) {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Button";
  return toggleBtn;
}

function addDeleteBtn(obj) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete task";
  return deleteBtn;
}

function render() {
  showTasks.replaceChildren();
  if(tasks.length === 0) {
    emptyList.textContent = "List is empty";
  }
  tasks.forEach(obj => {
    const newTask = createTask(obj);
    const toggleBtn = addTaskToggleBtn(obj);
    const deleteBtn = addDeleteBtn(obj);
    newTask.append(toggleBtn);
    newTask.append(deleteBtn);
    if(obj.completed) {

    } else {

    }

    showTasks.append(newTask);
  });
}
render();

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const title = taskTitle.value.trim();
  if(title.length === 0) {
    emptyList.textContent = "Please enter a task";
    console.log("Please enter a task");
    return;
  } 

  addTask(title);
  render();
});

function addTask(title) {
  const newTask = {
    id: taskId,
    title,
    completed: false,
  }
  taskId++;
  tasks.push(newTask);
}