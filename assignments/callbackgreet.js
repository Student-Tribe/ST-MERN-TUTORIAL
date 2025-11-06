// Function that takes a name and a callback function
function greet(name, callback) {
  // Print greeting message
  console.log(`Hello ${name}`);

  // Call the callback function
  callback();
}

// Callback function that prints another message
function sayHi() {
  console.log("Have a nice day!!");
}

// Call greet() and pass sayHi as the callback
greet("Hari", sayHi);
