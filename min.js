let arr = [4, 5, 2, 5, 7, 8, -2, 45, 62];

let min = arr[0];
for (let index = 1; index < arr.length; index++) {
  if (arr[index] < min) min = arr[index];
}

function minFunction(paraOne, paraTwo) {
  return paraOne < paraTwo ? paraOne : paraTwo;
}
console.log(min)

console.log(minFunction(5, 7));
