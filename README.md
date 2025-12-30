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
const student = {
  name: "Mario",
  siblings: ["Luigi", "Peach", "Yoshi"],

  showSiblings: () => {
    console.log(this.name);
  },
};
```

### Bind method

```js
const dog = {
  name: "Buddy",

  bark() {
    console.log(`${this.name} says Woof!`);
  },
};

// It will print "undefined says Woof!" because 'this' is not bound to the dog object in this context.
setTimeout(dog.bark, 1000);
// Fix: Use bind to ensure 'this' refers to the dog object
setTimeout(dog.bark.bind(dog), 1000);

const student = {
  first_name: "John",
  talk() {
    console.log(this.first_name, "talks");
  },
};

const teacher = {
  first_name: "Adam",
};

const bound = student.talk.bind(teacher);
bound(); // It will print "Adam talks" because 'this' is bound to the teacher object.
```

### Callback

A callback is a function that is passed to another function as an argument and called back from that function later on.

```js
function countDown(callback) {
  setTimeout(() => {
    callback("Countdown finished");
  }, 1000);
}

countDown(val => console.log(val));
```

### Var, let and const

```js
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
```

### Var

```js
var x = 20;
console.log(x); //20

function test() {
  var x = 30;
  console.log(x); //30

  if (true) {
    var x = 40;
    console.log(x); //40
  }
  console.log(x); //40
}

test();
console.log(x); //20
```

### Before declaration

```js
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
```

### Let, var and const

```js
let number = 11;

function test() {
  console.log(number); //ReferenceError
  let number = 40;
}

test();

var number = 11;

function test() {
  console.log(number); //undefined
  var number = 40;
}

test();

let number = 11;

function test() {
  console.log(number); //undefined
  var number = 40;
}

test();

middle_name = "John";
console.log(middle_name); //John
var middle_name;
```

### Anonynous vs named functions

```js
test(); //TypeError: test is not a function

var test = function () {
  console.log("Hello");
};

test(); //Hello

function test() {
  console.log("Hello");
}
```

### Closure

A closure is created when a function remembers and accesses variables from its outer (lexical) scope, even after the outer function has finished executing.

```js
function message() {
  let msg = "Friday is going to be rainy";
  let type = {
    radio: "radio message",
    tv: "TV message",
  };

  function date() {
    return new Date().toString();
  }

  function weatherForecast() {
    console.log(msg);
    console.log(type.radio);
    console.log(date());
  }

  return weatherForecast;
}

let weather = message();
weather();
```

### Code review

```js
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
```

### Express part 1

```sh
pnpm init
pnpm add express
pnpm start
```

```js
const express = require("express");
const app = express();
const port = 8000;

// localhost:8000/
app.get("/", (_req, res) => {
  res.send("Hi from an Express app");
});

app.listen(port, () => {
  console.log("Server is running");
});
```

### Nodemon

```js
const express = require("express");

const app = express();
const PORT = 8080;

