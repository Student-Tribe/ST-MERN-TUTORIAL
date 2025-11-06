// Function to show current time
function showTime() {
  // Create a new Date object to get current time
  const now = new Date();

  // Get hours, minutes, and seconds, and format them to 2 digits
  let h = now.getHours().toString().padStart(2, "0");
  let m = now.getMinutes().toString().padStart(2, "0");
  let s = now.getSeconds().toString().padStart(2, "0");

  // Print the time in HH:MM:SS format
  console.log(`${h}:${m}:${s}`);
}

// Call showTime() every 1 second
const clock = setInterval(showTime, 1000);

// Stop the clock after 10 seconds
setTimeout(() => {
  clearInterval(clock); // stops the setInterval loop
  console.log("Clock stopped ");
}, 10000);
