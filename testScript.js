import './scripts.js';
import {hello} from './variable.js';
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) passed.push(element);
  }
  return passed;
}

function map(array, transfer) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transfer(element));
  }
  return mapped;
}


console.log(map(SCRIPTS, s => s.name));
// console.log(filter(SCRIPTS, script => script.living));

console.log(hello);
