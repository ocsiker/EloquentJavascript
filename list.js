
function arrayToList(array) {
  let list = null;
  for (let index = array.length; index >= 0; index--) {
    list = {value: array[index], rest: list};
  }
  return list;
}

console.log(arrayToList([1, 2, 3, 4]));

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

console.log(listToArray(arrayToList([1, 2, 3, 4, 5, 6])));

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([1, 2, 3, 4, 5, 6]), 4));
