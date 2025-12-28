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
