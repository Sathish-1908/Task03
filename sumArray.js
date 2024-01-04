// Sum of all numbers on array using anonymous Function

let SumNumber = function (array) {
  sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(SumNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
