
const object = {
  'honey': 'thoa',
  'number': 9450405
};


console.log(object.toString());


function repeat(n, action) {
  for (let index = 0; index < n; index++) {
    action(index);
  }
}

// use repeat function to print number^2
repeat(10, i => {
  console.log(i ** 2);
});
// use repeat function to print even number
repeat(10, function printEvenNumber(i) {
  if (i % 2 == 0) console.log(i);
});

function isOdd(i) {
  if (i % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

repeat(10, isOdd);

[1, 2, 3, 4, 5].forEach(i => console.log(i ** 2));


let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
}

let killerRabit = Object.create(protoRabbit);
killerRabit.type = 'killer';

killerRabit.speak('\'i\'m a killer\'');

console.log(Object.getPrototypeOf(killerRabit));

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

// create greenRabbit with type 'green'
let greenRabbit = makeRabbit('green');

// greenRabbit say 'green rabbit'
greenRabbit.speak('green rabbit');


// create new rabbit with methods  new
//

function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak =
    function(line) {
  console.log(`The ${this.type} rabbit says ${line}`);
}

let redRabbit = new Rabbit('red');

redRabbit.speak('red rabbit');


console.log(Object.getPrototypeOf(greenRabbit));


class Dog {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} dog says ${line} `);
  }
}

let barbarDog = new Dog('barbarDog');
let chiluhuhu = new Dog('chiluhuhu');

barbarDog.speak('im barbarDog');

let ages = {Boris: 39, Liang: 22, Júlia: 62};

console.log(`Júlia is ${ages['Júlia']} `);
