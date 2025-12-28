const student = {
  name: "Mario",
  siblings: ["Luigi", "Peach", "Yoshi"],

  showSiblings: () => {
    console.log(this.name);
  },
};

student.showSiblings();
