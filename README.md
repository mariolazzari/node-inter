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

## Advanced questions

### Observer pattern

The Observer Pattern is a behavioral design pattern used when an object (the subject) needs to automatically notify multiple other objects (observers) when its state changes.

```js
const { EventEmitter } = require("events");

class Category extends EventEmitter {
  constructor(category_name) {
    super();
    this.category_name = category_name;
    this.discount_amount = 0;
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  discount(discount_amount) {
    this.discount_amount = discount_amount;
    // create emitter called discount and send message to observers
    this.observers.forEach(observer => {
      this.emit(
        "discount",
        `${observer.client_name} there is ${this.discount_amount}% discount on ${this.category_name}`
      );
    });
  }

  noDiscount() {
    // remove the observer from subscribers
    this.observers.forEach(observer => {
      this.emit(
        "nodiscount",
        `${observer.client_name} discount on ${this.category_name} is over`
      );
    });
  }
}
```

### Pattern groups

Design patterns are commonly grouped into three main types based on the kind of problem they solve

#### Creational Patterns

Focus on object creation, making systems independent of how objects are created, composed, and represented.

- Singleton – Ensures only one instance of a class exists
- Factory Method – Creates objects without specifying the exact class
- Abstract Factory – Creates families of related objects
- Builder – Constructs complex objects step by step
- Prototype – Creates new objects by cloning existing ones

Used when object creation logic is complex or needs flexibility.

#### Structural Patterns

Deal with object composition and relationships between classes or objects.

- Adapter – Converts one interface into another
- Bridge – Separates abstraction from implementation
- Composite – Treats individual objects and compositions uniformly
- Decorator – Adds behavior dynamically
- Facade – Provides a simplified interface to a complex system
- Flyweight – Reduces memory usage by sharing objects
- Proxy – Controls access to another object

Used to simplify structure and improve maintainability.

#### Behavioral Patterns

Focus on communication and responsibility between objects.

- Chain of Responsibility – Passes requests along a chain
- Command – Encapsulates requests as objects
- Interpreter – Defines grammar and interprets sentences
- Iterator – Traverses collections uniformly
- Mediator – Centralizes communication between objects
- Memento – Captures and restores object state
- Observer – Notifies dependent objects of changes
- State – Changes behavior based on internal state
- Strategy – Selects algorithms at runtime
- Template Method – Defines algorithm skeleton
- Visitor – Adds operations without modifying objects

Used to manage complex workflows and interactions.

### Factory pattern

The Factory Design Pattern is a creational design pattern that provides an interface for creating objects without specifying the exact class of object that will be created.
Instead of calling constructors directly, you delegate object creation to a factory.

- Object creation logic is complex
- You want to decouple object creation from usage
- You expect to add new types in the future
- You want to follow Open/Closed Principle (open for extension, closed for modification)

### Singleton pattern

The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global access point to that instance.

- Private constructor – prevents direct instantiation.
- Static instance – holds the single object.
- Public access method – returns the same instance every time.

### MVC

The MVC Pattern (Model–View–Controller) is an architectural design pattern that separates an application into three interconnected components to improve maintainability, scalability, and testability.

- Model: Represents the business logic and data
- View: Represents the user interface
- Acts as an intermediary between Model and View

### In memory

```js
const express = require("express");
const axios = require("axios");
const Redis = require("redis");
// For testing purposes, enable cors,why? If for example you make a request from a frontend running http://localhost:3000 to this backend server that is running on port 5000, we will get a CORS error
const cors = require("cors");

const app = express();

app.use(cors());
let redisClient;

//self-invoked async function that runs immediately
(async () => {
  //default port is 6379 when not provided
  redisClient = Redis.createClient();
  redisClient.on("error", err => {
    console.log("Redis client error", err);
    process.exit(1);
  });
  await redisClient.connect();
  console.log("Redis client connected successfully");
})();

app.get("/users", async (req, res) => {
  try {
    // If a key called users exists in redis,then get the data
    const users = await redisClient.get("users");
    if (users) {
      console.log("Served from Redis");
      // users is a JSON string type and we convert it to JS object and pass it to res.json so the client receives a proper JSON
      return res.json(JSON.parse(users));
    } else {
      console.log("Served from github");
      // if the server responses with json data, then axios converts the data to a Javascript object
      const { data } = await axios.get(
        "https://raw.githubusercontent.com/iso1983/addresses/main/APIdatafiltered.json"
      );
      //save key called users in redis with the data
      //1 hour = 3600 seconds , 1 day = 24 * 3600 = 86400 seconds,redis accepts string, data is type of JS object so save it as json string using JSON.stringify
      redisClient.set("users", JSON.stringify(data), { EX: 86400 });
      return res.json(data);
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => console.log("Listening"));
```

