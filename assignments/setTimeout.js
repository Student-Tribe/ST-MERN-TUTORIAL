// Function to simulate washing clothes
function washClothes(callback) {
  console.log("Washing clothes...");

  // Wait for 3 seconds to simulate washing time
  setTimeout(() => {
    console.log("Done washing!");
    callback(); // Call the next function (dryClothes)
  }, 3000);
}

// Function to simulate drying clothes
function dryClothes() {
  console.log("Drying clothes...");
}

// Start the process:
// First wash the clothes, then dry them
washClothes(dryClothes);
