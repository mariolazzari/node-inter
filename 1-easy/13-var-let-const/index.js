{
  let first_name = "John";
  const last_name = "Doe";
  var middle_name = "smith";
}

console.log(middle_name);
console.log(first_name); // ReferenceError: first_name is not defined;
console.log(last_name); // ReferenceError: last_name is not defined;

let x = 20;
console.log(x); //20

function test() {
  let x = 30;
  console.log(x); //30

  if (true) {
    let x = 40;
    console.log(x); // 40
  }
  console.log(x); // 30
}

test();
console.log(x); // 20