app.get("/", (_req, res) => {
  res.send("Ciao Mario!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

```json
{
  "name": "21-nodemon",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "Mario Lazzari",
  "license": "ISC",
  "packageManager": "pnpm@10.26.2",
  "dependencies": {
    "express": "^5.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}
```

### Express part 2

```js
const express = require("express");

const app = express();
const port = 5000;

app.get("/", (_req, res) => {
  res.send("Hi from an Express app");
});

app.get("/test", (_req, res) => {
  res.send("<h1>this is a test</h1>");
});

app.get("/user", (req, res) => {
  console.log(req.query.id);
  res.send("this is a user route");
});

app.get("/account/:number", (req, res) => {
  const numb = +req.params.number;
  if (isNaN(numb)) {
    return res.send("server only accepts numbers");
  }
  res.send("number sent");
});

app.listen(port, () => {
  console.log("Server is running");
});
```

### SSR vs CSR

- SSR: HTML is generated on the server for each request and sent fully rendered to the browser.
- CSR: Browser downloads a minimal HTML file and JavaScript renders everything.

```js
const express = require("express");
const app = express();
const port = 5000;
// const ejs = require("ejs");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/user/:user_name", (req, res) => {
  res.send("This is backend");
  // res.render("index",{username:req.params.user_name})
});

app.listen(port, () => {
  console.log("Server is running");
});
```

### Wildcard

```js
const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/user/:user_name", (req, res) => {
  res.send("This is backend");
});

app.get("/*", (_req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log("Server is running");
});
```

### Multi imports

```js
const number = require("./counter"); // we import counter module
const number2 = require("./counter"); // it uses the same instance from above
const number3 = require("./counter"); // it uses the same instance from above

console.log(number); // 1
console.log(number2); // 1
console.log(number3); // 1
```

### Display every second

```js
const clock = () => {
  const today = new Date();
  const hh = today.getHours();
  const mm = today.getMinutes();
  const ss = today.getSeconds();
  console.log(`${hh}:${mm}:${ss}`);
};

setInterval(clock, 1000);
```

### Code assignement

```js
class Product {
  total;
  price;

  constructor(total, price) {
    this.total = total;
    this.price = price;
  }

  get stock() {
    if (this.total <= 0) {
      return "Not in Stock";
    }
    return "In Stock";
  }

  sell() {
    this.total--;
  }
}
```

### Prototype

```js
function User(age, name) {
  this.age = age;
  this.name = name;
}

User.prototype.getDetails = function () {
  return `${this.age}, ${this.name}`;
};

const tom = new User(30, "Tom");
const details = tom.getDetails();
console.log(details); // 30, Tom
```

## Intermediate questions

### Protocol

#### TCP (Transmission Control Protocol)

##### What it is

Connection-oriented and reliable.

##### Key characteristics:

- Establishes a connection (3-way handshake)
- Guarantees delivery
- Preserves packet order
- Error checking and retransmission
- Flow & congestion control
- Slower, more overhead

##### When to use TCP:

- Web browsing (HTTP/HTTPS)
- Email (SMTP, IMAP, POP3)
- File transfers (FTP, SFTP)
- Any application where accuracy matters more than speed

Example:

If you download a file, TCP ensures every byte arrives correctly and in order.

#### UDP (User Datagram Protocol)

##### What it is

Connectionless and best-effort.

##### Key characteristics:

- No connection setup
- No delivery guarantee
- No ordering guarantee
- No retransmission
- Minimal overhead
- Faster, lower latency

##### When to use UDP

- Live streaming
- Online gaming
- Voice/video calls (VoIP)
- DNS queries
- Real-time systems where speed matters more than perfect accuracy

Example:

In a video call, losing a few packets is better than waiting for retransmissions that cause lag.

### Circular dependency issue

Circular dependencies in Node.js happen when two (or more) modules require/import each other, either directly or indirectly.
This can lead to undefined values, partially initialized exports, or subtle runtime bugs.

```js
const getUser = require("./User");
console.log("from team");
console.log(getUser); //If User.js is run we get: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency

function getTeam() {
  return "coders";
}
module.exports = getTeam;
```

```js
module.exports = getUser;

const getTeam = require("./Team");
console.log("from user");

function getUser() {
  return "Adam";
}

console.log(getTeam);
```

### Event loop

The event loop is the core mechanism that allows Node.js to perform non-blocking, asynchronous operations using a single thread.

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout 2000ms");
}, 2000);

setTimeout(() => {
  console.log("Timeout 0ms");
}, 0);

console.log("End");
```

#### What problem does it solve?

JavaScript runs on a single thread, so it can only execute one thing at a time.
The event loop lets Node.js handle many concurrent operations (I/O, timers, network requests) without blocking that single thread.

High-level idea

- Node.js starts executing your script.
- When it encounters an asynchronous operation, it delegates it to the system (OS, thread pool, or kernel).
- Once the operation finishes, its callback (or promise resolution) is placed in a queue.

The event loop continuously checks these queues and executes callbacks when the call stack is empty.

Main components

1. Call Stack

- Executes synchronous JavaScript code.
- If the stack is busy, nothing else runs.

2. Node APIs / libuv

Handles async work like:

- File system operations
- Network I/O
- Timers

Implemented using libuv, a C library.

3. Callback Queues

Different types of async callbacks go into different queues.

Event loop phases (important)

The event loop runs in phases, in this order:

1. Timers phase

Executes callbacks from:

- setTimeout
- setInterval

2. Pending callbacks

Executes I/O callbacks deferred from the previous loop iteration.

3. Idle, prepare

Internal use only.

4. Poll phase

Retrieves new I/O events (e.g., incoming network data).

- Executes I/O callbacks.
- Can block here waiting for I/O if no timers are ready.

5. Check phase

Executes callbacks from:

- setImmediate

6. Close callbacks

Handles cleanup like: socket.on('close')

### Micro vs Macro task queue

In JavaScript (including Node.js and browsers), microtasks and macrotasks are two categories of asynchronous work that differ in priority and when they run in the event loop.

```js
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

process.nextTick(() => console.log("nextTick"));

console.log("end");
```

#### Macrotasks

- setTimeout
- setInterval
- setImmediate (Node.js)
- I/O callbacks (network, filesystem)
- UI rendering events (browser)

##### When do macrotasks run?

- One macrotask is taken from the queue per event loop iteration
- After it finishes, microtasks run before the next macrotask

#### Microtasks

- Promise.then / catch / finally
- async / await
- queueMicrotask
- process.nextTick (Node.js – even higher priority)

##### When do microtasks run?

- Immediately after the current JavaScript execution
- Before any macrotask
- Drained completely before the event loop continues

### OOP

```js
class Product {
  constructor(productName, id) {
    this.productName = productName;
    this.id = id;
  }
}

class Bag extends Product {
  constructor(productName, id, leatherType) {
    super(productName, id);
    this.leatherType = leatherType;
  }
}

const lucci = new Bag("Summer bag", 48320, "genuine leather");
console.log(lucci);
```

### Big files

```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Most browsers make and additional request for the favicon.ico so we want to run the code if the request isn't for favicon.ico
  // if you don't add the if check,this code runs twice
  if (req.url !== "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const readStream = fs.createReadStream("./bigtextFile.txt");
    console.log("req made");
    // pipe, pipes/connects a readable steam to a writable, so "res" object is a writable,
    // so we pipe readStream to res which is a writable
    readStream.pipe(res);
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Listening to port 5000");
});
```

### Process

#### Child process

```js
// app.js
const app = require("express")();
const { fork } = require("child_process");

