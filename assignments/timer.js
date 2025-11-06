// Function to start a countdown from 5
function startCountdown() {
  let count = 5; // starting number

  // Run this block every 1 second
  let timer = setInterval(() => {
    console.log(count); // print current count
    count--; // decrease the count by 1

    // When count reaches 0, stop the timer
    if (count === 0) {
      console.log("Time's up!");
      clearInterval(timer); // stop repeating
    }
  }, 1000); // interval of 1000 milliseconds = 1 second
}

// Call the function
startCountdown();
