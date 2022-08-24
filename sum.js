// TODO: write sum function that take input from aarrry
// range function have two parameters,
// update range function with step to jump//


function sum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

function range(start, end, step = start < end ? 1 : -1) {
  let arr = [];
  if (step > 0) {
    for (let index = start; index <= end; index += step) {
      arr.push(index);
    }
  } else {
    for (let index = start; index >= end; index += step) {
      arr.push(index);
    }
  }
  return arr;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));

console.log(sum(range(3, 20, 2)));
console.log(range(3, 20, 2));
