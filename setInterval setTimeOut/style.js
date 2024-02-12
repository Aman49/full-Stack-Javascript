let interval = setInterval(function () {
  console.log("This will run after every 3 seconds");
}, 3000);
setTimeout(function () {
  clearInterval(interval);
  console.log("interval ended");
}, 10000);
