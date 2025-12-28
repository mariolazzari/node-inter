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