app.get("/heavy", (_req, res) => {
  //spawn a new Node.js process/instance
  var child = fork(__dirname + "/count.js");
  //once the child operation is finished send the data to user
  child.on("message", myCount => {
    console.log("Sending /heavy result");
    res.send(myCount);
  });
  //send message to the child signaling that it needs to start the heavy operration
  child.send("START_COUNT");
});

app.get("/light", (req, res) => {
  res.send("Hello from light ");
});

app.listen(8000, () => console.log("Server running on port: 8000"));
```

```js
// count.js
process.on("message", msg => {
  let counter = 0;
  console.log(msg);
  while (counter < 9000000000) {
    counter++;
  }
  process.send(`${counter} finished`);
});
```

#### Cluster

```js
// app.js
const cluster = require("cluster");
const os = require("os");
const numCPUs = os.cpus().length;

//When we start the app,it will start a cluster of processes, after that,anytime someone makes a request to the server,the parent process will redirect the request to a child process
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < 6; i++) {
    //spawns child processes/instance
    cluster.fork();
  }

  cluster.on("online", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} online`);
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Starting a new order");
    cluster.fork();
  });
} else {
  //workers will share the same TCP connection on the same port
  const express = require("express");
  const app = express();

  app.get("/heavy", (req, res) => {
    let counter = 0;
    while (counter < 90000000) {
      counter++;
    }
    console.log(`Heavy request ${process.pid}`);
    res.send(`${process.pid} completed,counter is:${counter}`);
  });

  app.get("/light", (req, res) => {
    res.send("From light");
  });
  app.listen(6000, () => {
    console.log("listening to port 6000");
  });
}
```

### Worker thread

```js
// app.js
const express = require("express");
const { Worker, workerData } = require("worker_threads");

const app = express();

app.get("/heavy", (req, res) => {
  let worker = new Worker("./worker.js", { workerData: "hello" });

  worker.on("message", data => {
    console.log(data);
    console.log(worker.threadId);
    res.json({ data });
  });

  worker.on("error", err => {
    res.send("something is wrong");
    throw err;
  });
});

app.get("/light", (req, res) => {
  res.send("From light");
});

app.listen(6000, () => console.log("Listening to port 6000"));
```

```js
// worker.js
const { parentPort, workerData } = require("worker_threads");

let counter = 0;

//the workerData we get from app.js
console.log(workerData);

for (let i = 0; i < 10000000000; i++) {
  counter++;
}

parentPort.postMessage(counter);
```

### Pool

```js
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
```

```json
{
  "name": "crypto",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "SET UV_THREADPOOL_SIZE=6 && node app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "execution-time": "^1.4.1"
  }
}
```

### Authentication

- User logs in with credentials (e.g., username/password)
- Server verifies credentials
- Server creates a session and stores user info server-side
- Server sends a session ID to the browser in a cookie
- Browser sends the cookie on every request
- Server uses the session ID to identify the user

### Mono vs Micro

#### Monolithic Architecture

A single deployable application where:

- UI, business logic, and data access live in one codebase
- All modules run in the same process
- One database (usually)

#### Microservices Architecture

An application split into multiple independent services, each:

- Owns a specific business capability
- Runs in its own process
- Has its own database
- Communicates over HTTP / gRPC / messaging
