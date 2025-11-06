// Function to repeat a message a given number of times
function repeatMessage(message, times) {
  let count = 0; // keeps track of how many times message is printed

  // setInterval runs the code every 1 second (1000 ms)
  let interval = setInterval(() => {
    count++; // increase count each time
    console.log(message); // print the message

    // When message is printed 'times' times, stop the interval
    if (count === times) clearInterval(interval);
  }, 1000);
}

// Call the function
repeatMessage("Keep learning", 3);
