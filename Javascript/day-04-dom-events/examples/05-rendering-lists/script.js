let nextTaskId = 4;

let tasks = [
    {
        id: 1,
        title: "Study DOM selection",
        completed: true
    },
    {
        id: 2,
        title: "Study events",
        completed: false
    },
    {
        id: 3,
        title: "Practise rendering",
        completed: false
    }
];

let currentFilter = "all";

const form = document.querySelector("#task-form");

const titleInput = document.querySelector("#task-title");

const taskList = document.querySelector("#task-list");

const remainingDisplay = document.querySelector("#remaining-count");

const filterButtons = document.querySelectorAll("[data-filter]");

function getVisibleTasks() {
    if (currentFilter === "active") {
        return tasks.filter((task) => {
            return !task.completed;
        });
    }

    if (currentFilter === "completed") {
        return tasks.filter((task) => {
            return task.completed;
        });
    }

    return tasks;
}

function toggleTask(taskId) {
    tasks = tasks.map((task) => {
        if (task.id === taskId) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });

    renderTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter((task) => {
        return task.id !== taskId;
    });

    renderTasks();
}

function createTaskElement(task) {
    const listItem = document.createElement("li");
    const title = document.createElement("span");
    const toggleButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    listItem.classList.add("task");
    listItem.dataset.id = task.id;

    if (task.completed) {
        listItem.classList.add("completed");
    }

    title.textContent = task.title;
    title.classList.add("task-title");

    toggleButton.type = "button";

    toggleButton.textContent = task.completed ? "Mark active" : "Complete";

    deleteButton.type = "button";
    deleteButton.textContent = "Delete";

    toggleButton.addEventListener("click", () => {
        toggleTask(task.id);
    });

    deleteButton.addEventListener("click", () => {
        deleteTask(task.id);
    });

    listItem.append(
        title,
        toggleButton,
        deleteButton
    );

    return listItem;
}

function renderTasks() {
    taskList.replaceChildren();

    const visibleTasks = getVisibleTasks();

    if (visibleTasks.length === 0) {
        const emptyMessage =
            document.createElement("li");

        emptyMessage.textContent =
            "No tasks in this category.";

        emptyMessage.classList.add(
            "empty-message"
        );

        taskList.append(emptyMessage);
    } else {
        visibleTasks.forEach((task) => {
            const taskElement =
                createTaskElement(task);

            taskList.append(taskElement);
        });
    }

    const remainingTasks = tasks.filter((task) => {
        return !task.completed;
    }).length;

    remainingDisplay.textContent =
        `${remainingTasks} tasks remaining`;

    filterButtons.forEach((button) => {
        const isSelected =
            button.dataset.filter === currentFilter;

        button.classList.toggle(
            "selected",
            isSelected
        );
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();

    if (title === "") {
        return;
    }

    const newTask = {
        id: nextTaskId,
        title,
        completed: false
    };

    tasks = [...tasks, newTask];
    nextTaskId++;

    renderTasks();

    form.reset();
    titleInput.focus();
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        renderTasks();
    });
});

renderTasks();