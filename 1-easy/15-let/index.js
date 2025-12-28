function test() {
  console.log(number); //undefined
  var number = 11;
}

test();

function test() {
  console.log(number); //ReferenceError
  let number = 11;
}

test();

function test() {
  console.log(number); //33
}

var number = 33;
test();

function test() {
  console.log(number); //33
}

let number = 33;
test();

let number = 40;

function test() {
  console.log(number); //40
}

test();

function test() {
  console.log(number); //undefined
}

test();

var number = 40;

function test() {
  console.log(number); //ReferenceError
}

test();

let number = 40;
