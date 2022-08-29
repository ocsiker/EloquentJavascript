// TODO:  <29-08-22, ocsiker> //
// write function every that take an array and a predicate function as
// parameters.
//
// version 1 using loop
function everyV1(array, func) {
  for (let element of array) {
    if (!func(element)) {
      return false;
    }
  }
  return true;
}

console.log(everyV1([1, -2, 3, 4, 5, 6, 76], (x) => {
  return x > 0;
}));

// version 2 using some method
//

function everyV2(array, func) {
  return !array.some(element => !func(element));
}

console.log(everyV2([3, 2], x => x < 10));
