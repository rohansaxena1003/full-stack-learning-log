/*
Write JavaScript that:
1. Handles the form’s submit event.
2. Prevents the page refresh.
3. Trims the task title.
4. Displays an error if the title is empty.
5. Displays an error if the title has fewer than three characters.
6. Displays an error if no priority is selected.
7. Reads the checkbox using .checked.
8. Creates a task object after valid submission.
9. Displays the task title and priority.
10. Resets and focuses the form after success.
Attempt it before checking the answer.
*/

const form = document.querySelector("#task-form");

const taskTitle = document.querySelector("#title");
const priority = document.querySelector("#priority");
const result = document.querySelector("#result");
const checkbox = document.querySelector("#important");

const titleError = document.querySelector("#title-error");
const priorityError = document.querySelector("#priority-error");

// console.log(taskTitle);
// console.log(form);


// console.log(document.querySelector("body"));
// 1
form.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault(); // 2

  let isValid = true; // check if all inputs are valid

  const title = taskTitle.value.trim(); // 3
  
  if(title.length === 0) { // 4
    titleError.textContent = "Title is empty";
    isValid = false;
  } else if(title.length < 3) { // 5
    titleError.textContent = "Title needs atleast 3 characters";
    isValid = false;
  }

  if(priority.value.length === 0) { // 6
    priorityError.textContent = "No priority selected";
    isValid = false;
  }
  
  const isSelected = checkbox.checked; // 7

  
  if(!isValid) {
    // form.reset();
    return;
  }

  // 8
  const formData = new FormData(form);

  const taskData = {
    Title: formData.get("title"),
    Priority: formData.get("priority"),
    Important: (isSelected ? "Yes" : "No"),
  };

  // 9
  result.textContent = `Title is ${taskData.Title} and priority is ${taskData.Priority}`;

  // 10
  form.reset();
  taskTitle.focus();
}