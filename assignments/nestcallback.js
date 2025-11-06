// Function to make tea (takes 2 seconds)
function makeTea(callback) {
  setTimeout(() => {
    console.log("Tea ready!");
    callback(); // Call the next function (serveTea)
  }, 2000);
}

// Function to serve tea (takes 1 second)
function serveTea(callback) {
  setTimeout(() => {
    console.log("Serving tea...");
    callback(); // Call the final function (drinkTea)
  }, 1000);
}

// Final function to drink tea
function drinkTea() {
  console.log("Drinking tea");
}

// Start the sequence:
// 1. makeTea → after 2s
// 2. serveTea → after 1s
// 3. drinkTea → immediately after serving
makeTea(() => {
  serveTea(drinkTea);
});
