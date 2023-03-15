class Human {
  gender = 'male';
  // constructor() {
  //   this.gender = 'male';
  // }

  printGender() {
    console.log('gender = ' + this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'KJH';
    // this.gender = 'female';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
