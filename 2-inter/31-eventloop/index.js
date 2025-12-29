console.log("Start");

setTimeout(() => {
  console.log("Timeout 2000ms");
}, 2000);

setTimeout(() => {
  console.log("Timeout 0ms");
}, 0);

console.log("End");
