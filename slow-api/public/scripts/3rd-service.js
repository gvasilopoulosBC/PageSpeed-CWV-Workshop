async function longRunningTask() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  // Simulating a long-running task with a loop
  const startTime = Date.now();
  while (Date.now() - startTime < 2000) {
    // Loop for 2 seconds
  }
  console.log("3rd-service loaded");
}
longRunningTask();
