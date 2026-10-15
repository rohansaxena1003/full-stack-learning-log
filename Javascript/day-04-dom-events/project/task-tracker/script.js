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
4	Complete and delete   using event delegation	25–35 min
5	Filters and remaining active-task count	15–20 min
6	Save and restore tasks with localStorage	20–30 min
7	Browser testing and basic styling	15–25 min


Keep the array as your source of truth. When a task changes, update the array → save it → render the screen. Changing the filter only changes what you display.
Start with Step 1: the HTML structure. You need a labelled task input, an Add button, three filter buttons, a task-list container, and a place for the remaining count. Run it in your browser through Live Server, as with the earlier DOM exercises.

*/

let tasks = [
  {
    id: 1,
    title: "Practice DOM events",
    completed: false
  }
];
let savedTasks = localStorage.getItem("taskItems");
tasks = savedTasks ? JSON.parse(savedTasks) : tasks;
let taskId = tasks.length + 1;
localStorage.setItem("taskItems", JSON.stringify(tasks));


const taskForm = document.querySelector("#task-form");
const taskTitle = document.querySelector("#title");
const filterTasks = document.querySelector("#filter-tasks");
const showAll = document.querySelector("#show-all");
const showActive = document.querySelector("#show-active");
const showCompleted = document.querySelector("#show-completed");
const showTasks = document.querySelector("#show-tasks");
const emptyList = document.querySelector("#empty-list");
const activeTaskCountDisplay = document.querySelector("#active-task-count");

function createTask(task) {
  const newTask = document.createElement("p");
  newTask.textContent = `${task.id}. ${task.title.trim()}`;
  const taskStatus = document.createElement("p");

  taskStatus.textContent = `taskCompleted: ${task.completed ? "YES" : "NO"}`;
  newTask.append(taskStatus);
  newTask.dataset.id = task.id;
  return newTask;
}

function addTaskToggleBtn(obj) {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Button";
  toggleBtn.dataset.action = "toggle";
  return toggleBtn;
}

function addDeleteBtn(obj) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete task";
  deleteBtn.dataset.action = "delete";
  return deleteBtn;
}

function render() {
  showTasks.replaceChildren();
  tasks = JSON.parse(localStorage.getItem("taskItems"));
  console.log(tasks);
  if(tasks.length === 0) {
    emptyList.textContent = "List is empty";
  }
  tasks.forEach(obj => {
    // console.log(obj);
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

  activeTasks();
}


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
  localStorage.setItem("taskItems", JSON.stringify(tasks));
} 

showTasks.addEventListener("click", (event) => {
  console.log(event.target.parentElement);
  const clickEventId = event.target.parentElement.dataset.id;
  if(event.target.dataset.action === "toggle") {
    toggleTask(clickEventId);
  } else if(event.target.dataset.action === "delete") {
    deleteTask(clickEventId);
  }
  console.log(event.target);
  localStorage.setItem("taskItems", JSON.stringify(tasks));
  render();
});

function toggleTask(id) {
  // console.log("cc", id)
  tasks.forEach(task => {
    // console.log(task.id);
    if(task.id == id) {
      console.log(task);
      task.completed = !task.completed;
    }
  });
}

function deleteTask(id) {
  console.log("dd", id);
  tasks = tasks.filter(task => task.id != id);
  taskId--;
}


filterTasks.addEventListener("click", (event) => {
  const eventId = event.target.id;
  displayFilterTasks(eventId);
});

function displayFilterTasks(eventId) {
  let filteredTasks;
  if(eventId == "show-all") {
    filteredTasks = tasks;
  } else if(eventId == "show-active") {
    console.log("2");
    filteredTasks = tasks.filter(task => {
      return !task.completed;
    });
    
  } else if(eventId == "show-completed") {
    console.log("3");
    filteredTasks = tasks.filter(task => {
      return task.completed;
    });
  } else {
    return;
  }
  const originalTasks = localStorage.getItem("taskItems");
  
  localStorage.setItem("taskItems", JSON.stringify(filteredTasks));

  render();

  localStorage.setItem("taskItems", originalTasks);
  tasks = JSON.parse(originalTasks);
  activeTasks();

}

function activeTasks() {
  const count = tasks.filter(task => {
    return !task.completed;
  }).length;
  activeTaskCountDisplay.textContent = `${count} tasks remaining`;
}

render();






































