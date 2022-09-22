// this is practical about Symbol fucntion page 107

class Rabbit {
  constructor(type)
  {
    this.type = type;
  }
  speak(line)
  {
    console.log(`The ${this.type} rabbit say ${line}`);
  }
}
let blackRabbit = new Rabbit('black');

blackRabbit.speak('hi i\'m black');

let sym = Symbol('name');

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);

const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yearn`
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

let okIterator = 'OK'[Symbol.iterator]();
console.log(okIterator.next());
