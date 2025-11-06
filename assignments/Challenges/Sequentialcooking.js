// Step 1: Function to boil water
function boilWater(callback) {
  console.log("Boiling water...");

  // Wait for 2 seconds to simulate boiling time
  setTimeout(() => {
    console.log("Water boiled.");
    callback(); // Call the next step (addNoodles)
  }, 2000);
}

// Step 2: Function to add and cook noodles
function addNoodles(callback) {
  console.log("Adding noodles...");

  // Wait for 3 seconds to simulate cooking noodles
  setTimeout(() => {
    console.log("Noodles cooked.");
    callback(); // Call the next step (servingNoodles)
  }, 3000);
}

// Step 3: Function to serve noodles
function servingNoodles() {
  console.log("Serving noodles...");
  console.log("Total cooking time ~ 5 seconds");
}

// Start the process by boiling water first
// When water is boiled → add noodles → then serve noodles
boilWater(() => {
  addNoodles(servingNoodles);
});
