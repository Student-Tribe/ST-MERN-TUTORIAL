// Array of driver objects
const DRIVERS = [
  { id: "D001", name: "Arjun", available: true },
  { id: "D002", name: "Meera", available: true },
  { id: "D003", name: "Rahul", available: false }
];

// Array of rider objects
const RIDERS = [
  { id: "R001", name: "Hari", walletBalance: 1000 },
  { id: "R002", name: "Reethu", walletBalance: 200 }
];

// Empty array to store ride details
let RIDES = [];

// FUNCTION 1 — Match first available driver
function matchDriver(drivers) {
  return drivers.find(driver => driver.available === true) || null;
}

// FUNCTION 2 — Calculate fare
function calculateFare(distance, ratePerKm) {
  return distance * ratePerKm;
}

// FUNCTION 3 — Process payment
function processPayment(rider, fare) {
  if (rider.walletBalance >= fare) {
    return { ...rider, walletBalance: rider.walletBalance - fare };
  } else {
    return null;
  }
}

// FUNCTION 4 — Create ride object
function createRide(rider, driver, distance, fare) {
  return {
    rideId: String(RIDES.length + 1).padStart(3, "0"),
    riderId: rider.id,
    driverId: driver.id,
    distance: distance,
    fare: fare,
    status: "CONFIRMED"
  };
}

// FUNCTION 5 — Save ride and update driver availability
function saveRide(rides, ride, driver) {
  const updatedRides = [...rides, ride];
  const updatedDriver = { ...driver, available: false };
  return { rides: updatedRides, driver: updatedDriver };
}

// MAIN FUNCTION — Request a ride
function requestRide(riderId, distance) {
  console.log("Ride request received!");

  const rider = RIDERS.find(r => r.id === riderId);
  if (!rider) {
    console.log("Rider not found");
    return;
  }

  const driver = matchDriver(DRIVERS);
  if (!driver) {
    console.log("No drivers available");
    return;
  }

  const fare = calculateFare(distance, 20);
  const updatedRider = processPayment(rider, fare);
  if (!updatedRider) {
    console.log("Insufficient funds");
    return;
  }

  const newRide = createRide(updatedRider, driver, distance, fare);
  const { rides: updatedRides, driver: updatedDriver } = saveRide(RIDES, newRide, driver);

  RIDES = updatedRides;

  console.log("Ride Confirmed:");
  console.log(newRide);
  console.log(`Rider new balance: ${updatedRider.walletBalance}`);
  console.log(`Driver ${updatedDriver.name} availability: ${updatedDriver.available}`);

  return { newRide, updatedRider, updatedDriver };
}
requestRide("R001", 10);  // Should succeed
console.log("-----------");
requestRide("R002", 20);  // Should fail (insufficient funds)
console.log("-----------");
requestRide("R001", 5);   // Should fail (no drivers available)


