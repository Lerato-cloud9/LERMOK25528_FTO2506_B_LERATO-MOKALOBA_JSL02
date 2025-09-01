//Prompt user for 2 tasks with (title, description, status)

//=======Task 1 ========
let task1Title = prompt("Enter Task 1 title:");
let task1Description =prompt("Enter Task 1 description:");
let task1Status =prompt("Enter Task 1 status:");

//Converting status inputs to lowercase
task1Status = task1Status.toLowerCase();

//Validation for status input
while (task1Status !== "todo" && task1Status !== "doing" && task1Status !== "done") {
  alert("Invalid status! Please enter todo, doing, or done."); 
  task1Status = prompt("Enter Task 1 status again (todo, doing, done):").toLowerCase(); 
}

//=======Task 2 ========
let task2Title = prompt("Enter Task 2 title:");
let task2Description =prompt("Enter Task 2 description:");
let task2Status =prompt("Enter Task 2 status:");

//Converting status inputs to lowercase
task2Status = task2Status.toLowerCase();

//Validation for status input
while (task2Status !== "todo" && task2Status !== "doing" && task2Status !== "done") {
  alert("Invalid status! Please enter todo, doing, or done."); 
  task2Status = prompt("Enter Task 2 status again (todo, doing, done):").toLowerCase(); 
}

//Put task in a Array
let tasks = [
  { title: task1Title, description: task1Description, status: task1Status },
  { title: task2Title, description: task2Description, status: task2Status }
];

// check if there are completed tasks

let completedTasks = tasks.filter(function(task) {
  return task.status === "done";
});

// Show results in the console
if (completedTasks.length > 0) {
  console.log("Completed Tasks:");
  completedTasks.forEach(function(task) {
  console.log("Title: " + task.title + ", Status: " + task.status);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}