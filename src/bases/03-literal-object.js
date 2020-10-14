//console.log('Hello!');

const person = {
  name: 'David',
  lastName: 'Toledo',
  age: 26,
  adress: {
    city: 'Coquimatlan',
    zip: 28400,
    lat: 12.341234,
    lng: 43.324253
  }
};

//console.table(person);

/*
  This is the same object because is passed
  by reference.
  const person2 = person;
*/

// This creates a new object with the same propeties from person.
const person2 = {...person};

person2.name = 'Carlos';

console.log(person);
console.log(person2);