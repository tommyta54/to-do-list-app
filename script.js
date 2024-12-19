// script.js

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task element
  const taskItem = document.createElement('li');
  taskItem.className = 'task';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  // Mark task as completed on click
  taskContent.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Delete task on button click
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  // Append elements to the task item
  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteBtn);

  // Append task item to the list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';
});
