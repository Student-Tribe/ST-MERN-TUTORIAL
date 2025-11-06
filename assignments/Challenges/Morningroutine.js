// Each function represents one morning task
// It takes a callback (next step) to run after a delay

function wakeUp(callback) {
  console.log("Waking up...");
  setTimeout(() => {
    console.log("Done waking up!");
    callback(); // move to next step
  }, 1000); // after 1 second
}

function brushTeeth(callback) {
  console.log("Brushing teeth...");
  setTimeout(() => {
    console.log("Done brushing!");
    callback();
  }, 2000); // after 2 seconds
}

function eatBreakfast(callback) {
  console.log("Eating breakfast...");
  setTimeout(() => {
    console.log("Done eating!");
    callback();
  }, 3000); // after 3 seconds
}

function leaveForCollege() {
  console.log("Leaving for college...");
  setTimeout(() => {
    console.log("Reached college!");
  }, 1000); // after 1 second
}

//  Chain all tasks in order
wakeUp(() => brushTeeth(() => eatBreakfast(leaveForCollege)));
