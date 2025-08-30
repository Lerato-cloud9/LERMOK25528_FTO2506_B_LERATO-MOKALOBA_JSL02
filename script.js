//Prompt user for 2 tasks with (title, description, status)

//=======Task 1 ========
let title = prompt("Enter Task 1 title:");
let description =prompt("Enter Task 1 description:");
let status =prompt("Enter Task 1 status:");

//Converting status inputs to lowercase
task1Status = task1Status.toLowerCase();

//Validation for status input
let task1Status = prompt("Enter Task 1 status (todo, doing, done):");
alert("Invalid status! Please enter todo, doing, or done.");