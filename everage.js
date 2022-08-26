// TODO:  <26-08-22 ocsiker> //
// function average page 90(102 of 447)
//

import './scripts.js';

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(SCRIPTS.forEach(element => {
  console.log(element);
}));



console.log(average(SCRIPTS.filter(s => s.living).map(s => s.year)));
