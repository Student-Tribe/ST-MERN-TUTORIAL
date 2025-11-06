// Function to greet the user
function greetUser() {
  console.log("Welcome to Student Tribe!");
}

// Function that calls greetUser() first, then prints another message
function showMenu() {
  greetUser(); // calling greetUser() function first
  console.log("Here is your course menu!");
}

// Call the showMenu() function
showMenu();
