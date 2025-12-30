const crypto = require("crypto");
const execTime = require("execution-time")();

function callCrypto() {
  execTime.start();
  crypto.pbkdf2("someSecret", "salt", 500000, 512, "sha512", (_err, key) => {
    console.log(key);
    console.log(execTime.stop());
    console.log("-------------------");
  });
}

callCrypto();
callCrypto();
callCrypto();
callCrypto();
callCrypto();
callCrypto();
