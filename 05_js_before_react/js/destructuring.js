const numbers = [1, 2, 3];
// 1 2
// [num1, num2] = numbers;

// 1 3
// [num1, ,num3] = numbers;

// console.log(num1, num2);

// const number = 1;
// const num2 = number;

const person = {
  name: 'kjh'
}
const secondPerson = person;
person.name = 'KIM';
// {name: 'KIM'}
console.log(secondPerson);

const sencondPerson2 = {
  ...person
}
person.name = 'lorem';
// {name: 'KIM'}
console.log(sencondPerson2);
