const text = "Hello people";

const len = text.length;
console.log(`Text lenght: ${len}`);

let fourth = text[3];
console.log(`4th char: ${fourth}`);
fourth = text.slice(3, 4);
fourth = text.charAt(3);
console.log(`4th char: ${fourth}`);
