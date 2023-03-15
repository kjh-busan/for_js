class Human {
  contructor() {
    this.gender = 'KJH good';
  }

  printGender() {
    // alert(this.gender);
    // alert('Human');
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'KJH good';
    // this.gender = 'female';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
