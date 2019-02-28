// rename the human variable to human everywhere in this document

const human = {
  name: 'Bob Ross',
  age: 52,
};

if (human.name === 'Bob Ross') {
  human.age = Infinity;
} else {
  human.name = 'Bob Ross';
}

for (let i = 0; human.name.length; i++) {
  console.log(human.name[i]);
}
