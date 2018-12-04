// rename the person variable to human everywhere in this document

const person = {
  name: 'Bob Ross',
  age: 52,
};

if (person.name === 'Bob Ross') {
  person.age = Infinity;
} else {
  person.name = 'Bob Ross';
}

for (let i = 0; person.name.length; i++) {
  console.log(person.name[i]);
}
