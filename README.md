# Mastering Node.js by answering top interview questions

## Easy level questions

### What is a module

In Node.js, a module is a self-contained file that encapsulates code (functions, objects, variables).
Each file is treated as a separate module.
Modules help organize code, promote reusability, and avoid polluting the global scope.

### Cli

How to receive CLI arguments from a Node.js program?
Write a program that gets a cli argument called double and a number following it or an argument called modulo followed by two separate numbers, if the argument is double, then multiply the number passed by 2, if the argument is modulo calculate modulo of two numbers passed and show the output.

To receive CLI arguments we use, process.argv[] which is an array that returns the arguments

```js
const third = process.argv[2];
const fourth = process.argv[3];
const fifth = process.argv[4];

if (third === "double") {
  console.log(fourth * 2);
}
if (third === "modulo") {
  console.log(fourth % fifth);
}
```

### How to convert object to JSON string

```js
const mario = {
  name: "Mario Lazzari",
  age: 50,
  skills: ["JavaScript", "Node.js", "React"],
};

const marioJson = JSON.stringify(mario, null, 2);
console.log(marioJson);
```

### Convert JSON string to object

```js
const mario = {
  name: "Mario Lazzari",
  age: 50,
  skills: ["JavaScript", "Node.js", "React"],
};

const marioJson = JSON.stringify(mario, null, 2);
console.log(marioJson);

const marioParsed = JSON.parse(marioJson);
console.log(marioParsed);
```

### This 1

```js
const student = {
  firstName: "John",
  lastName: "Doe",

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
```

### Loosing scope

```js
const student = {
  firstName: "John",
  lastName: "Doe",

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const getFullName = student.getFullName;
console.log(getFullName());

const { getFullName: getFullNameCorrect } = student;
console.log(getFullNameCorrect.call(student));
```

### Scope questions

```js
console.log(this); // {}
module.exports.nickname = "Node.js";
console.log(this); // { nickname: 'Node.js' }

global.age = 30;

function printAge() {
  console.log(this.age);
}

printAge(); // 30
```

### This part 2

```js
const student = {
  name: "Mario",
  siblings: ["Luigi", "Peach", "Yoshi"],

  // This would not work because 'this' inside the function does not refer to the student object
  //   showSiblings() {
  //     this.siblings.forEach(function (sibling) {
  //       console.log(`${this.name} has a sibling named ${sibling}`);
  //     });
  //   },

  showSiblings() {
    this.siblings.forEach(sibling => {
      console.log(`${this.name} has a sibling named ${sibling}`);
    });
  },
};
```

### Rules you must know

1. In a normal function / function declaration / named function, "this" keyword refers to the object that the function is called on.
2. Arrow functions do not have their own bindings, so when "this" is accesses inside an arrow function, it is taken from outside.
3. when "this" keyword is used in a named function/function declaration, the "this" keyword is equal to the global object as long as the named function is in the global scope and not called on any object.
4. In the global scope the "this" keyword refers to module.exports object
5. In a function expression in the global scope, this keyword refers to module.exports object.

```js
// rule 1
const obj_one = {
  name: "John",
  one() {
    console.log(this.name);
  },
};

obj_one.one();

// rule 2
const obj_two = {
  name: "Adam",
  two() {
    [1, 2].forEach(() => {
      console.log(this.name);
    });
  },
};

obj_two.two();

// rule 3
function three() {
  console.log(this);
}

three();

module.exports.student = "John";

//rule 4
console.log(this);

//rule 5
const arrowFunc = () => {
  console.log(this);
};

arrowFunc();
```

### This part 3

```js

```
