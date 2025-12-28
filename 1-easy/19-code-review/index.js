function counterVar() {
  for (var i = 1; i <= 3; i++) {
    console.log(`VAR - i is ${i} outside of setTimeout`);
    setTimeout(function () {
      console.log("VAR", i);
    }, i * 1000);
  }
}

function counterLet() {
  for (let i = 1; i <= 3; i++) {
    console.log(`LET - i is ${i} outside of setTimeout`);
    setTimeout(function () {
      console.log("LET", i);
    }, i * 1000);
  }
}

counterVar();
counterLet();
