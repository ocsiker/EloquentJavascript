// TODO:  <29-08-22 ocsiker> //
// write function higher loop
// Its take a value, a test function,
// an update function, and a body function
//


function higherLV1(value, testFunction, bodyFunction, updateFunction) {
  if (!testFunction(value)) {
    return false;
  }

  bodyFunction(value);

  return updateFunction(value);
}

console.log(higherLV1(20, x => {
  if (x > 10) {
    return true;
  } else
    return false
}, x => console.log(x), (x) => {return x * 2}));


function loop(start, testFunction, updateFunction, bodyFunction) {
  for (let index = start; testFunction(index); index = updateFunction(index)) {
    bodyFunction(index);
  }
}

loop(3, n => n > 0, n => {return n - 1}, console.log);
