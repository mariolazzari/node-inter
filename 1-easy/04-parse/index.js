const mario = {
  name: "Mario Lazzari",
  age: 50,
  skills: ["JavaScript", "Node.js", "React"],
};

const marioJson = JSON.stringify(mario, null, 2);
console.log(marioJson);

const marioParsed = JSON.parse(marioJson);
console.log(marioParsed);
