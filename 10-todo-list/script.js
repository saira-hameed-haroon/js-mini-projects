const taskInput = document.querySelector(".taskInput");
const addTaskBtn = document.querySelector(".addTaskBtn");
const errorMsg = document.querySelector(".errorMsg");
const taskList = document.querySelector(".taskList");

// Create a new task item 
function createTask(taskText) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = taskText;

    // Create delete button for each task 
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = " X";
    deleteBtn.setAttribute("aria-label", "Delete Task");

    // Remove task on delete 
    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasts();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    // Enable drag and drop for task 
    makeDraggable(li);
    taskList.appendChild(li);
}

// Handle add task button click 
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    // Prevent adding empty tasks 
    if (taskText === "") {
        errorMsg.innerText = "Please add a task";
        return;
    }
    createTask(taskText);
    saveTasts();
    taskInput.value = "";
});

// Store currently dragged task 
let draggedTask = null;

// Make a task draggable 
function makeDraggable(li) {
    li.draggable = true;

    // Store a task being dragged 
    li.addEventListener("dragstart", () => {
        draggedTask = li;
    });

    // Allow dropping by preventing default behavior
    li.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    // Reorder tasks on drop 
    li.addEventListener("drop", () => {
        taskList.insertBefore(draggedTask, li);
        saveTasts();
    });
}

// Save tasks to localStorage
function saveTasts() {
    const tasks = [];
    document.querySelectorAll("li span").forEach(span => {
        tasks.push(span.innerText);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage on page load 
window.addEventListener("load", loadTasks);
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTask(task));
}