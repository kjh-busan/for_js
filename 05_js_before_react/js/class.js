class Human {
  contructor() {
    this.gender = 'male';
  }

  printGender(){
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'KJH';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
