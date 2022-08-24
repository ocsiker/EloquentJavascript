// const rompt = require('prompt');
for (let index = 0; index < 10; index++) {
  console.log(index);
}

function showdate(params) {
  console.log(params);
}

showdate(Date());


let number;

if (!Number.isNaN(number)) {
  console.log(number);
}


// rompt.start();

// let name;
// console.log('input your name');
// rompt.get(['name'], function(err, result) {
//  console.log('name is' + result.name);
//})

// console.log(name);
// print triangle #
for (let index = 0; index < 7; index++) {
  for (let subIndex = 0; subIndex < index; subIndex++) {
    process.stdout.write('#');
  }
  console.log();
}
// know length of string
let abc = 'abc';
// console.log(abc.length);

const makeNoise =
    function() {
  console.log('Pling!');
}

makeNoise();

// check different between var let

let x = 10;

if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
// console.log(x + z);

function minus(a, b) {
  if (b == undefined)
    return -a;
  else
    return a - b;
}

// console.log(minus(10));
// console.log(minus(23, 10));

function power(base, exponent = 2) {
  let result = 1;
  for (let ind = 0; ind < exponent; ind++) {
    result *= base;
  }

  return result;
}

// console.log(power(10));
// console.log(power(2, 3));

function powerRecursion(base, exponent) {
  if (exponent == 1)
    return base;
  else
    return base * powerRecursion(base, exponent - 1);
}

// console.log(powerRecursion(2, 5));

function multi(factor) {
  return number => number * factor;
}

let twice = multi(2);
// console.log(twice(4));

// recursion page 50(62 of 447)
function findSolution(target) {
  function heyYou(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return heyYou(current + 5, `(${history} + 5)`) ||
          heyYou(current * 3, `(${history} * 3)`);
    }
  }

  return heyYou(1, '1');
}

// console.log(findSolution(140));
//
// print remain (inventory) of farmer

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

// function printZeroPaddedWithLable(number, lable) {
//  let numberString = String(number);
//  while (numberString < 3) {
//    numberString = '0' + numberString;
//  }
//  console.log(`${numberString} ${lable}`);
//}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} pigs`);
}

printFarmInventory(10, 20, 60);

let todoList = [];
function remember(task) {
  todoList.push(task);
}

function getTask() {
  return todoList.shift();
}

function rememberUrgently(task) {
  todoList.unshift(task);
}

remember('clean room');
remember('work');
remember('reading book');

// show element of arry

rememberUrgently('have breakfast');
function showList(todoList) {
  for (let task of todoList) console.log(task);
}

showList(todoList);

let arr = [0, 1, 2, 3, 4, 5, 6];

console.log(arr.slice(2));

function remove(array, index) {
  return (array.slice(0, index)).concat(array.slice(index + 1));
}

console.log(remove(arr, 5));

// function padStart(number) {
//  let numberString = String(number);
//  while (numberString.length < 3) {
//    numberString = '0' + numberString;
//  }
//}

console.log(String(6).padStart(4, '0'));

let sentence = 'Secretarybirds specialize in stomping';
let words = sentence.split(' ');
console.log(words);
console.log(words.join('.'));

// accept anny of arguments
//
////accept anny of arguments.

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(3, 4, 5, 4, 3, 2, 2, 123, 5, 345, 3, 5, 13, 45, 235));

console.log(max(9, ...arr, 4));


let str = JSON.stringify({squirrel: false, events: ['weekends']});

console.log(str);

console.log(JSON.parse(str).events);