## Dependency injection

### MongoDB

[MongoDB](https://www.mongodb.com/)

### Service repository pattern

Dependency Injection is a technique where an object receives its dependencies from the outside instead of creating them itself.

```ts
class OrderService {
    private readonly OrderRepository repo;

    public OrderService(OrderRepository repo) {
        this.repo = repo;
    }
}
```

- Loose coupling
- Easier testing (mock dependencies)
- Easier to change implementations
- Better separation of concerns

#### Repository Pattern

The Repository pattern abstracts data access logic and presents a collection-like interface to the domain or service layer.

```ts
interface OrderRepository {
  findById: (id: string) => Order;
  save: (order: Order) => void;
}
```

- Encapsulate database logic
- Avoid leaking SQL/ORM details
- Make persistence interchangeable

#### Service pattern

A Service contains business logic and coordinates repositories and other services.

```ts
class OrderService {
  private readonly repo: OrderRepository;

  public OrderService(repo: OrderRepository) {
    this.repo = repo;
  }

  public placeOrder(order: Order): void {
    // business rules
    repo.save(order);
  }
}
```

## AWS

### Serverless

Serverless usually refers to a cloud computing model where you run code without managing servers. The servers still exist—but the cloud provider handles provisioning, scaling, patching, and availability for you.

- You write code, deploy it, and define when it runs
- The cloud provider runs it on demand
- You pay only for execution time, not idle servers
- Automatic scaling (from zero to millions of requests)

#### Common serverless components

Functions as a Service (FaaS)

- AWS Lambda
- Azure Functions
- Google Cloud Functions

#### Managed backend services (often considered part of serverless)

- Databases: DynamoDB, Firestore
- Auth: Cognito, Firebase Auth
- Storage: S3, Cloud Storage
- APIs: API Gateway

#### Typical use cases

- REST or GraphQL APIs
- Background jobs & cron tasks
- Event processing (file uploads, queues, streams)
- Webhooks
- Microservices

#### Pros

- No server management
- Scales automatically
- Cost-efficient for variable traffic
- Faster development & deployment

#### Cons

- Cold starts (latency on first run)
- Vendor lock-in risk
- Harder local debugging
- Not ideal for long-running or stateful processes

```js
export const handler = async event => {
  if (event.path === "/api/product") {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        prdName: "monitor",
        price: "300$",
      }),
    };
    return response;
  } else {
    // Return a 404 error if the request path is not recognized
    const response = {
      statusCode: 404,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Not Found" }),
    };

    return response;
  }
};
```

## Data structure

### String 1

How to calculate the length of the string above?
Show 2 different ways two get the fourth letter from the string above.

```js
const text = "Hello people";
console.log(text.length);
console.log(text.charAt(3));
console.log(text[3]);
```

### String 2

How to display all the characters from e to r from the text above?
Show two different ways

```js
const text = "Hello world";

console.log(text.slice(1, 9));
console.log(text.substring(1, 9));
```

### String 3

How do we get the index of the second 'o' letter from the text above?

```js
const text = "Hello world";
// indexOf built-in method gives us the index of the first occurrence of the letter 'o'
// to get the second letter 'o' , we can use indexOf twice
const firstIndex = text.indexOf("o");
// Adding 1 allows us to start from the next position of the first letter 'o'
console.log(text.indexOf("o", firstIndex + 1));
```

### String 4

```JS
const text = " Hello woRld ";

//Turn all the letters of the text on line 1 to lower case
console.log(text.toLowerCase());
//Turn all the letters of the text on line 1 to upper case
console.log(text.toUpperCase());
//How to remove the spaces in the beginning and end of the text on line 1?
console.log(text.trim());
```

### String 5

```js
const text = "John 94194";

// Given the text on line 1, replace the space with underscore
console.log(text.replace(" ", "_"));
// Given the text on line 1, replace the first 94 with 00
console.log(text.replace("94", "00"));
// Given the text on line 1, replace all 94 characters with 00
console.log(text.replaceAll("94", "00"));
//How to separate the text on line 1 to two different strings without the space,so we get John and 94194 separately and place each of them into an array?
console.log(text.split(" "));
//How to separate each character of the text on line 1 and place them into an array?
console.log(text.split(""));
```

### String 6

```js
let some = (20 / 5) * 2 + "9";

// What is the output below? and what type of value do we get?
console.log(some); //When operators in an expression have the same precedence, JavaScript evaluates the expression from left to right.So division and multiplication have the same precedence therefore 20 / 5 is calculated first and then 4 * 2 second and then 8 is concatenated with 9 giving us a string 89

let str = "Interview";

// How to reverse the str string?
// text.split will split each character in a string and then inserts each character into an array, we then reverse each character in the array using the built-in reverse method and join each character
console.log(str.split("").reverse().join(""));

//How to reverse the str variable above without using the built-in reverse, reduce method? You are not allowed to create a new variable to answer this question to have less space complexity.
for (let i = str.length - 1; i >= 0; i--) {
  str += str[i];
}

str = str.slice(str.length / 2);
console.log(str);

/* Create a function that takes an email as an input and returns true if email is valid or false if email is not valid. Make sure to check if:
    1) There is minimum 1 and maximum 30 characters including only letters between a-z lowercase and uppercase and numbers,underscores,hypens before the @ symbol in the email.
    
    2) There is minimum 1 and maximum 15 characters including only letters between a-z lowercase and uppercase and numbers,hypens in between the @ symbol and the last dot symbol in the email.

    3) There is minimum 2 and maximum 10 characters including only letters between a-z lowercase and uppercase after the last dot symbol in the email.

 */
function checkEmail(email) {
  /*
  ^[a-zA-Z0-9_-]{1,30} means allow letters between a-z lowercase and uppercase and numbers,underscores,hypens minimum 1 and up to 30 of these characters. ^ is a metacharacter, means all these characters must appear at the beginning of the string, email in this case

  @ means ,@ must come right after

  [a-zA-Z0-9-]{1,15} means allow letters between a-z lowercase and uppercase and numbers,hypens minimum 1 and up to 15 of these characters
  
  \. matches the dot so dot must come after, we escaped dot using a backslash because dot has special meaning in regular expression so we need to escape it after a character class(square brackets)

  [a-zA-Z]{2,10}$  means allow letters between a-z lowercase and uppercase minimum 2 letters and up to 10 letters following $ sign which is a metacharacter in regular expression means that the pattern right before $ sign must appear at the end of the string.
  */
  const emailReg = /^[a-zA-Z0-9_-]{1,30}@[a-zA-Z0-9-]{1,15}\.[a-zA-Z]{2,10}$/;
  return emailReg.test(email);
}

console.log(checkEmail("som_d-e@example.info"));

// What is the value and type of the variable 'a' below?
let a = 2 + "10" / 4; // division has a higher precedence than addition so first string 10 and number 4 is calculated, string 10 becomes a typeof number because we have division in between, in javascript when an arithmetic operation(except from +) is calculated involving strings and numbers, strings are converted to a number, so 10 / 4 = 2.5 + 2
console.log(a);
console.log(typeof a);

// What is the value and type of the variable 'b' below?
let b = 2 + "1" - 5; // + and - have the same precedence so we start from the left side concatenate 2 with 1 and get 21 and - 1 turns string 21 into a number so  21 - 5 = 16
console.log(b);
console.log(typeof b);

// What is the value and type of the variable 'c' below?
let c = 2 + "1" + 5; // 215 since we use only string and + so we concatenate numbers with string and get string
console.log(c);
console.log(typeof c);

// What is the value and type of the variable 'd' below?
let d = 6 + "10" * 6; // Multiplication has higher precedence than addition, so first, string 10 and  number 6 is calculated and since there is * in between string 10 becomes a number so  10 * 6 = 60 + 6
console.log(d);
console.log(typeof d);

// What is the value and type of the variable 'e' below?
let e = 6 + ("10" % 3); // modulo operator has a higher precedence than addition so string 10 and modulo 3 is calculated first, 10 becomes a number and we get the remainder from the modulo that is 1 and 6 + 1 = 7 type of number
console.log(e);
console.log(typeof e);
```
