const {type} = require('os');

function countChar(string, char) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] == char) count++;
  }
  return count;
}
function countBs(string) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] == 'B') {
      count++;
    }
  }
  return count;
}

console.log(`${countBs('abfasBfasljBbBfasfBBB')}`);

console.log(`${countChar('fjsflafljaljraf', 'f')}`);

let person1 = {name: 'thang', age: '32'};
let person2 = {name: 'thang1', age: '33'};
let person3 = {name: 'thang2', age: '34'};

console.log(person1.name);

console.log(Object.keys(person1));

let person = [person1, person2, person3];

console.log(typeof person);
console.log(person[0].name);
