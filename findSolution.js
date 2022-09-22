function findSolution(target) {
  function subFunction(current, history) {
    if (current == target)
      return history;
    else if (current > target)
      return null;
    else {
      return subFunction(current * 2, `(${history}*2)`) ||
          subFunction(current * 5, `(${history}*5)`);
    }
  }
  return subFunction(1, '1');
}

console.log(findSolution(10));
console.log(findSolution(10));
