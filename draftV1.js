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

function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);

console.log(greaterThan10(11));

function noisy(f) {
  return (...arg) => {
    console.log('calling with args', arg);
    let result = f(...arg);
    console.log('called with ', arg, ', returned', result);
    return result;
  };
}

noisy(Math.min)(1, 4, 3, 4, 56);

function unless(test, then) {
  if (!test) then();
}
//
// unless(0, () => {
// console.log('then function');
//})
repeat(6, i => {unless(i % 2 == 1, () => {
            console.log(i, ' is even');
          })});
