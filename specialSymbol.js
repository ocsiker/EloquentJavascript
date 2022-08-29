import './scripts.js';

// SCRIPTS.forEach(element => {
//  console.log(element);
//});


// make object of arrays become array
// 1.array of arrays into single array
// 2.concat element of array has converted

function flatten(scripts) {
  let arrays = [];
  // make object in scripts => array
  scripts.forEach(element => {
    arrays.push(Object.values(element));
  });
  return arrays.reduce((flat, element) => {
    // make all element of arrays becom one arrays
    //[['flasjf',13,'rtl',...],['fakd',42,'ltf',...]] =>
    //['flasjf',13,rtl,...,fakd,42,ltf]
    return flat.concat(element);
  }, []);
}
console.log(flatten(SCRIPTS)[211]);

// let object = {name: 'hello', age: 32, year: 1989, living: true};

// console.log(Object.values(object));
