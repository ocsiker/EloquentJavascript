function repeat(number, action) {
  for (let index = 0; index < number; index++) {
    action(index);
  }
}

let labels = [];

repeat(5, i => {
  labels.push(`value of ${i + 1}`);
});

console.log(labels);
