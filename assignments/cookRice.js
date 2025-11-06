// Function to simulate cooking rice
function cookRice(callback) {
  console.log("Cooking rice...");

  // Wait for 2 seconds to simulate cooking time
  setTimeout(() => {
    console.log("Rice ready!");
    callback(); // Call the next step (eatRice)
  }, 2000);
}

// Function to simulate eating rice
function eatRice() {
  console.log("Eating now");
}

// Start by cooking rice, and after it's ready, call eatRice()
cookRice(eatRice);
