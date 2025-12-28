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

student.showSiblings();
