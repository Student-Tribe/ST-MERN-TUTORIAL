// Function that waits for a given time and then prints a message
function waitAndSay(message, delay) {
  // setTimeout() runs the code inside after 'delay' milliseconds
  setTimeout(() => {
    console.log(message);
  }, delay);
}

// Call the function with different messages and delays
waitAndSay("Good Morning!", 1000);   // prints after 1 second
waitAndSay("Good Afternoon!", 2000); // prints after 2 seconds
waitAndSay("Good Night!", 3000);     // prints after 3 seconds
