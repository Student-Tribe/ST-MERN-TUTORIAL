// Function to start countdown from a given number
function countDown(startNumber) {
  // Store current number in a variable
  let current = startNumber;

  // Run this block every 1 second
  let interval = setInterval(() => {
    console.log(current); // print current number
    current--; // decrease number by 1

    // When countdown reaches below 0, stop the timer
    if (current < 0) {
      console.log("Happy New Year!!");
      clearInterval(interval); // stop the countdown
    }
  }, 1000); // 1000 milliseconds = 1 second
}

// Start countdown from 5
countDown(5);
