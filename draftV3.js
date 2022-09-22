let ages = new Map();

ages.set('Boris', 39);
ages.set('Liang', 27);
ages.set('Julia', 62);

// e.log(`show age of Boris ${ages.get('Boris')}`);
//
let obj = {name: 'thang', age: 33};
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says ${line}`);
};

// rabbit.speak('hello i\'m a rabbit');

function speak(line)
{
  console.log(`The ${this.type} rabbit says ${line}`);
}

let whiteRabbit = {type: 'white', speak};
let blackRabit = {type: 'black', speak};

// whiteRabbit.speak('i\'m white rabbit');

// speak.call(whiteRabbit, 'im starving');

function normalize()
{
  console.log(this.coords.map(n => n / this.length));
}

// normalize.call({coords: [1, 2, 3, 4, 5], length: 5});

let empty = {};
// console.log(empty.toString);
//
//
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
}

let killerRabbit = Object.create(protoRabbit);

killerRabbit.type = 'killer';
// killerRabbit.speak('i\'m killer');
// create prototype on prototype defined
let grapRabbit = Object.create(killerRabbit);

// grapRabbit.speak('grap not killer rabbit');
//

// This is CONSTRUCTOR function
//


function makeRabbit(type)
{
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

let purpleRabbit = makeRabbit('purple');
// purpleRabbit.speak('new purple rabbit');
function Rabbit(type)
{
  this.type = type;
}

Rabbit.prototype.speak = function(line) {
  console.log(`Prototype: The ${this.type} rabbit says ${line}`);
};
let brownRabbit = new Rabbit('Brown');


// brownRabbit.speak('brown it\'s me');

// console.log(Object.getPrototypeOf(brownRabbit));
//
class RabbitV1 {
  constructor(type)
  {
    this.type = type;
  }
  // not use function before property declare in class
  speak(line)
  {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
}

let clBlackRabbit = new RabbitV1('clBlack');
let digitRabbit = new RabbitV1(123);
// digitRabbit.speak('this is digit Rabbit');
// clBlackRabbit.speak('this is clone black rabbit');
//
// let obj = {name: 'thang', age: 33};

// show property name of prototype
// console.log(Object.getOwnPropertyNames(Map.prototype.set));
//
Rabbit.prototype.toString =
    function() {
  return `a ${this.type} rabbit`;
}

let grayRabbit = new Rabbit('gray');
console.log(grayRabbit.toString());

let ar = [1, 2, 3, 4, 5];
console.log(ar.map(x => x * 2));
console.log(ar);
