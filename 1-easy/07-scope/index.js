console.log(this);
module.exports.nickname = "Node.js";
console.log(this);

global.age = 30;

function printAge() {
  console.log(this.age);
}

printAge();
