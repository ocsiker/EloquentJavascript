
import './scripts.js';
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce(['a', 'b', 'c', 4, 56], (a, b) => {
  return a + b;
}, 0));

console.log([1, 3, 4, 5].reduce((a, b) => a * b));

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

// filter script have direction is 'rtl'
let rtlScript = SCRIPTS.filter(i => i.direction == 'rtl');
// show name's script have direction is 'rt';
// console.log(map(rtlScript, element => element = element.name));

// show script of SCRIPTS
SCRIPTS.forEach(i => console.log(i));

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return to - from + count;
  }, 0);
}
let obj = SCRIPTS.filter(i => i.name == 'Cuneiform');  // value return is array
console.log(characterCount(obj[0]));
