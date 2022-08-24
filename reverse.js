
function reverseArray(array) {
  let length = array.length;
  let reArr = [];
  for (let index = length - 1; index >= 0; index--) {
    reArr.push(array[index]);
  }
  return reArr;
}
function reverseArrayInPlace(array) {
  for (let index = 0; index < array.length / 2; index++) {
    let old = array[index];
    array[index] = array[array.length - 1 - index];
    array[array.length - 1 - index] = old;
  }
  return array;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));
