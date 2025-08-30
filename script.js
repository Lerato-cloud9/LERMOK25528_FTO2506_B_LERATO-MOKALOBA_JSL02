//Prompt user for 2 tasks with (title, description, status)

//=======Task 1 ========
let Task1Title = prompt("Enter Task 1 title:");
let Task1Description =prompt("Enter Task 1 description:");
let Task1Status =prompt("Enter Task 1 status:");

//Converting status inputs to lowercase
Task1Status = Task1Status.toLowerCase();

//Validation for status input
while (Task1Status !== "todo" && task2Status !== "doing" && task2Status !== "done") {
  alert("Invalid status! Please enter todo, doing, or done."); // tell user it's wrong
  Task1Status = prompt("Enter Task 1 status again (todo, doing, done):").toLowerCase(); // ask again
}

//=======Task 2 ========
let Task2Title = prompt("Enter Task 2 title:");
let Task2Description =prompt("Enter Task 2 description:");
let Task2Status =prompt("Enter Task 2 status:");

//Converting status inputs to lowercase
Task2Status = Task2Status.toLowerCase();

//Validation for status input
while (Task2Status !== "todo" && task2Status !== "doing" && task2Status !== "done") {
  alert("Invalid status! Please enter todo, doing, or done."); // tell user it's wrong
  Task2Status = prompt("Enter Task 2 status again (todo, doing, done):").toLowerCase(); // ask again
}

//Put task in a list
let tasks = [
  { title: Task1Title, description: Task1Description, status: task1Status },
  { title: Task2Title, description: Task2Description, status: task2Status }
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