async function longRunningTask() {
  // Simulating a long-running task with a loop
  const startTime = Date.now();
  while (Date.now() - startTime < 2500) {
    // Loop for 2 seconds
  }
  console.log("3rd-service loaded");
}
longRunningTask();
