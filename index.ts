export class Person {
  firstName: string;
  lastName: string;
  age: number;
}

const generatePerson = (partial: Partial<Person> = {}): Person => ({
  firstName: 'Neko',
  lastName: 'Case',
  age: 51,
  ...partial
});

const person1 = generatePerson();
const person2 = generatePerson({
  firstName: 'Kim',
  lastName: 'Gordon'
});

console.log('Person1: ', person1);
console.log('Person2: ', person2);
