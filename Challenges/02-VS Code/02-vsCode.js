// Fold the for loops on this doc

function looper(value) {
  if (value === 'one more time') {
    for (let i = 0; i < 100; i++) {
      if (i % 2) {
        console.log(i);
      }
    }
  }
}

function doubleLooper() {
  for (var i = 0; i < 20; i++) {
    console.log('firt loop');
  }
  for (var i = 0; i < 100; i++) {
    console.log('second for loops');
  }
}
