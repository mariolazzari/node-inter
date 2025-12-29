console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

process.nextTick(() => console.log("nextTick"));

console.log("end");
