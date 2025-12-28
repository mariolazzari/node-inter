function countDown(callback) {
  setTimeout(() => {
    callback("Countdown finished");
  }, 1000);
}

countDown(val => console.log(val));
